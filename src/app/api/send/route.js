import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    // ตรวจสอบค่า email, subject, message ว่ามีค่าหรือไม่
    if (!email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,  // ต้องอยู่ในรูปแบบที่ถูกต้อง
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>ขอบคุณที่ติดต่อมาครับ!</p>
          <p>ข้อความใหม่ :</p>
          <p>{message}</p>
        </>
      ),
    });

    // ตรวจสอบข้อผิดพลาดจาก Resend API
    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // ล็อกข้อผิดพลาดของเซิร์ฟเวอร์
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
