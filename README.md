Персональный сайт Кати

Расположен по адресу: 
https://smartcardio.ru/ekaterina/ 

Разработчик: Коля

------------------------------------------

Как зпустить проект.

pnpm i // Установка зависимостей
pnpm build // сборка проект в .next
pnpm start // запуска проекта

Чтобы запустить проект на порту не равном 3000
используем команду:
Для windows:
$env:PORT=3001; pnpm start

Для Linux:
PORT=3001 pnpm start

Вместо 3001 можно вставить любой другой порт.

-----------------------------------------

Переменные окружения:
TELEGRAM_BOT_TOKEN - токен бота
TELEGRAM_CHAT_ID - Чат Id бота
NEXT_PUBLIC_BASE_URL=https://smartcardio.ru/ekaterina - url для SEO
NEXT_PUBLIC_BASE_PATH=/ekaterina - Базовый путь, от которого будут идти файлы 
