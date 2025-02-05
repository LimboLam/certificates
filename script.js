const myImage = document.getElementById(`certificates`);
const button = document.getElementById(`button`);

function changeImage() {
    button.addEventListener(`click`, () => {
        const mySrc = myImage.getAttribute(`src`);
        if (mySrc === `images/certificate_1.png`) {
          myImage.setAttribute(`src", "images/certificate_2.png`);
        } else if (mySrc === `images/certificate_2.png`) {
          myImage.setAttribute(`src`, `images/certificate_3.png`);
        } else {
            myImage.setAttribute(`src`, `images/certificate_3.png`)
        }
    });
}