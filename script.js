window.addEventListener("load", main);

function main() {
    setIntervalToReloadPage();
}

function setIntervalToReloadPage() {
    setInterval(reloadPage, 1000);
}

function reloadPage() {
    location.reload();
}