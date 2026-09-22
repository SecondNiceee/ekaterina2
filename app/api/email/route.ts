import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Все поля обязательны для заполнения" },
        { status: 400 }
      )
    }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASSWORD
    const from = process.env.SMTP_FROM || user
    const to = process.env.MAIL_TO || user

    if (!host || !user || !pass || !to) {
      console.error("[v0] Missing SMTP configuration")
      return NextResponse.json(
        { error: "Ошибка конфигурации сервера" },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      // Port 465 uses implicit TLS; other ports use STARTTLS.
      secure: process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE === "true"
        : port === 465,
      auth: { user, pass },
    })

    const date = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
    })

    const text = `Новая заявка: Второе мнение

ФИО: ${name}
Email: ${email}

Сообщение:
${message}

Дата: ${date}`

    const html = `
      <div style="font-family: Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">Новая заявка: Второе мнение</h2>
        <p><strong>ФИО:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Сообщение:</strong></p>
        <p style="white-space: pre-wrap; padding: 12px; background: #f5f5f5; border-radius: 8px;">${escapeHtml(
          message
        )}</p>
        <p style="color: #666; font-size: 13px; margin-top: 16px;">Дата: ${date}</p>
      </div>
    `

    await transporter.sendMail({
      from: `"Второе мнение" <${from}>`,
      to,
      replyTo: email,
      subject: `Второе мнение — заявка от ${name}`,
      text,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    )
  }
}

// Escape special HTML characters to prevent injection in the email body
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
