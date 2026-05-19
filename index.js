import express from "express";
import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8744896216:AAGjgV-QS3j2JuvLNUN4vzEpzLVobxdLdWI";

const WEBAPP_URL = "https://tarot-app-1-ek9i.onrender.com";

const app = express();

app.use(express.static("public"));

const bot = new TelegramBot(TOKEN, {
  polling: true
});

bot.onText(/\/start/, async (msg) => {
  await bot.sendMessage(
    msg.chat.id,
    "🔮 Tarot Oracle",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Открыть Таро",
              web_app: {
                url: WEBAPP_URL
              }
            }
          ]
        ]
      }
    }
  );
});

const cards = [
  "The Fool",
  "The Magician",
  "The Lovers",
  "The Moon",
  "The Sun"
];

app.get("/api/draw", (req, res) => {

  const card =
    cards[Math.floor(Math.random() * cards.length)];

  res.json({
    card,
    meaning: "Карта раскрывает скрытую энергию."
  });

});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
