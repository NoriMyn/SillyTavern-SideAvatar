(function() {
    function injectStyles() {
        const styleId = "side-avatar-css";
        if (!document.getElementById(styleId)) {
            const link = document.createElement('link');
            link.id = styleId;
            link.rel = 'stylesheet';
            // Указываем путь от корня сервера SillyTavern
            link.href = '/scripts/extensions/SillyTavern-SideAvatar/style.css'; 
            document.head.appendChild(link);
        }
    }
    injectStyles();
    console.log("SideAvatar: Стили установлены вручную!");
})();