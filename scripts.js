document.addEventListener("DOMContentLoaded", () => {
  async function cargarPartidos() {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328';
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      const lista = document.getElementById("lista-partidos");
      lista.innerHTML = "";
      if (datos.events) {
        datos.events.forEach(evento => {
          const li = document.createElement("li");
          const img = document.createElement("img");
          img.src = evento.strThumb || 'https://via.placeholder.com/50';
          img.alt = evento.strEvent;
          const texto = document.createTextNode(`${evento.strHomeTeam} vs ${evento.strAwayTeam} – ${evento.dateEvent} ${evento.strTime}`);
          li.appendChild(img);
          li.appendChild(texto);
          lista.appendChild(li);
        });
      } else {
        lista.textContent = "No hay partidos próximos disponibles.";
      }
    } catch (error) {
      console.error("Error cargando partidos:", error);
      document.getElementById("lista-partidos").textContent = "Error al cargar partidos.";
    }
  }

  function cargarNoticias() {
    const noticias = [
      { titulo: "Messi regresa al Barcelona", imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg" },
      { titulo: "Real Madrid ficha nueva estrella", imagen: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" },
      { titulo: "Mercado de fichajes en auge", imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Transfermarkt_logo.svg" }
    ];
    const lista = document.getElementById("lista-noticias");
    lista.innerHTML = "";
    noticias.forEach(n => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = n.imagen;
      img.alt = n.titulo;
      const texto = document.createTextNode(n.titulo);
      li.appendChild(img);
      li.appendChild(texto);
      lista.appendChild(li);
    });
  }

  cargarNoticias();
  cargarPartidos();
});
