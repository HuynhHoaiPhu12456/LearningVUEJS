<script setup lang="ts">
import { inject } from 'vue';

const injectedMessage = inject('message');
</script>

<template>
    <div>
        <p>Đây là Component con: {{ injectedMessage }}</p>
    </div>
</template>