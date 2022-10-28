const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
//window.addEventListener('beforeinstallprompt', (event) => {});
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    console.log("button event added...");

    // TODO: Implement a click event handler on the `butInstall` element
    //butInstall.addEventListener('click', async () => {});    
    butInstall.addEventListener('click', async () => {
        event.prompt();
        console.log("button clicked...");
    });

});


// TODO: Add an handler for the `appinstalled` event
//window.addEventListener('appinstalled', (event) => {});
window.addEventListener('appinstalled', (event) => {
    console.log("app installed...");
    console.log('👍', 'appinstalled', event);
    butInstall.style.display = "none";
    butInstall.style.visibility = 'hidden';
});

