<script setup lang="ts">
import { provide, ref } from 'vue';
import DependencyChild from './DependencyChild.vue';

let message = ref('Hello from parent!');

// Cung cấp biến message cho component con
provide('message', message);
</script>

<template>
    <div>
        <DependencyChild />
    </div>
</template>
  