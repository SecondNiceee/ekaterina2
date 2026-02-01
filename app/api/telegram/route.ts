import { NextRequest, NextResponse } from "next/server"

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

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID")
      return NextResponse.json(
        { error: "Ошибка конфигурации сервера" },
        { status: 500 }
      )
    }

    // Format message for Telegram
    const telegramMessage = `
🔔 *Новая заявка: Второе мнение*

👤 *ФИО:* ${escapeMarkdown(name)}
📧 *Email:* ${escapeMarkdown(email)}

💬 *Сообщение:*
${escapeMarkdown(message)}

📅 *Дата:* ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}
    `.trim()

    // Send message to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      }
    )

    const telegramResult = await telegramResponse.json()

    if (!telegramResponse.ok) {
      console.error("Telegram API error:", telegramResult)
      return NextResponse.json(
        { error: "Ошибка отправки сообщения" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending telegram message:", error)
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    )
  }
}

// Escape special Markdown characters for Telegram
function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, "\\$&")
}
