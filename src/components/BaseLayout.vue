<script setup lang="ts">
import { ref } from 'vue'

let headerText = ref("Đây là header")

</script>

<template>
    <div class="container">
        <header>
            <slot name="header" :text="headerText" :count="1"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>