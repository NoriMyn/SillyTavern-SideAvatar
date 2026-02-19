(function() {
    function injectStyles() {
        const styleId = "side-avatar-css";
        if (!document.getElementById(styleId)) {
            const link = document.createElement('link');
            link.id = styleId;
            link.rel = 'stylesheet';
            // Прописываем путь напрямую, так надежнее
            link.href = '/extensions/SillyTavern-SideAvatar/style.css'; 
            document.head.appendChild(link);
        }
    }

    injectStyles();
    console.log("SideAvatar: Стили успешно загружены!");
})();
