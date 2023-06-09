const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const modalInner = document.getElementById("modal-inner");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtn = document.getElementById("modal-choice-btns");

setTimeout(function () {
    modal.style.display = "inline";
}, 1500);


closeBtn.addEventListener("click", function () {
    modal.style.display = "none";

});

declineBtn.addEventListener("mouseenter", function () {
    modalChoiceBtn.classList.toggle("reverse");
});

consentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const consentFormData = new FormData(consentForm);

    const name = consentFormData.get("fullName");

    modalText.innerHTML = `<div class="modal-inner-loading">
                                <img src="images/loading.svg" class="loading">
                                <p id="upload-text">
                                Uploading your data to the dark web...
                                    </p>
                           </div>`;
    setTimeout(function () {
        document.getElementById("upload-text").innerText = "Making the sale...";
    }, 1500);

    setTimeout(function () {
        document.getElementById("modal-inner").innerHTML =
            `<h2>Thanks <span class="modal-display-name">${name}</span> you sucker! </h2>
                <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>`;

        closeBtn.disabled = false;
    }, 3000);

});



