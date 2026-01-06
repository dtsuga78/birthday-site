const btn = document.getElementById("revealBtn");
const msg = document.getElementById("secretMessage");

btn.addEventListener("click", () => {
    msg.style.display = "block";
    btn.style.display = "none";
});
