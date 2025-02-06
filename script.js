const certificate = document.querySelector(`img`);
const button = document.querySelector(`button`);

function changeImage() {
    let image = certificate.getAttribute(`src`)
    if (image === `images/certificate_1.png`) {
        certificate.setAttribute(`src`, `images/certificate_2.png`);
    } else if (image === `images/certificate_2.png`) {
        certificate.setAttribute(`src`, `images/certificate_3.png`);
    } else {
        certificate.setAttribute(`src`, `images/certificate_1.png`);
    }
}

button.addEventListener(`click`, function() {
    changeImage()
});