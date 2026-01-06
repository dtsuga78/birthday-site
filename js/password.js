document.addEventListener("DOMContentLoaded", () => {
  const secretCode = "HBD";

  const site = document.getElementById("siteContent");
  site.style.visibility = "hidden";

  // Overlay
  const overlay = document.createElement("div");
  overlay.id = "pwOverlay";
  document.body.appendChild(overlay);

  // Modal
  const modal = document.createElement("div");
  modal.id = "pwModal";
  modal.innerHTML = `
    <h2>Enter Birthday Code</h2>
    <input type="password" id="pwInput" placeholder="Enter code"/>
    <button id="pwSubmit">Unlock</button>
    <p id="pwError" style="color:red;display:none;">Wrong code!</p>
  `;
  document.body.appendChild(modal);

  document.getElementById("pwSubmit").onclick = () => {
    const input = document.getElementById("pwInput").value;
    const error = document.getElementById("pwError");

    if (input === secretCode) {
      overlay.classList.add("fadeOutOverlay");
      modal.classList.add("fadeOut");

      setTimeout(() => {
        overlay.remove();
        modal.remove();
        site.style.visibility = "visible";
      }, 500);
    } else {
      error.style.display = "block";
    }
  };
});
