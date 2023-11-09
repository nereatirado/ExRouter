<template>
    <div>
      <h2>Lista de productos</h2>
      <ul>
        <li v-for="producte in productos" :key="producte.id">
          <router-link :to="'/producto/' + producte.id">{{ producte.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productos: [
          { id: 1, name: 'Producto 1', description: 'Descripción producto', price: 19},
          { id: 2, name: 'Producto 2', description: 'Descripción producto', price: 25 },
          { id: 3, name: 'Producto 3', description: 'Descripción producto', price: 3},
          { id: 4, name: 'Producto 4', description: 'Descripción producto', price: 87 },
        ]
      };
    }
  };
  </script>
  