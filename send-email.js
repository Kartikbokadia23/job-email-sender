import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import fs from "fs";
import inquirer from "inquirer";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Load resume
const resumePath = "https://drive.google.com/file/d/1lu50yetna5geS-muEA9-Kquc578yuc5C/view?usp=sharing";
// const fileData = fs.readFileSync(resumePath).toString("base64");

async function main() {
  // Ask inputs
  const answers = await inquirer.prompt([
    { name: "company", message: "Enter company name:" },
    { name: "position", message: "Enter job position:" },
    { name: "email", message: "Enter recruiter email:" },
  ]);

  const { company, position, email } = answers;

  // Auto-generate subject + body
  const subject = `Application for ${position} Position at ${company || "Company"}`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9;">
      <p>Dear Hiring Manager,</p>

      <p>
        I am writing to express my interest in the <b>${position}</b> position at <b>${company || "your company"}</b>.
        With over 3 years of experience building scalable, performant web applications in <b>React.js, Next.js, and TypeScript</b>,
        I am confident in my ability to contribute effectively to your team.
      </p>

      <p>
        <a href="${resumePath}">Please find attached my resume</a>. I would welcome the opportunity to discuss how my skills
        and experience align with your needs.
      </p>

      <p>Thank you for your time and consideration.</p>

      <p>
        Best regards,<br/>
        Kartik Bokadia<br/>
        📧 <a href="mailto:kartikbokadia@gmail.com">kartikbokadia@gmail.com</a> |
        📱 +91-XXXXXXXXXX
      </p>
    </div>
  `;

  // Send email
  const msg = {
    to: email,
    from: "kartikbokadia@gmail.com", // must be verified in SendGrid
    subject,
    text: `Hello, I am applying for the ${position} role at ${company || "your company"}. Please find my resume attached.`,
    html: htmlBody
  };

  try {
    await sgMail.send(msg);
    console.log("✅ Application email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
}

main();
