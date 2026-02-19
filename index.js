(function() {
    function fixAvatars() {
        const avatars = document.querySelectorAll('.mes .avatar img');
        avatars.forEach(img => {
            // Очищаем все инлайн-стили, которые мешают размеру
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.borderRadius = '0'; 
            img.style.objectFit = 'cover';
        });
    }

    fixAvatars();
    new MutationObserver(fixAvatars).observe(document.getElementById('chat') || document.body, {
        childList: true, subtree: true
    });
})();
