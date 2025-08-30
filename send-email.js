import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import inquirer from "inquirer";
dotenv.config();

// local resume file (keep in same folder as app.js)
const resumePath = "./resume/Kartik_Bokadia_Frontend_Resume.pdf";
// Google Drive link to resume (make sure it’s shareable)
const resumeLink = "https://drive.google.com/file/d/1lu50yetna5geS-muEA9-Kquc578yuc5C/view?usp=sharing";

async function main() {
  // ask details
  const answers = await inquirer.prompt([
    { name: "company", message: "Enter company name:" },
    { name: "position", message: "Enter job position:" },
    { name: "email", message: "Enter recruiter email:" },
  ]);

  const { company, position, email } = answers;

  // Gmail transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,       // your Gmail
      pass: process.env.GMAIL_PASS,       // Gmail App Password (16 chars)
    },
  });

  // subject line
  const subject = `Application for ${position} Position at ${company || "your firm"}`;

  // plain text (ATS-friendly)
  const textBody = `
Hello,

I am writing to express my interest in the ${position} role at ${company || "your company"}.
With 4+ years of experience in React.js, Next.js, TypeScript, and modern UI frameworks,
I build scalable, high-performance applications that improve user experience and deliver measurable results.

I have attached my resume for your review, and you can also view it here: ${resumeLink}.

I would welcome the opportunity to discuss how my skills and experience align with ${company || "your company"}’s needs.

Thank you for your time and consideration.

Best regards,
Kartik Bokadia
📧 kartikbokadia@gmail.com
📱 +91-9588053012
LinkedIn: https://linkedin.com/in/kartikbokadia
`;

  // HTML version (recruiter-facing)
  const htmlBody = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; background:#f9f9f9; padding:20px;">
    <p>Hello,</p>

    <p>
      I am writing to express my interest in the <b>${position}</b> role at <b>${company || "your company"}</b>.
      With 4+ years of experience in <b>React.js, Next.js, TypeScript</b>, and modern UI frameworks,
      I build scalable, high-performance applications that improve user experience and deliver measurable results.
    </p>

    <p>
      I have attached my resume for your review, and you can also
      <a href="${resumeLink}" target="_blank">view it here</a>.
    </p>

    <p>
      I would welcome the opportunity to discuss how my skills and experience align with
      <b>${company || "your company"}’s</b> needs.
    </p>

    <p>Thank you for your time and consideration.</p>

    <p>
      Best regards,<br/>
      <b>Kartik Bokadia</b><br/>
      📧 <a href="mailto:kartikbokadia@gmail.com">kartikbokadia@gmail.com</a><br/>
      📱 +91-9588053012<br/>
      🔗 <a href="https://linkedin.com/in/kartikbokadia" target="_blank">LinkedIn</a>
    </p>
  </div>
`;

  // mail config
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject,
    text: textBody,
    html: htmlBody,
    attachments: [
      {
        filename: "Kartik_Bokadia_Resume.pdf",
        path: resumePath,
      },
    ],
  };

  // send mail
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("❌ Error:", err);
    } else {
      console.log("✅ Email sent:", info.response);
    }
  });
}

main();
