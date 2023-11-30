import { appWindow } from '@tauri-apps/api/window';

function MainLayoutHeader() {
  async function minimize() {
    await appWindow.minimize();
  }

  async function maximize() {
    await appWindow.toggleMaximize();
  }

  async function close() {
    await appWindow.close();
  }

  return (
    <header data-tauri-drag-region="" class="titlebar">
      <div class="titlebar-button" onClick={minimize}>
        <img
          src="https://api.iconify.design/mdi:window-minimize.svg"
          alt="minimize"
        />
      </div>
      <div class="titlebar-button" onClick={maximize}>
        <img
          src="https://api.iconify.design/mdi:window-maximize.svg"
          alt="maximize"
        />
      </div>
      <div class="titlebar-button" onClick={close}>
        <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
      </div>
    </header>
  );
}

export default MainLayoutHeader;
