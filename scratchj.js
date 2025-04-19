function changerMode() {
  const body = document.body; // Récupère l'élément <body> de la page

  const bouton = document.getElementById('modeButton'); // Récupère le bouton avec l'ID "modeButton"



  body.classList.toggle("dark-mode");  // Ajoute la classe "dark-mode" si elle n'existe pas, ou la supprime si elle existe déjà


  if (body.classList.contains("dark-mode"))   // Si le mode sombre est activé

  {
    bouton.innerText = "☀️ Mode jour";   //  // Change le texte du bouton en "Mode jour" avec une icône de soleil


  } else     // Si le mode sombre est désactivé

  {
    bouton.innerText = "🌙 Mode nuit"; // Change le texte du bouton en "Mode nuit" avec une icône de lune

  }
} //Résumé :Cette fonction permet de basculer entre le mode clair et le mode sombre sur une page web. Elle change aussi dynamiquement le texte du bouton pour refléter le mode actif.

