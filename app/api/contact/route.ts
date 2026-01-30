import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, eventType, date, guests, message } = body;

    // Validate required fields
    if (!name || !email || !eventType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const emailHtml = `
      <h2>New Event Inquiry - Markey Gallery</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      <hr />
      <p><strong>Event Type:</strong> ${eventType}</p>
      ${date ? `<p><strong>Preferred Date:</strong> ${date}</p>` : ''}
      ${guests ? `<p><strong>Number of Guests:</strong> ${guests}</p>` : ''}
      ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
      <hr />
      <p><small>Sent from markeygallery.com contact form</small></p>
    `;

    const emailText = `
New Event Inquiry - Markey Gallery

From: ${name} (${email})
---
Event Type: ${eventType}
${date ? `Preferred Date: ${date}` : ''}
${guests ? `Number of Guests: ${guests}` : ''}
${message ? `Message:\n${message}` : ''}
---
Sent from markeygallery.com contact form
    `;

    // Send email
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || 'Markey Gallery'}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_TO_EMAIL,
      replyTo: email,
      subject: `New Event Inquiry: ${eventType} - ${name}`,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
