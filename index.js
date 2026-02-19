(function() {
    const extensionName = "SillyTavern-SideAvatar";
    const extensionFolderPath = `scripts/extensions/third-party/${extensionName}`;

    console.log('[SideAvatar] Extension loading...');

    // Загружаем CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = `/${extensionFolderPath}/style.css`;
    document.head.appendChild(cssLink);

    console.log('[SideAvatar] CSS loaded from:', cssLink.href);

    // Проверяем что CSS загрузился
    cssLink.onload = () => {
        console.log('[SideAvatar] ✓ Styles applied successfully!');
    };

    cssLink.onerror = () => {
        console.error('[SideAvatar] ✗ Failed to load styles!');
    };

})();
