const noticias = [
  {
    titulo: "Lionel Messi gana el Balón de Oro 2023",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi_20180626.jpg",
    descripcion: "El argentino Lionel Messi conquistó su octavo Balón de Oro."
  },
  {
    titulo: "Mbappé se convierte en máximo goleador del PSG",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Kylian_Mbappe_2019.jpg",
    descripcion: "Kylian Mbappé superó el récord goleador del club francés."
  },
  {
    titulo: "UEFA Champions League anuncia nuevas fechas para la temporada 2025",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f2/UEFA_Champions_League_logo_2.svg",
    descripcion: "El torneo europeo tendrá cambios en el calendario para mejorar el espectáculo."
  }
];

const partidos = [
  {
    equipo1: "FC Barcelona",
    logo1: "https://upload.wikimedia.org/wikipedia/commons/4/47/FC_Barcelona_%282015%29.svg",
    equipo2: "Real Madrid",
    logo2: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    hora: "21:00",
    torneo: "La Liga"
  },
  {
    equipo1: "Manchester United",
    logo1: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    equipo2: "Chelsea FC",
    logo2: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    hora: "18:30",
    torneo: "Premier League"
  },
  {
    equipo1: "Bayern Munich",
    logo1: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_München_logo_%282017%29.svg",
    equipo2: "Borussia Dortmund",
    logo2: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    hora: "20:45",
    torneo: "Bundesliga"
  }
];

function cargarNoticias() {
  const ul = document.getElementById("lista-noticias");
  ul.innerHTML = "";
  noticias.forEach(noticia => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = noticia.imagen;
    img.alt = noticia.titulo;

    const div = document.createElement("div");
    div.innerHTML = `<strong>${noticia.titulo}</strong><br>${noticia.descripcion}`;

    li.appendChild(img);
    li.appendChild(div);
    ul.appendChild(li);
  });
}

function cargarPartidos() {
  const ul = document.getElementById("lista-partidos");
  ul.innerHTML = "";
  partidos.forEach(partido => {
    const li = document.createElement("li");

    const img1 = document.createElement("img");
    img1.src = partido.logo1;
    img1.alt = partido.equipo1;

    const img2 = document.createElement("img");
    img2.src = partido.logo2;
    img2.alt = partido.equipo2;

    const div = document.createElement("div");
    div.innerHTML = `<strong>${partido.equipo1}</strong> vs <strong>${partido.equipo2}</strong> – ${partido.hora} (${partido.torneo})`;

    li.appendChild(img1);
    li.appendChild(div);
    li.appendChild(img2);
    ul.appendChild(li);
  });
}

window.onload = () => {
  cargarNoticias();
  cargarPartidos();
};
