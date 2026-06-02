function checkPassword() {
    let pass = document.getElementById("passwordInput").value;

    // change this password to anything you want
    if(pass === "iloveyou3000") {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("siteContent").style.display = "block";

        // try autoplay music
        let music = document.getElementById("bgMusic");
        music.play().catch(() => {
            console.log("Autoplay blocked by browser");
        });

    } else {
        document.getElementById("error").innerText = "I love you ____?";
    }
}

function toggleMusic() {
    let music = document.getElementById("bgMusic");

    if(music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
