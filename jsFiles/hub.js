const intro_card = document.querySelector(".intro_msg");
const form_card = document.querySelector(".form_card");
const benefits_card = document.querySelector("#benefits");
const submitted_card = document.querySelector("#submitted");
const submit_button = document.querySelector("#submit_button");
submit_button.addEventListener("click", () => {
    submitted_card.style.display = "flex";
    form_card.style.display = "none";
    benefits_card.style.display = "none";
    intro_card.style.display = "none";
    window.scrollTo(0, 0); //scroll para masagad sa taas
});
