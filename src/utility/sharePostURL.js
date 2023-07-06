import { ReactToastify } from "./ReactToastify";

export const sharePostURL = (url) => {
  navigator.clipboard
    .writeText(url)
    .then(() => ReactToastify("URL Copied", "info"));
};
