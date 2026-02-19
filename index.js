(function() {
    const observer = new MutationObserver(() => {
        document.querySelectorAll('.mes .avatar img').forEach(img => {
            // Удаляем всё, что мешает внешним стилям
            img.style.width = '';
            img.style.height = '';
            img.style.borderRadius = '';
            img.style.border = '';
            img.style.boxShadow = '';
        });
    });
    observer.observe(document.getElementById('chat') || document.body, { childList: true, subtree: true });
})();
