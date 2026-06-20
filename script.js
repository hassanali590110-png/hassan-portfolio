// Typing Effect

let text = "Web Developer 🚀";

let index = 0;

function typing() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typing, 150);

    }

}

typing();



// Smooth Scroll

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function (e) {

        if (this.hash !== "") {

            e.preventDefault();

            document.querySelector(this.hash).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
