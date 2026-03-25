import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO ?? "michal.bialek@opoczta.pl",
    replyTo: email,
    subject: `[Portfolio] Wiadomość od ${name}`,
    text: `Od: ${name} <${email}>\n\n${message}`,
    html: `
      <p><strong>Od:</strong> ${name} &lt;${email}&gt;</p>
      <hr/>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
