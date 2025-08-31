# 📧 Job Application Mailer

A simple **Node.js command-line app** that automates sending **job application emails** to recruiters.

This app generates a professional recruiter mail with:

- ✅ Custom **Company Name** and **Position**
- ✅ Recruiter’s email as recipient
- ✅ A polished **plain text** (ATS-friendly) + **HTML** (recruiter-friendly) email body
- ✅ Your resume attached (PDF)
- ✅ Your resume also linked via **Google Drive**

---

## 🚀 Features

- Enter **Company**, **Position**, and **Recruiter Email** → the app auto-generates subject + body.
- Email is sent **directly via Gmail** (trusted → less chance of going to Spam).
- Resume is **attached** and also linked (extra convenience).
- Runs in the command line → `node app.js`.

---

## 🛠️ Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/job-email-sender.git
cd job-email-sender
```

### 2. Install dependencies

```bash
npm install
```

### 3. Gmail App Password

This app uses your Gmail account securely via **App Passwords**.

Steps:

1. Enable **2-Step Verification** in your [Google Security Settings](https://myaccount.google.com/security).
2. Generate an **App Password** in [Google App Passwords](https://myaccount.google.com/apppasswords).
3. Copy the 16-character password.

### 4. Environment Variables

Create a `.env` file in the project root:

```env
GMAIL_USER=yourgmail@gmail.com
GMAIL_PASS=your16charAppPassword
```

### 5. Add Resume

- Place your resume PDF in the project root with the name:

```
Kartik_Bokadia_Resume.pdf
```

- Also update the **Google Drive share link** inside `app.js`:

```js
const resumeLink = "https://drive.google.com/your-shareable-resume-link";
```

---

## ▶️ Usage

Run the app:

```bash
node send-email.js
```

You’ll be prompted:

```
Enter company name: Uber
Enter job position: Frontend Engineer
Enter recruiter email: recruiter@uber.com
```

The app will then generate and send an email.

---

## 📧 Example Output

**Subject:**

```
Application for Frontend Engineer Position at Uber
```

**Plain Text Body (ATS-friendly):**

```
Hello,

I am writing to express my interest in the Frontend Engineer role at Uber.
With 4+ years of experience in React.js, Next.js, TypeScript, and modern UI frameworks,
I build scalable, high-performance applications that improve user experience and deliver measurable results.

I have attached my resume for your review, and you can also view it here: https://drive.google.com/your-shareable-resume-link

I would welcome the opportunity to discuss how my skills and experience align with Uber’s needs.

Thank you for your time and consideration.

Best regards,
Kartik Bokadia
📧 kartikbokadia@gmail.com
📱 +91-9588053012
LinkedIn: https://linkedin.com/in/kartikbokadia
```

**HTML Body (Recruiter-facing):**

```html
<div
  style="font-family: Arial, sans-serif; line-height: 1.6; background:#f9f9f9; padding:20px;"
>
  <p>Hello,</p>
  <p>
    I am writing to express my interest in the <b>Frontend Engineer</b> role at
    <b>Uber</b>. With 4+ years of experience in
    <b>React.js, Next.js, TypeScript</b>, and modern UI frameworks, I build
    scalable, high-performance applications that improve user experience and
    deliver measurable results.
  </p>
  <p>
    I have attached my resume for your review, and you can also
    <a
      href="https://drive.google.com/your-shareable-resume-link"
      target="_blank"
      >view it here</a
    >.
  </p>
  <p>
    I would welcome the opportunity to discuss how my skills and experience
    align with
    <b>Uber’s</b> needs.
  </p>
  <p>Thank you for your time and consideration.</p>
  <p>
    Best regards,<br />
    <b>Kartik Bokadia</b><br />
    📧 <a href="mailto:kartikbokadia@gmail.com">kartikbokadia@gmail.com</a
    ><br />
    📱 +91-9588053012<br />
    🔗
    <a href="https://linkedin.com/in/kartikbokadia" target="_blank">LinkedIn</a>
  </p>
</div>
```

---

## ⚠️ Notes

- Use this responsibly. Do not spam recruiters.
- Emails are sent directly via your Gmail account (so inbox placement is strong).
- Make sure your **App Password** is stored securely (never commit `.env` to GitHub).
- You can extend this project to support **bulk sending** from a CSV list of recruiters.

---

## 📜 License

This project is for personal use and learning purposes.
