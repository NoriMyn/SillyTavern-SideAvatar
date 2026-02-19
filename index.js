/* РАСШИРЯЕМ ЧАТ ПО МАКСИМУМУ */
#chat {
    max-width: 98% !important;
    width: 98% !important;
    margin: 0 auto !important;
}

/* КОНТЕЙНЕР СООБЩЕНИЯ */
.mes {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    gap: 20px !important;
    margin-bottom: 30px !important;
}

/* АВАТАРКА: УЗКАЯ И ОЧЕНЬ ДЛИННАЯ */
.mes .avatar {
    order: -1 !important;
    width: 220px !important;      /* Фиксируем ширину */
    min-width: 220px !important;
    height: 800px !important;     /* ВОТ ОНА - ДЛИНА! Поставь 900 или 1000, если надо ещё больше */
    flex-shrink: 0 !important;
    overflow: hidden !important;
}

.mes .avatar img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important; /* Картинка заполнит всю высоту без искажений */
    object-position: top center !important;
    border-radius: 10px !important;
    /* Мягкий градиент внизу, чтобы картинка красиво уходила в тень */
    -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
}

/* ТЕКСТ: ШИРОКИЙ И СВОБОДНЫЙ */
.mes_block {
    flex: 1 !important;
    background: rgba(15, 15, 15, 0.75) !important;
    backdrop-filter: blur(8px) !important;
    border-radius: 15px !important;
    padding: 25px 35px !important;
    min-width: 0 !important;
}

.mesAvatarWrapper { display: contents !important; }
