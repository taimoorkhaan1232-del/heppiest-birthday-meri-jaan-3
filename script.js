function celebrate() {
  alert("🎉 Happy 21st Birthday Begum Jaan ♥️ 🎂");
}

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.position = "fixed";
  heart.style.bottom = "-20px";
  heart.style.animation = "floatUp 5s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);
