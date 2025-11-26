const orbitData = [
    { phrases: ["Te adoro", "Eres mi sol", "Mi universo", "Siempre tú", "Yaz me encantas"], radius: 150, color: "#ff6b6b", speed: 0.2 },
    { phrases: ["Adoro tu aroma", "Contigo todo", "Prisa no tengo", "Amo todo de ti", "Mi vida"], radius: 230, color: "#ff8e8e", speed: -0.15 },
    { phrases: ["amo tus cachetes", "Tú y yo", "Mi niña terca", "Tus ojos Pardos", "Amo tu voz"], radius: 280, color: "#82259C", speed: 0.1 },
    { phrases: ["Adroro a mi novia", "amo tu risa", "Vamos por un café", "Mi luz", "Te adoro princesa"], radius: 320, color: "#25599C", speed: -0.05 }
];

const container = document.getElementById("phrases-container");
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

let orbitElements = [];

orbitData.forEach((orbit, idx) => {
    orbit.phrases.forEach((text, i) => {
        const div = document.createElement("div");
        div.classList.add("phrase");
        div.textContent = text;
        div.style.background = orbit.color;
        container.appendChild(div);
        orbitElements.push({ el: div, radius: orbit.radius, angle: i*(360/orbit.phrases.length), speed: orbit.speed });
    });
});

function animate() {
    orbitElements.forEach(obj => {
        const rad = obj.angle * (Math.PI/180);
        const x = centerX + obj.radius * Math.cos(rad) - obj.el.offsetWidth/2;
        const y = centerY + obj.radius * Math.sin(rad) - obj.el.offsetHeight/2;
        obj.el.style.left = `${x}px`;
        obj.el.style.top = `${y}px`;
        obj.angle += obj.speed;
    });
    requestAnimationFrame(animate);
}

animate();

const music = document.getElementById("backgroundMusic");
document.body.addEventListener("click", () => music.play(), { once: true });

