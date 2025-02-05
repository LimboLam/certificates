const certificate = document.querySelector(`img`);
const button = document.querySelector(`button`);

function changeImage() {
    if (certificate.src === `images/certificate_1.png`) {
        certificate.src = `images/certificate_2.png`;
    } else if (certificate.src === `images/certificate_2.png`) {
        certificate.src = `images/certificate_3.png`;
    } else {
        certificate.src = `images/certificate_1.png`;
    }
}

button.addEventListener(`click`, function() {
    changeImage()
});