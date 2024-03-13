const popupBtn = document.querySelectorAll('[data-toggle="popup"]');
const backgroundGrey = document.querySelector("#background-grey");
const allPopup = document.querySelectorAll('[data-popup="popup"');
const closePopupBtn = document.querySelectorAll('[data-popup="close-popup"');

popupBtn.forEach((popupBtn) => {
    let target = popupBtn.getAttribute("data-target");
    popupBtn.addEventListener("click", () => {
        togglePopup(target);
    });
});

function togglePopup(target) {
    let popupTarget = document.querySelector(target);
    popupTarget.classList.toggle("hidden");
    backgroundGrey.classList.toggle("hidden");
}

document.addEventListener("click", (e) => {
    if (backgroundGrey.contains(e.target)) {
        backgroundGrey.classList.add("hidden");
        allPopup.forEach((popup) => {
            popup.classList.add("hidden");
        });
    }
});

closePopupBtn.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        backgroundGrey.classList.add("hidden");
        allPopup.forEach((popup) => {
            popup.classList.add("hidden");
        });
    });
});
