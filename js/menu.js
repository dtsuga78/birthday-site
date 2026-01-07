const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

if (menuBtn && sideMenu && overlay) {
  menuBtn.onclick = () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
  };

  overlay.onclick = () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  };
}
document.querySelectorAll(".side-menu a").forEach(link => {
  link.addEventListener("click", () => {
    // Disable transition temporarily
    sideMenu.style.transition = "none";

    sideMenu.classList.remove("active");
    overlay.classList.remove("active");

    // Re-enable transition for next open
    setTimeout(() => {
      sideMenu.style.transition = "";
    }, 0);
  });
});
const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".side-menu a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
