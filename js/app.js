/* ===========================================
   TRSNET APP.JS
   Parte 1
=========================================== */

// =========================
// MENÚ MÓVIL
// =========================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}

// =========================
// HEADER AL HACER SCROLL
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,5,5,.92)";
        header.style.backdropFilter = "blur(20px)";
        header.style.boxShadow = "0 10px 40px rgba(0,0,0,.45)";

    } else {

        header.style.background = "rgba(5,5,5,.55)";
        header.style.boxShadow = "none";

    }

});

// =========================
// BOTÓN VOLVER ARRIBA
// =========================

const topButton = document.getElementById("topButton");

if (topButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// =========================
// SCROLL SUAVE
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        const target = document.querySelector(link.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// =========================
// REPRODUCTOR RADIO
// =========================

const player = document.getElementById("radioPlayer");
const playButton = document.getElementById("playButton");
const volume = document.getElementById("volume");

let playing = false;

if (player && playButton) {

    playButton.addEventListener("click", () => {

        if (!playing) {

            player.play();

            playButton.innerHTML = "⏸ Pausar";

            playing = true;

        } else {

            player.pause();

            playButton.innerHTML = "▶ Reproducir";

            playing = false;

        }

    });

}

if (player && volume) {

    volume.addEventListener("input", () => {

        player.volume = volume.value;

    });

}

// =========================
// AÑO AUTOMÁTICO FOOTER
// =========================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("✅ TRSNET cargado correctamente.");
/* ===========================================
   TRSNET APP.JS
   Parte 2
=========================================== */

/* ===============================
   SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(
".hero, section, .station-card, .feature, .streaming-card, .radio-player, .stat"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            element.classList.add("fade-up");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ===============================
   CONTADORES
================================ */

const counters = document.querySelectorAll(".counter");

const animateCounter = counter=>{

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = target / 120;

    const update=()=>{

        current += increment;

        if(current >= target){

            counter.textContent = target;

            return;

        }

        counter.textContent = Math.floor(current);

        requestAnimationFrame(update);

    }

    update();

}

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

});

counters.forEach(counter=>observer.observe(counter));

/* ===============================
   EFECTO 3D TARJETAS
================================ */

const cards=document.querySelectorAll(".station-card,.feature");

cards.forEach(card=>{

    card.addEventListener("mousemove",e=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*18;

        const rotateX=((y/rect.height)-0.5)*-18;

        card.style.transform=`
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/* ===============================
   BRILLO SIGUIENDO EL RATÓN
================================ */

document.querySelectorAll(".station-card,.streaming-card").forEach(card=>{

    card.addEventListener("mousemove",e=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=`
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,106,0,.20),
        rgba(255,255,255,.05) 40%
        )
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.05)";

    });

});

/* ===============================
   TEXTO ESCRITURA
================================ */

const typing=document.querySelector(".typing");

if(typing){

const text=typing.dataset.text;

let index=0;

function write(){

    if(index<text.length){

        typing.textContent+=text.charAt(index);

        index++;

        setTimeout(write,55);

    }

}

write();

}

/* ===============================
   EFECTO PARALLAX HERO
================================ */

const heroImage=document.querySelector(".hero-image img");

window.addEventListener("mousemove",e=>{

    if(!heroImage) return;

    const x=(window.innerWidth/2-e.clientX)/45;

    const y=(window.innerHeight/2-e.clientY)/45;

    heroImage.style.transform=
    `translate(${x}px,${y}px)`;

});

/* ===============================
   PRELOADER
================================ */

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.remove();

        },600);

    }

});

/* ===============================
   BARRAS DE AUDIO
================================ */

const bars=document.querySelectorAll(".bar");

function animateBars(){

    bars.forEach(bar=>{

        const h=Math.random()*40+10;

        bar.style.height=h+"px";

    });

}

setInterval(animateBars,180);

/* ===============================
   EFECTO BOTONES
================================ */

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="";

    });

});

/* ===============================
   ANIMACIÓN LOGO
================================ */

const logo=document.querySelector(".logo img");

if(logo){

setInterval(()=>{

logo.classList.toggle("rotate");

},3500);

}

console.log("✨ Animaciones TRSNET activadas");
