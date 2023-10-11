const main = document.querySelector('main');
const body = document.querySelector('body');

const goodJoke = "What kind of music do mummies listen to? Wrap music.";
const greatJoke = "Why did the bicycle collapse? It was two tired.";
const bestJoke = "Why did the cracker go to the doctor? It felt crummy.";

const template = `
    <h1>My Jokes</h1>
    <ul>
        <li>${goodJoke}</li>
        <li>${greatJoke}</li>
        <li>${bestJoke}</li>
    </ul>
`;
main.innerHTML = template;

const p = document.createElement('p');
p.textContent = "That's all folks!";

main.innerHTML = template;
body.appendChild(p);