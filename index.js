import { eventSource, getContext } from '../../../scripts/extensions.js';

const extensionId = 'SideAvatar';

eventSource.on(eventSource.WS_SHARED, { event: 'MESSAGE_RECEIVED', callback: updateAvatars });

function updateAvatars() {
  // Char avatar (left)
  const charAvatar = document.querySelector('#char_img_link img') || document.querySelector('.mes .avatar');
  if (charAvatar && !charAvatar.parentElement.classList.contains('char-side-avatar')) {
    const wrapper = charAvatar.closest('.avatar') || charAvatar.parentElement;
    wrapper.classList.add('char-side-avatar');
    addInfoOverlay(wrapper, 'char');
  }

  // User avatar (right) - из userAvatars или fallback
  const userAvatar = document.querySelector('#user_avatar img') || document.querySelector('.user .avatar img');
  if (userAvatar && !userAvatar.parentElement.classList.contains('user-side-avatar')) {
    const wrapper = userAvatar.parentElement;
    wrapper.classList.add('user-side-avatar');
    addInfoOverlay(wrapper, 'user');
  }
}

function addInfoOverlay(wrapper, type) {
  let info = wrapper.querySelector('.avatar-info');
  if (!info) {
    info = document.createElement('div');
    info.className = 'avatar-info';
    info.textContent = type === 'char' ? `${getContext().name} • ${new Date().toLocaleTimeString()}` : 'You';
    wrapper.appendChild(info);
  }
}

// Init
updateAvatars();
