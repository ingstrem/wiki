const loc = location.pathname;
const links = document.querySelectorAll(".header-link");

links.forEach((link) => {
  if (link.getAttribute("href") === loc) link.classList.add("active");
});

// Стилизация коментариев
document.querySelectorAll("code").forEach((codeBlock) => {
  let lines = codeBlock.textContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line.includes("$")) {
      let parts = line.split("$", 2);

      if (parts.length > 1 && parts[1].trim() !== "") {
        lines[
          i
        ] = `${parts[0]}<span class="terminal-color">$ ${parts[1]}</span>`;
      }
    }
    if (line.includes("#")) {
      let parts = line.split("#", 2);

      if (parts.length > 1 && parts[1].trim() !== "") {
        lines[
          i
        ] = `${parts[0]}<span class="comment-color"># ${parts[1]}</span>`;
      }
    }
  }

  codeBlock.innerHTML = lines.join("<br>");
});
