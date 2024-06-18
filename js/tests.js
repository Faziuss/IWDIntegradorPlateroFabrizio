// Remover tr de la tabla
const d = document;

const tForm = d.getElementById("testForm");
tForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const solicitud = parseInt(document.getElementById("solicitud").value, 10);
  const resultado = d.getElementById("resultado").value;
  let found = false;

  if (resultado === "exito" || resultado === "fallo") {
    const tr = d.querySelectorAll(".tests-table tbody tr");

    //console.log(tr);

    for (let i = 0; i < tr.length; i++) {
      const cells = tr[i].getElementsByTagName("td");
      //console.log(cells);
      if (parseInt(cells[0].textContent, 10) === solicitud) {
        //console.log("COINCIDE ", cells[1].textContent)
        found = true;
        tr[i].remove();
        break;
      }
    }
  }

  if (!found) {
    console.log("Solicitud NO encontrada");
    return;
  } else {
    console.log("Solicitud eliminada correctamente");
  }

  tForm.reset();
});
