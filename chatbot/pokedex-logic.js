const prompts = [
    "One color, one shape.", "Twelve principles of animation.", "Fibonacci forever.",
    "Lowres.", "Write “Genuary”. Avoid using a font.", "Lights on/off.",
    "Boolean algebra.", "A City.", "Crazy automaton.", "Polar coordinates.",
    "Quine.", "Boxes only.", "Self portrait.", "Everything fits perfectly.",
    "Invisible object / only shadows.", "Order and disorder.", "Wallpaper group.",
    "Unexpected path.", "16x16", "One line.", "Bauhaus Poster.",
    "Pen plotter ready.", "Transparency.", "Perfectionist’s nightmare.",
    "Organic Geometry.", "Recursive Grids.", "Lifeform.",
    "No libraries, no canvas, only HTML.", "Genetic evolution and mutation.",
    "Its not a bug, its a feature.", "GLSL day / Sphere 3D"
];

const grid = document.getElementById('genuary-grid');

prompts.forEach((prompt, index) => {
    const day = index + 1;
    const link = document.createElement('a');
    link.href = `viewer.html?day=${day}`;
    link.className = 'day-link';
    
    link.innerHTML = `
        <span>ID: #${day.toString().padStart(3, '0')}</span>
        <strong style="margin-top:5px">${prompt}</strong>
    `;

    link.onmouseenter = () => animateLights();
    
    grid.appendChild(link);
});

function animateLights() {
    const bigLight = document.getElementById('main-light');
    const smallLights = document.querySelectorAll('.light');

    bigLight.style.filter = 'brightness(1.5)';
    setTimeout(() => bigLight.style.filter = 'brightness(1)', 150);

    smallLights.forEach((light, i) => {
        setTimeout(() => {
            light.style.opacity = '0.3';
            setTimeout(() => light.style.opacity = '1', 100);
        }, i * 100);
    });
}

window.onload = () => {
    console.log("Pokedex Genuary Initialisé...");
    animateLights();
};