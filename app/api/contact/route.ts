import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, budget, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and email are required.",
        },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailFrom = process.env.MAIL_FROM;
    const mailTo = process.env.MAIL_TO;

    if (!smtpHost || !smtpUser || !smtpPass || !mailFrom || !mailTo) {
      return NextResponse.json(
        {
          success: false,
          message: "Email server environment variables are missing.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Parwaaz Contact Form" <${mailFrom}>`,
      to: mailTo,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Budget:</strong> ${budget || "N/A"}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${message || "N/A"}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error: any) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to send message.",
      },
      { status: 500 }
    );
  }
}