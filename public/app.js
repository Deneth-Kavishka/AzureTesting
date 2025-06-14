// app.js

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("testBtn");
  const msg = document.getElementById("message");
  btn.addEventListener("click", function () {
    msg.textContent = "🎉 Azure Hosting is Working! 🎉";
    btn.classList.add("animate-bounce");
    setTimeout(() => btn.classList.remove("animate-bounce"), 1000);
  });
});
