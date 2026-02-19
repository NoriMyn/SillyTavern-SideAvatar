import { eventSource, getContext } from '../../../scripts/extensions.js';

const extensionId = 'SideAvatar';

// Слушаем новые сообщения
eventSource.on(eventSource.WS_SHARED, { 
  event: 'MESSAGE_RECEIVED', 
  callback: updateAvatars 
});

// Также обновляем на init и смену персонажа
eventSource.on(eventSource.WS_SHARED, { 
  event: 'LOAD_CHARACTER', 
  callback: updateAvatars 
});
eventSource.on(eventSource.WS_SHARED, { 
  event: 'SET_USER_AVATAR', 
  callback: updateAvatars 
});

// MutationObserver для динамических изменений
const observer = new MutationObserver(updateAvatars);
observer.observe(document.body, { childList: true, subtree: true });

function updateAvatars() {
  // Char avatar left — основной #chara_container или fallback
  const charContainer = document.querySelector('#chara_container') || document.querySelector('#char_img_link');
  if (charContainer && !charContainer.classList.contains('char-side-avatar')) {
    charContainer.classList.add('char-side-avatar');
    addInfoOverlay(charContainer, 'char');
  }

  // User avatar right
  const userAvatar = document.querySelector('#user_avatar img') || 
                     document.querySelector('#userAvatars img') ||
                     document.querySelector('.user-avatar img');
  if (userAvatar && userAvatar.parentElement && !userAvatar.parentElement.classList.contains('user-side-avatar')) {
    const wrapper = userAvatar.parentElement;
    wrapper.classList.add('user-side-avatar');
    addInfoOverlay(wrapper, 'user');
  }
}

function addInfoOverlay(wrapper, type) {
  // Удаляем старый если есть
  const oldInfo = wrapper.querySelector('.avatar-info');
  if (oldInfo) oldInfo.remove();

  const info = document.createElement('div');
  info.className = 'avatar-info';
  info.textContent = type === 'char' ? 
    `${getContext()?.name || 'Character'} • ${new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'})}` : 
    'Ты';
  wrapper.appendChild(info);
}

// Init
setTimeout(updateAvatars, 1000); // Ждём загрузки DOM
