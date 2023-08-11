<script setup lang="ts">
import FancyButton from './FancyButton.vue'
import BaseLayout from './BaseLayout.vue'
import { ref } from 'vue'

let message = ref("Đây là một tin nhắn")
</script>

<template>
    <span>{{ message }}</span>
    <FancyButton>
        <span style="color:cyan">Click me! </span> <!-- slot content -->
    </FancyButton>
    <FancyButton>
        <span style="color:cyan">{{ message }} </span> <!-- slot content -->
    </FancyButton>
    <FancyButton></FancyButton>
    <BaseLayout>
        <template #header="{ text, count }">
            <h1>Here might be a page title</h1>
            <p> {{ text }} {{ count }} </p>
        </template>

        <template #default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>

        <template #footer>
            <p>Here's some contact info</p>
        </template>
    </BaseLayout>
</template>