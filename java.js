const header = document.querySelector('header');

const tituloH1 = document.createElement('h1');
tituloH1.textContent = 'Título H1';
header.appendChild(tituloH1);

const main = document.querySelector('main');

for (let i = 0; i < 2; i++) {
    const div = document.createElement('div');

    const tituloH2 = document.createElement('h2');
    tituloH2.textContent = `Título H2 ${i + 1}`;
    const paragrafo = document.createElement('p');
    paragrafo.textContent = `Parágrafo ${i + 1}`;
    div.appendChild(tituloH2);
    div.appendChild(paragrafo);

    main.appendChild(div);
}