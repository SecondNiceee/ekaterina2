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
SMTP_HOST - адрес SMTP-сервера (например smtp.yandex.ru)
SMTP_PORT - порт SMTP (обычно 587, либо 465 для SSL)
SMTP_SECURE - "true" для неявного TLS (обычно с портом 465), иначе "false"
SMTP_USER - логин (email) для SMTP
SMTP_PASSWORD - пароль (или пароль приложения) для SMTP
SMTP_FROM - адрес отправителя (по умолчанию берётся SMTP_USER)
MAIL_TO - адрес, на который приходят заявки "Второе мнение" (по умолчанию SMTP_USER)
NEXT_PUBLIC_BASE_URL=https://smartcardio.ru/ekaterina - url для SEO
NEXT_PUBLIC_BASE_PATH=/ekaterina - Базовый путь, от которого будут идти файлы 
