(function() {
    // Эта магия сама находит путь к твоей папке, как бы она ни называлась
    const scriptPath = document.currentScript.src;
    const extensionPath = scriptPath.substring(0, scriptPath.lastIndexOf('/'));

    function injectStyles() {
        const styleId = "side-avatar-css";
        if (!document.getElementById(styleId)) {
            const link = document.createElement('link');
            link.id = styleId;
            link.rel = 'stylesheet';
            link.href = `${extensionPath}/style.css?v=${Date.now()}`; // ?v= добавляет сброс кэша
            document.head.appendChild(link);
        }
    }

    // Запускаем внедрение стилей
    injectStyles();
    console.log("SideAvatar: Стили успешно подключены из " + extensionPath);
})();
