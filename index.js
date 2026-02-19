(function() {
    function cleanStyles() {
        // Находим картинки и убираем инлайн-стили, которые мешают CSS
        const avatars = document.querySelectorAll('.mes .avatar img');
        avatars.forEach(img => {
            img.style.width = '';
            img.style.height = '';
            img.style.borderRadius = '';
            img.style.border = '';
            img.style.boxShadow = '';
        });
    }

    cleanStyles();
    // Следим за новыми сообщениями
    new MutationObserver(cleanStyles).observe(document.getElementById('chat') || document.body, {
        childList: true, subtree: true
    });
})();
