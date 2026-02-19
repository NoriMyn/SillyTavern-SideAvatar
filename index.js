(function() {
    // Скрипт больше не задает размеры, отдавая контроль CSS
    const observer = new MutationObserver(() => {
        document.querySelectorAll('.mes .avatar img').forEach(img => {
            img.style.width = '';
            img.style.height = '';
            img.style.borderRadius = '';
        });
    });
    observer.observe(document.getElementById('chat') || document.body, { childList: true, subtree: true });
})();
