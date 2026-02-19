(function() {
    console.log('[SideAvatar] Extension loading...');

    function styleAvatars() {
        // Мы просто находим аватарки и убеждаемся, что они не зажаты темой
        const avatars = document.querySelectorAll('.mes .avatar img');

        avatars.forEach(img => {
            // Убираем инлайн-стили, которые наставил прошлый скрипт
            img.style.width = '';
            img.style.height = '';
            img.style.borderRadius = '';
            img.style.objectFit = '';
            img.style.border = '';
            img.style.boxShadow = '';
        });
    }

    styleAvatars();

    const observer = new MutationObserver(() => {
        styleAvatars();
    });

    observer.observe(document.getElementById('chat') || document.body, {
        childList: true,
        subtree: true
    });

    console.log('[SideAvatar] ✓ Cleanup logic initialized!');
})();