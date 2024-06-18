// Instalacion
const d = document;

const iForm = d.getElementById("installationsForm");

iForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = parseInt(d.getElementById("request-id").value, 10);
  //console.log(id);
  let found = false;

  const tr = d.querySelectorAll(".table tbody tr");

  //console.log(tr);

  for (let i = 0; i < tr.length; i++) {
    const cells = tr[i].getElementsByTagName("td");
    console.log(cells);
    if (parseInt(cells[0].textContent, 10) === id) {
      //console.log("COINCIDE ", cells[1].textContent);
      found = true;
      tr[i].remove();
      break;
    }
  }

  if (!found) {
    console.log("Solicitud NO encontrada");
  } else {
    console.log("Solicitud eliminada correctamente");
  }

  iForm.reset();
});
