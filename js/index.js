const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta data.json */

const getProducts = async () =>{
  const res = await fetch("./data.json");
  const data = await res.json();
 
      data.forEach(producto => {
      const nuevoItem = document.createElement("div");
      nuevoItem.classList = "tarjeta-producto"
      nuevoItem.innerHTML = `
      <img src="./img/productos/${producto.id}.jpg" alt="Producto 1">
      <h3>${producto.nombre}</h3>
      <p class="precio">$${producto.precio}</p>
      <button>Agregar al carrito</button>`
      contenedorTarjetas.appendChild(nuevoItem);
      nuevoItem.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
      
      nuevoItem.getElementsByTagName("button")[0]
      .addEventListener("click",() => Toastify({
        text: "Agregado al carrito",
        offset: {
          x: 200, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
      }).showToast()
    )
})}

getProducts();


