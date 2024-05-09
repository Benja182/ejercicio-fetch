document.addEventListener("DOMContentLoaded", function () {
    const btnCargarTabla = document.getElementById("btnCargarTabla");
    const tabla = document.getElementById("contenidoTabla");
  
    btnCargarTabla.addEventListener("click", function () {
      fetch("https://restcountries.com/v3.1/subregion/South%20America")
        .then((response) => response.json())
        .then((data) => {
          tabla.innerHTML = ""; 
  
          data.forEach((pais) => {
            let nombreMoneda = "Desconocido";
            if (pais.currencies) {
              const monedas = Object.values(pais.currencies);
              if (monedas.length > 0) {
                nombreMoneda = monedas[0].name;
              }
            }
  
            const fila = document.createElement("tr");
            fila.innerHTML = `
              <td>${pais.name.common}</td>
              <td>${pais.population.toLocaleString()}</td>
              <td>${nombreMoneda}</td>
            `;
            tabla.appendChild(fila);
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
  