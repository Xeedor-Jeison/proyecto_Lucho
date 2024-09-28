export function crearTarjetas(array, divPrincipal) {
    divPrincipal.innerHTML = ""

    for (let i = 0; i < array.length; i += 4) {
        let carruselItem
        if (i < 4) {
            carruselItem = document.createElement("div")
            carruselItem.classList.add("carousel-item", "active")
        }
        else {
            carruselItem = document.createElement("div")
            carruselItem.classList.add("carousel-item")
        }

        let contenedor = document.createElement("div")
        contenedor.classList.add("row")
        for (let j = i; j < i + 4; j++) {

            if (array[j] != undefined) {
                let card = document.createElement("div")
                card.classList.add("col-sm-3", "col-md-6", "col-xxl-3")
                card.innerHTML = `<div
        class="card tamañoCard mb-5  ms-2 me-2 shadow-lg bg-body-black rounded border  border-black border-opacity-10 border-5">
        <img src="${array[j].nombre}"
            class="card-img-top  img-card border border-black border-opacity-10 border-4  "
            alt="Trabajos realizados">

    </div>`
                contenedor.appendChild(card)
            }
        }
        carruselItem.appendChild(contenedor)
        divPrincipal.appendChild(carruselItem)
    }

}