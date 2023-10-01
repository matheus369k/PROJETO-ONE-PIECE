const btns = document.querySelectorAll(".button");
const div = document.querySelectorAll(".persona")

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
    
        RemoveClassSelectedDiv();

        RemoveClassSelectedButton();
        
        btn.classList.add("selected")
        div[index].classList.add("selected")

    });
});

function RemoveClassSelectedButton() {
    const btnsSelected = document.querySelector(".button.selected");
    btnsSelected.classList.remove("selected");
}

function RemoveClassSelectedDiv() {
    const divSelected = document.querySelector(".persona.selected");
    divSelected.classList.remove("selected");
};