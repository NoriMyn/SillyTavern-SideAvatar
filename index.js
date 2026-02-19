(function() {
    // Скрипт больше не трогает размеры, давая CSS делать свою работу
    function clearInlineStyles() {
        const avatars = document.querySelectorAll('.mes .avatar img');
        avatars.forEach(img => {
            img.style.width = '';
            img.style.height = '';
            img.style.borderRadius = '';
        });
    }
    clearInlineStyles();
    new MutationObserver(clearInlineStyles).observe(document.getElementById('chat') || document.body, {
        childList: true, subtree: true
    });
})();
