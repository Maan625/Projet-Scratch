function changerMode() {
  const body = document.body;
  const bouton = document.getElementById('modeButton');

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    bouton.innerText = "☀️ Mode jour";
  } else {
    bouton.innerText = "🌙 Mode nuit";
  }
}
