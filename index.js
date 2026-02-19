(function() {
    console.log('[SideAvatar] Extension loading...');

    // Функция стилизации аватарок
    function styleAvatars() {
        // Находим все картинки аватарок
        const avatars = document.querySelectorAll('.mes .avatar img, .avatar img');

        avatars.forEach(img => {
            img.style.width = '50px';
            img.style.height = '50px';
            img.style.borderRadius = '50%';
            img.style.objectFit = 'cover';
            img.style.border = '3px solid rgba(255, 200, 100, 0.7)';
            img.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
        });

        console.log(`[SideAvatar] Styled ${avatars.length} avatars`);
    }

    // Стилизуем при загрузке
    styleAvatars();

    // Стилизуем при появлении новых сообщений
    const observer = new MutationObserver(() => {
        styleAvatars();
    });

    observer.observe(document.getElementById('chat') || document.body, {
        childList: true,
        subtree: true
    });

    console.log('[SideAvatar] ✓ Initialized!');
})();
