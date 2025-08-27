const productos = [
  { id: "1", nombre: "Aros de acero Blanco", precio: 4000, categoria: "aros", img: "/img/aros-a-d.jpeg" },
  { id: "2", nombre: "Aros de acero Dorado", precio: 5000, categoria: "aros", img: "/img/aros-a-d.jpeg" },
  { id: "3", nombre: "Aros de Plata", precio: 7000, categoria: "aros", img: "/img/aros-a-d.jpeg" },
  { id: "4", nombre: "Aros de acero quirurgico", precio: 4500, categoria: "aros", img: "/img/aros-a-d.jpeg" },

  { id: "5", nombre: "Cadena de acero Blanco", precio: 6000, categoria: "cadenas", img: "/img/cadena-a-b1.jpg" },
  { id: "6", nombre: "Cadena de acero Dorado", precio: 6500, categoria: "cadenas", img: "/img/cadena-a-d.jpg" },
  { id: "7", nombre: "Cadena de Plata", precio: 7500, categoria: "cadenas", img: "/img/cadena-plata.jpeg" },
  { id: "8", nombre: "Cadena de acero quirurgico", precio: 5000, categoria: "cadenas", img: "/img/cadena-a-d2.jpg" },

  { id: "9", nombre: "Pulcera de acero quirurgico", precio: 3000, categoria: "pulceras", img: "/img/pulcera-a-b.jpg" },
  { id: "10", nombre: "Pulcera de acero Blanco", precio: 3500, categoria: "pulceras", img: "/img/pulcera-a-d.jpg" },
  { id: "11", nombre: "Pulcera de acero Dorado", precio: 5000, categoria: "pulceras", img: "/img/pulcera-a-b.jpg" },
  { id: "12", nombre: "Pulcera de Plata", precio: 5500, categoria: "pulceras", img: "/img/pulcera-a-d.jpg" },

  { id: "13", nombre: "Anillos de acero quirurgico", precio: 3000, categoria: "anilos", img: "/img/anillo-a-q.jpeg" },
  { id: "14", nombre: "Anillos de acero Blanco", precio: 3500, categoria: "anilos", img: "/img/anillo-a-b.jpg" },
  { id: "15", nombre: "Anillos de acero Dorado", precio: 4000, categoria: "anilos", img: "/img/anillo-a-d.jpg" },
  { id: "16", nombre: "Anillos de Plata", precio: 5000, categoria: "anilos", img: "/img/anillo-a-b1.jpg" },

];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductoById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((prod) => prod.id === id));
    }, 1000);
  });
};

export const getProductosByCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.categoria === categoria));
    }, 1000);
  });
};