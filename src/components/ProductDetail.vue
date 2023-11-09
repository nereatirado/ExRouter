<template>
    <div>
      <h2>Detalles del Producto</h2>
      <div v-if="producto">
        <h3>{{ producto.name }}</h3>
        <p>Descripción: {{ producto.description }}</p>
        <p>Precio: {{ producto.price }}</p>
      </div>
      <div v-else>
        <p>El producto no se ha encontrado</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        producto: null
      };
    },
    created() {
      const productId = this.$route.params.id;
  
      const productos = [
        { id: 1, name: 'Producto 1', description: 'Descripción producto 1', price: 19 },
        { id: 2, name: 'Producto 2', description: 'Descripción producto 2', price: 25 },
        { id: 3, name: 'Producto 3', description: 'Descripción producto 3', price: 3 },
        { id: 4, name: 'Producto 4', description: 'Descripción producto 4', price: 87 }
      ];
  
      const productoEncontrado = productos.find(producto => producto.id === parseInt(productId));
  
      if (productoEncontrado) {
        this.producto = productoEncontrado;
      }
    }
  };
  </script>
  