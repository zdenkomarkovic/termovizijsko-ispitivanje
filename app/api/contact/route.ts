import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Popunite sva obavezna polja (ime, telefon, poruka)." },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILJET_API_KEY;
    const secretKey = process.env.MAILJET_SECRET_KEY;
    const sender = process.env.SITE_MAIL_SENDER;
    const receiver = process.env.SITE_MAIL_RECEIVER;

    if (!apiKey || !secretKey || !sender || !receiver) {
      console.error("Mailjet env varijable nisu konfigurisane.");
      return NextResponse.json(
        { error: "Servis za slanje poruka nije dostupan." },
        { status: 500 }
      );
    }

    const credentials = Buffer.from(`${apiKey}:${secretKey}`).toString("base64");

    const emailBody = `Nova poruka sa sajta Termovizija 034
================================

Ime i prezime: ${name}
Telefon: ${phone}
Email: ${email || "nije naveden"}

Poruka:
${message}

================================
Poruka primljena sa: termovizija034.rs`;

    const response = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({
        Messages: [
          {
            From: {
              Email: sender,
              Name: "Termovizija 034 - Kontakt forma",
            },
            To: [
              {
                Email: receiver,
                Name: "Lazar Vlahović",
              },
            ],
            Subject: `Nova poruka od ${name} | Termovizija 034`,
            TextPart: emailBody,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Mailjet greška:", errorData);
      return NextResponse.json(
        { error: "Greška pri slanju poruke. Pokušajte ponovo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API greška:", err);
    return NextResponse.json(
      { error: "Interna greška servera." },
      { status: 500 }
    );
  }
}
