(function() {
    function cleanUp() {
        const avatars = document.querySelectorAll('.mes .avatar img');
        avatars.forEach(img => {
            // Удаляем мусорные стили, которые всё ломают
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.borderRadius = '0';
            img.style.border = 'none';
            img.style.boxShadow = 'none';
        });
    }

    cleanUp();
    new MutationObserver(cleanUp).observe(document.getElementById('chat') || document.body, {
        childList: true, subtree: true
    });
})();
