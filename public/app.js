// app.js

/* Returns: [background-color, color] in rgb() format */
const getRandomColorPair = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);

    // Calculate the inverted color
    const compR = 255 - R;
    const compG = 255 - G;
    const compB = 255 - B;

    const color = `rgb(${R}, ${G}, ${B})`;
    const complement = `rgb(${compR}, ${compG}, ${compB})`;

    return [color, complement];
}

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', () => {
    const [backgroundColor, color] = getRandomColorPair();

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = color;
});

