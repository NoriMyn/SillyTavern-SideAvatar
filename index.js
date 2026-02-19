console.log("[SideAvatarLayout] init");

function applyLayout() {
  document.querySelectorAll(".mes").forEach(mes => {
    if (mes.dataset.sideAvatarApplied) return;

    const avatar = mes.querySelector(".mes_avatar");
    const block = mes.querySelector(".mes_block");
    if (!avatar || !block) return;

    mes.dataset.sideAvatarApplied = "true";

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

function waitForChat() {
  const chat = document.getElementById("chat");
  if (!chat) {
    setTimeout(waitForChat, 300);
    return;
  }

  applyLayout();

  new MutationObserver(applyLayout).observe(chat, {
    childList: true,
    subtree: true
  });
}

waitForChat();
