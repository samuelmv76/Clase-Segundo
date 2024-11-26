class pedidos {
    constructor(numeroPedido, cliente, fechaPedido, procesado = false, servido = false) {
      this.numeroPedido = numeroPedido; // Número entero único
      this.cliente = cliente; // Cadena, nombre y apellidos (máx. 50 caracteres)
      this.fechaPedido = new Date(fechaPedido); // Fecha de realización del pedido
      this.procesado = procesado; // Booleano, si ha sido procesado
      this.servido = servido; // Booleano, si ha sido servido
      this.piezas = []; // Colección de piezas (instancias de Pieza)
    }
  
    // Métodos
    agregarPieza(pieza) {
      if (pieza.numeroPedido !== this.numeroPedido) {
        throw new Error("La pieza no pertenece a este pedido.");
      }
      this.piezas.push(pieza);
    }
  
    marcarProcesado() {
      this.procesado = true;
    }
  
    marcarServido() {
      if (this.piezas.every(p => p.cortada)) {
        this.servido = true;
      } else {
        this.servido = false;
        //throw new Error("No se puede marcar como servido: aún hay piezas sin cortar.");
      }
    }
  
    obtenerResumen() {
      return {
        numeroPedido: this.numeroPedido,
        cliente: this.cliente,
        fechaPedido: this.fechaPedido,
        procesado: this.procesado,
        servido: this.servido,
        totalPiezas: this.piezas.length,
      };
    }
    
  }

function botonin(){
  let numerobuscar=document.getElementById("numero-Pedido");
  console.log(numerobuscar);
    return pedidosList.find(pedido => pedido.numeroPedido === numerobuscar);
} 

  // Datos simulados
  const pedidosList = [
    new pedidos(1, "Juan Pérez", "2024-11-01"),
    new pedidos(2, "Ana López", "2024-11-15", true),
    new pedidos(3, "Carlos Gómez", "2024-11-20", true, true),
  ];

function test() {
  document.getElementById("w3canonima").addEventListener("click",  
    function () { 
              this.style.background = "#C0C0C0"; 
    }); 
}
  
function tablaPedido(){
  let div = "<div>";

  let numerobuscar=document.getElementById("numero-Pedido").value;
  pedidosList.forEach( numerobuscar => {
    <td>${numerobuscar.cliente}</td>
  });
}

  // Función para buscar un pedido
  function buscarPedidoPorID(id) {
    return pedidosList.find(pedido => pedido.numeroPedido === id);
  }
      //cuestionario para introducir pedidos
      function cuestionario() {
        // Instancia de la clase Pedidos
        const pedidos = new Pedidos();
        
        // Selecciona el botón y el campo de texto

    
        addEventListener('click', () => {
            const numeroPedido = input.value.trim();
        });
      }

      function comprobar() {
        // Instancia de la clase Pedidos
        const pedidos = new Pedidos();
    
        // Selecciona el botón y el campo de texto
        const boton = document.getElementById('comprobar');
        const input = document.querySelector('input');
    
        boton.addEventListener('click', () => {
            const numeroPedido = input.value.trim();
        })
      };