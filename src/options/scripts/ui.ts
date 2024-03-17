import { saveConfig } from "src/options/scripts/utils/save-config";

export const usernameContainerEl = document.getElementById("username-container") as HTMLDivElement;
export const usernameInputEl = document.getElementById("username-input") as HTMLInputElement;
export const titleContainerEl = document.getElementById("title-container") as HTMLDivElement;
export const titleInputEl = document.getElementById("title-input") as HTMLInputElement;
export const messageFontContainerEl = document.getElementById("message-font-container") as HTMLInputElement;
export const messageFontInputEl = document.getElementById("message-font-input") as HTMLInputElement;

export const wallpaperEnabledCheckboxEl = document.getElementById("wallpaper-enabled-checkbox") as HTMLInputElement;
export const wallpaperUrlContainerEl = document.getElementById("wallpaper-url-container") as HTMLInputElement;
export const wallpaperUrlInputEl = document.getElementById("wallpaper-url-input") as HTMLInputElement;

export const uiStyleSolidButtonEl = document.getElementById("ui-style-solid-button") as HTMLButtonElement;
export const uiStyleGlassButtonEl = document.getElementById("ui-style-glass-button") as HTMLButtonElement;

export const dynamicTitleEnabledCheckboxEl = document.getElementById("dynamicTitle-enabled-checkbox") as HTMLInputElement;
export const animationsEnabledCheckboxEl = document.getElementById("animations-enabled-checkbox") as HTMLInputElement;

export const inputs: Input[] = [
  {
    container: usernameContainerEl,
    input: usernameInputEl
  },
  {
    container: titleContainerEl,
    input: titleInputEl
  },
  {
    container: messageFontContainerEl,
    input: messageFontInputEl
  },
  {
    container: wallpaperUrlContainerEl,
    input: wallpaperUrlInputEl
  }
];

interface Input {
  container: HTMLDivElement;
  input: HTMLInputElement;
}

const saveBtn = document.getElementById("save-button") as HTMLButtonElement;

saveBtn.onclick = () => {
  saveConfig();
};
