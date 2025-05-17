let deferredPrompt;
const installButton = document.getElementById('install-button');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installButton) installButton.style.display = 'block';
});

if (installButton) {
  installButton.addEventListener('click', () => {
    installButton.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log("✅ L'utilisateur a accepté l'installation");
      } else {
        console.log("❌ L'utilisateur a refusé l'installation");
      }
      deferredPrompt = null;
    });
  });
}
