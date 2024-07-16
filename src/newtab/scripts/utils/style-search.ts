import { UIStyle } from "src/newtab/scripts/config";
import { bookmarkSearchContainerEl, searchContainerEl, searchInputEl } from "src/newtab/scripts/ui";

export const styleSearch = (
  enabled: boolean,
  style: UIStyle,
  textColor: string,
  placeholderTextColor: string,
  foregroundColor: string
) => {
  if (!enabled) {
    searchContainerEl.classList.add("hidden");
  }

  searchInputEl.style.color = textColor;

  const placeholderTextColorCss = `
.placeholder-color-search::placeholder {
  color: ${placeholderTextColor};
}
.placeholder-color-bookmark-search::placeholder {
  color: ${placeholderTextColor};
} 
`;

  const styleElement = document.createElement("style");
  styleElement.type = "text/css";
  styleElement.appendChild(document.createTextNode(placeholderTextColorCss));
  document.head.appendChild(styleElement);

  if (style === "solid") {
    searchContainerEl.style.backgroundColor = foregroundColor;
    bookmarkSearchContainerEl.style.backgroundColor = foregroundColor;
    return;
  }
  if (style === "glass") {
    searchContainerEl.classList.add("glass-effect");
    searchInputEl.classList.replace("placeholder-neutral-500", "placeholder-neutral-400");

    bookmarkSearchContainerEl.classList.add("glass-effect");
    bookmarkSearchContainerEl.classList.replace(
      "placeholder-neutral-500",
      "placeholder-neutral-400"
    );
    return;
  }
};
