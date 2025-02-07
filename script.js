const certificate = document.querySelector(`img`);
const buttonImg = document.getElementById(`changeImg`);
const buttonName = document.getElementById(`changeName`);
const dateButton = document.getElementById(`dateButton`);
const buttonSpecialName = document.getElementById(`changeSpecialName`);
const buttonFitText = document.getElementById(`fitText`);

function changeImage() {
    let image = certificate.getAttribute(`src`);
    if (image === `images/certificate_1.png`) {
        certificate.setAttribute(`src`, `images/certificate_2.png`);
    } else if (image === `images/certificate_2.png`) {
        certificate.setAttribute(`src`, `images/certificate_3.png`);
    } else {
        certificate.setAttribute(`src`, `images/certificate_1.png`);
    }
}

buttonImg.addEventListener(`click`, function() {
    changeImage();
});

function changeName() {
    let name = prompt(`Enter in a name:`);
    document.getElementById(`name`).textContent = name;
}

buttonName.addEventListener(`click`, function() {
    changeName();
});

function date() {
    let today = new Date(); 
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return document.getElementById(`date`).textContent = today;
}

dateButton.addEventListener(`click`, function() {
    date();
});

function changeSpecialName() {
    let specialName = prompt(`Enter a name:`);
    document.getElementById(`specialName`).textContent = specialName;
}

buttonSpecialName.addEventListener(`click`, function() {
    changeSpecialName();
});

function fitText() {
    if (image === `images/certificate_2.png`) {
        document.getElementById(`specialName`).style.visibility = `hidden`;
        document.getElementById(`companyName`).style.visibility = `hidden`;
    }
}

buttonFitText.addEventListener(`click`, function() {
    fitText();
});