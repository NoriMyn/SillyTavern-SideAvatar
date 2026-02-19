(function () {
    function applyMoonlitAvatar() {
        document.querySelectorAll('.mes').forEach(mes => {
            if (mes.classList.contains('moonlit-ready')) return;

            const avatar = mes.querySelector('.avatar');
            const block = mes.querySelector('.mes_block');

            if (!avatar || !block) return;

            mes.classList.add('moonlit-ready');
            mes.classList.add('moonlit-avatar');

            // Вставляем overlay для размытия
            const blurLayer = document.createElement('div');
            blurLayer.className = 'moonlit-avatar-blur';

            block.prepend(blurLayer);
        });
    }

    applyMoonlitAvatar();

    new MutationObserver(applyMoonlitAvatar).observe(
        document.getElementById('chat') || document.body,
        { childList: true, subtree: true }
    );
})();
