<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterView from '@/components/Footerview.vue'
</script>

<template>

        <RouterView />
        <FooterView />
</template>

<style scoped>
* {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
}
</style>
