<script setup lang="ts">
import { useData, Content } from 'vitepress';
const { page } = useData();
</script>

<template>
    <h1 class="text-4xl">Custom Layout</h1>
    <div v-if="page.isNotFound">
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
    </div> 
    <Content v-else />
</template>