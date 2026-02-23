import { NextResponse } from "next/server";
import { transporter } from "@/lib/email";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, business, budget, message } = body;

    // ---------------------------
    // SERVER SIDE VALIDATION
    // ---------------------------

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }


    const mailOptions = {
      from: `"Vurizo Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Lead from Vurizo Website",
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Business:</strong> ${business || "Not provided"}</p>
        <p><strong>Budget:</strong> ${budget || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // ---------------------------
    // SEND EMAIL
    // ---------------------------

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true,
        message: "Thank you! we'll connect you soon"
     });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
       
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}