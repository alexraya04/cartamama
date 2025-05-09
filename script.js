
const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
        envoltura.classList.add("desactivar-sobre")

        if (!carta.classList.contains("abierta")) {
            setTimeout(() => {
                carta.classList.add("mostrar-carta");

                setTimeout(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envoltura-sobre *")) {
        envoltura.classList.remove("abierto");
        envoltura.classList.remove("desactivar-sobre")
        if (carta.classList.contains("abierta")) {
            carta.classList.add("cerrando-carta");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta")
            }, 500);
        }
    }
});

const flores = [
  'images/gerbera.png',
  'images/tulipan.png',
  'images/rosa.png',
  'images/girasol.png',
  'images/lirio.png',
  'images/orquidea.png',
  'images/gerberas.png'
];

function lanzarFlor() {
  const flor = document.createElement('img');
  flor.src = flores[Math.floor(Math.random() * flores.length)];
  flor.classList.add('flor-cascada');

  const tamaño = Math.random() * 30 + 60; // entre 30 y 60px
  flor.style.width = `${tamaño}px`;

  flor.style.left = `${Math.random() * 100}%`;
  flor.style.animationDuration = `${5 + Math.random() * 4}s`; // 6 a 10s

  document.body.appendChild(flor);

  flor.addEventListener('animationend', () => flor.remove());
}

setInterval(() => {
  lanzarFlor();
}, 500); // lanza una flor cada 0.5s
