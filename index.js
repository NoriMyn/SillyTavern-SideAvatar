// Функция для загрузки CSS
function loadStyles() {
    const extensionName = "SillyTavern-SideAvatar"; // Должно совпадать с папкой на GitHub
    const styleId = "side-avatar-styles";

    if (!document.getElementById(styleId)) {
        const link = document.createElement('link');
        link.id = styleId;
        link.rel = 'stylesheet';
        // Путь идет от корня /extensions/
        link.href = `/extensions/${extensionName}/style.css`;
        document.head.appendChild(link);
    }
}

// Запуск при загрузке
(function() {
    loadStyles();
    console.log("Side Avatar Extension loaded!");
})();
