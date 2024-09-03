const body = document.body;
const colors = [
    '#ff6f61', // A warm coral red
    '#6b5b95', // A muted royal purple
    '#88b04b', // A fresh olive green
    '#f7cac9', // A soft pastel pink
    '#92a8d1', // A calm periwinkle blue
    '#955251', // A rich chestnut brown
    '#b565a7', // A vibrant orchid purple
    '#009b77', // A deep teal green
    '#dd4124', // A bright tomato red
    '#45b8ac', // A cool seafoam green
];
const scrollRange = 1 / (colors.length - 1); // Divide the scrollable area into segments

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / windowHeight;

    const colorIndex = Math.floor(scrollFraction / scrollRange);
    const colorStart = colors[colorIndex];
    const colorEnd = colors[colorIndex + 1] || colors[colorIndex];
    const colorTransition = (scrollFraction % scrollRange) / scrollRange;

    // Calculate the interpolated color
    const [r1, g1, b1] = hexToRgb(colorStart);
    const [r2, g2, b2] = hexToRgb(colorEnd);
    const r = Math.round(r1 + (r2 - r1) * colorTransition);
    const g = Math.round(g1 + (g2 - g1) * colorTransition);
    const b = Math.round(b1 + (b2 - b1) * colorTransition);

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Utility function to convert hex color to RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}
