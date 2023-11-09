<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/producto/:id">Producto</RouterLink>
        <RouterLink to="/lista">Lista de productos</RouterLink>
    </nav>
    <RouterView></RouterView>
</template>

<style scoped>

</style>
