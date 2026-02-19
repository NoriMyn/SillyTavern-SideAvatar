import { eventSource, event_types } from "../../../script.js";

console.log("[SideAvatarLayout] loaded");

function applyLayout() {
  document.querySelectorAll(".mes").forEach(mes => {
    if (mes.dataset.sideAvatar) return;

    const avatar = mes.querySelector(".mes_avatar");
    const block = mes.querySelector(".mes_block");
    if (!avatar || !block) return;

    mes.dataset.sideAvatar = "1";

    const wrap = document.createElement("div");
    wrap.className = "side-avatar-wrap";

    if (mes.classList.contains("user")) {
      wrap.classList.add("right");
    }

    avatar.remove();
    block.remove();

    wrap.appendChild(avatar);
    wrap.appendChild(block);
    mes.appendChild(wrap);
  });
}

eventSource.on(event_types.CHAT_RENDERED, applyLayout);
eventSource.on(event_types.MESSAGE_RECEIVED, applyLayout);
