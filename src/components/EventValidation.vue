<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits({
    // No validation
    click: null,

    // Validate submit event
    submit: ({ email, password }) => {
        if (email && password) {
            return true
        } else {
            console.warn('Invalid submit event payload!')
            return false
        }
    }
})

function submitForm(email: string, password: string): void {
    emit('submit', { email, password })
}

let email = ref("");
let password = ref("")

</script>

<template>
    <div>

        <label>Email</label>
        <input type="text" v-model="email"> <br>
        <label>Password</label>
        <input type="password" v-model="password"> <br>
        <button @click="submitForm(email, password)">Submit</button>

    </div>
</template>