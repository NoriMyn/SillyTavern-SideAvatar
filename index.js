// SideAvatar Extension для SillyTavern
const extensionId = 'sideavatar';

module.exports = {
    name: 'Side Avatar',
    version: '1.0.0',
    match: 'chat', // Только в чате
    loaded: false,

    load() {
        console.log('✅ SideAvatar loaded successfully!');
        this.loaded = true;
        this.initCSS();
    },

    unload() {
        console.log('❌ SideAvatar unloaded');
        this.loaded = false;
    },

    initCSS() {
        // Внедряем CSS динамически
        const style = document.createElement('style');
        style.id = 'sideavatar-css';
        style.textContent = `
            :root {
                --side-char-size: 180px;
                --side-user-size: 80px;
                --chat-left: 220px;
                --chat-right: 120px;
            }

            #chat {
                margin-left: var(--chat-left) !important;
                margin-right: var(--chat-right) !important;
                max-width: calc(100% - var(--chat-left) - var(--chat-right)) !important;
            }

            #chara_container,
            #char_img_link {
                position: fixed !important;
                left: 20px !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                width: var(--side-char-size) !important;
                height: var(--side-char-size) !important;
                z-index: 999 !important;
                border-radius: 25px !important;
                box-shadow: 0 15px 40px rgba(100,150,255,0.5) !important;
                border: 3px solid rgba(255,255,255,0.2) !important;
            }

            #chara_container:hover,
            #char_img_link:hover {
                transform: translateY(-50%) scale(1.05) !important;
                box-shadow: 0 20px 50px rgba(100,150,255,0.7) !important;
            }

            #user_avatar {
                position: fixed !important;
                right: 20px !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                width: var(--side-user-size) !important;
                height: var(--side-user-size) !important;
                z-index: 999 !important;
                border-radius: 20px !important;
                box-shadow: 0 10px 30px rgba(255,100,150,0.4) !important;
            }

            @media (max-width: 1400px) {
                :root { --side-char-size: 140px; --side-user-size: 60px; --chat-left: 170px; --chat-right: 90px; }
            }
            @media (max-width: 768px) {
                #chat { margin-left: 20px !important; margin-right: 20px !important; }
                #chara_container, #char_img_link, #user_avatar { display: none !important; }
            }
        `;
        document.head.appendChild(style);
    }
};
