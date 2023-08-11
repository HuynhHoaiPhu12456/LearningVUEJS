<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const isDisabledModal = ref(false)

const vBorder = {
    mounted: (el: any, binding: any) => {
        el.style.border = binding.value
    }
}
</script>

<template>
    <button @click="open = true">Open Modal</button>
    <Teleport to="body" :disabled="isDisabledModal">
        <div v-if="open" class="modal">
            <input v-border="'none'">
            <p>Hello from the modal!</p>
            <button @click="open = false">Close</button>
            <button @click="(isDisabledModal = !isDisabledModal)">Disabled Modal</button>
        </div>
    </Teleport>
</template>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    background: bisque;
    border-radius: 10px;
    padding: 5px;
    box-shadow: var(--vt-shadow-2);
    margin-bottom: 1.2em;
}
</style>