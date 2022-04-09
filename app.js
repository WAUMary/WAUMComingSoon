const dayCounter = document.getElementById("day-counter");
const hourCounter = document.getElementById("hour-counter");
const minuteCounter = document.getElementById("minute-counter");
const secondCounter = document.getElementById("second-counter");
const releaseDay = new Date("July 1 2022 00:00:00 UTC-0400");

const iconAudio = document.getElementById("audio-icon")
const iconFacebook = document.getElementById("facebook")
const iconInstagram = document.getElementById("instagram")
// const iconSoundcloud = document.getElementById("soundcloud")
const iconTwitter = document.getElementById("twitter")
const iconYoutube = document.getElementById("youtube")

const icons = [iconFacebook, iconAudio, iconInstagram, iconTwitter, iconYoutube]


// Modal
const openModal = document.querySelector(".email-button")
const closeModal = document.querySelectorAll(".cancel-button") //removed ".submit-button,"
const modal = document.getElementById("modal")
const contentContainer = document.getElementById("content-container")

openModal.addEventListener("click", () => {
    if(modal.hasAttribute(onsubmit)) {
        modal.setAttribute(onsubmit,"")
    }
    modal.showModal();
    modal.style.visibility = "visible";
})

closeModal.forEach(item => {
    item.addEventListener("click", () => {
        if(item = ".cancel-button") {
            modal.setAttribute(onsubmit,"return false");
        }
        modal.style.visibility = "hidden";
        modal.close();
})
})
 
// Mute Button
const video = document.getElementById("video");
const muteBtn = iconAudio;
let muted = true;
const mutebtnHandler = () => {
    const switchIcons = (icon1, icon2) => iconAudio.classList.replace(icon1,icon2)
    muted = !muted;
    if(muted) {
        switchIcons("fa-volume", "fa-volume-slash")
        video.style.filter = "grayscale(100%)";
    } else {
        switchIcons("fa-volume-slash", "fa-volume")
        video.style.filter = "grayscale(70%)";
    };
    video.muted = !video.muted;
}
muteBtn.addEventListener("click", mutebtnHandler)



//Update CountdownTime
const updateCoundownTime = () => {
    const currentTime = new Date();
    const diff = releaseDay - currentTime;

    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60) % 24;
    const m = Math.floor(diff/1000/60) % 60;
    const s = Math.floor(diff/1000) % 60;
    
    dayCounter.innerHTML = d;
    hourCounter.innerHTML = h < 10 ? '0' + h : h;
    minuteCounter.innerHTML = m < 10 ? '0' + m : m;
    secondCounter.innerHTML = s < 10 ? '0' + s : s;;
}

setInterval(updateCoundownTime, 1000)

// Media Queries
let mqWidth = window.matchMedia("(max-width: 700px)")
let mqHeight = window.matchMedia("(max-height: 750px)")

const textHandler = (mqWidth, mqHeight) => {
    if (mqWidth.matches || mqHeight.matches) {
        document.getElementById("days").innerHTML = "D";
        document.getElementById("hours").innerHTML = "H";
        document.getElementById("minutes").innerHTML = "M";
        document.getElementById("seconds").innerHTML = "S";
    }
    else {
        document.getElementById("days").innerHTML = "DAYS";
        document.getElementById("hours").innerHTML = "HOURS";
        document.getElementById("minutes").innerHTML = "MINUTES";
        document.getElementById("seconds").innerHTML = "SECONDS";
    }
}

// Change Icon Sizes
const iconHandler = (mqWidth, mqHeight) => {
    const shrink = (elementList) => {
        elementList.forEach(element => {
            element.classList.replace("fa-4x", "fa-2x")
        });
    }  
    const grow = (elementList) => {
        elementList.forEach(element => {
            element.classList.replace("fa-2x", "fa-4x")            
        });
    }

    if (mqWidth.matches || mqHeight.matches) {
        shrink(icons)
    }
    else {
        grow(icons)
    }
}

textHandler(mqWidth, mqHeight);
iconHandler(mqWidth, mqHeight);

window.addEventListener('resize', () => {
    textHandler(mqWidth, mqHeight); iconHandler(mqWidth, mqHeight);
})