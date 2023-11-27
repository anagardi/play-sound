let btnCount = document.querySelectorAll(".note").length;

for (let i = 0; i < btnCount; i++) {
    document.querySelectorAll(".note")[i].addEventListener("click", function () {

        let btnInnerHTML = this.innerHTML;
        makeSound(btnInnerHTML);
        buttonAnimation(btnInnerHTML);
    });
}
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "d":
            var d = new Audio("./sounds/do.wav");
            d.play();
            break;
        case "r":
            var r = new Audio("./sounds/re.wav");
            r.play();
            break;
        case "m":
            var m = new Audio("./sounds/mi.wav");
            m.play();
            break;
       default: console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}