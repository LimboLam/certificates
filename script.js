const certificate = document.getElementById(`certificates`);
const button = document.querySelector(`button`);

function changeImage() {
    button.addEventListener(`click`, function() {
        if (certificate.src === `images/certificate_1.png`) {
          certificate.src = `images/certificate_2.png`;
        } else if (certificate.src === `images/certificate_2.png`) {
            certificate.src = `images/certificate_3.png`;
        } else {
            certificate.src = `images/certificate_1.png`;
        }
    });
}