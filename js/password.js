// Birthday site password modal — FINAL VERSION
document.addEventListener("DOMContentLoaded", () => {
  const secretCode = "HBD";

  const site = document.getElementById("siteContent");

  // If already unlocked, show site and skip modal
  if (localStorage.getItem("birthdayUnlocked") === "true") {
    site.style.visibility = "visible";
    return;
  }

  // Hide site content initially
  site.style.visibility = "hidden";

  // Create overlay
  const overlay = document.createElement("div");
  overlay.id = "pwOverlay";
  document.body.appendChild(overlay);

  // Create modal
  const modal = document.createElement("div");
  modal.id = "pwModal";
  modal.innerHTML = `
    <h2>Enter Code to entet the page  (hint: HBD)</h2>
    <input type="password" id="pwInput" placeholder="Enter code"/>
    <button id="pwSubmit">Unlock</button>
    <p id="pwError" style="color:red;display:none;">Wrong code! Try again.</p>
  `;
  document.body.appendChild(modal);

  // Handle unlock
  document.getElementById("pwSubmit").onclick = () => {
    const input = document.getElementById("pwInput").value;
    const error = document.getElementById("pwError");

    if (input === secretCode) {
      // Remember unlock
      localStorage.setItem("birthdayUnlocked", "true");

      // Fade out modal
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
