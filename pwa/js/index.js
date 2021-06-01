var hardware = document.getElementById("hardware")
var software = document.getElementById("software")
var user = document.getElementById("user")

hardware.addEventListener("click", function(){
  location.replace("./hardware.html")
})


if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register('./service-worker.js', {scope: './'}).then(function(registration) {
      console.log('Service worker registration succeeded:', registration);
    }, /*catch*/ function(error) {
      console.log('Service worker registration failed:', error);
    });
  } else {
    console.log('Service workers are not supported.');
  }
  
  var btnAdd = document.getElementById("btnAdd")
  let deferredPrompt;

  // Installation must be done by a user gesture! Here, the button click
  btnAdd.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    btnAdd.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });