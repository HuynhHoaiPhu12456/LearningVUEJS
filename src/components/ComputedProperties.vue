<script setup lang="ts">
import { reactive, computed, ref } from 'vue'

const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})

// Computed properties mặc định là getter-only. Nếu muốn gán một giá trị mới cho một computed properties sẽ nhận run time warning.
// Trong trường hợp mong muốn computed properties có thể ghi, ta có thể cung cấp 1 thuộc tính bằng cách cung cấp cả getter và setter
const firstName = ref("John");
const lastName = ref("Sinna");

const fullName = computed({
    //getter
    get() {
        return firstName.value + " " + lastName.value
    },
    // setter
    set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})

// Với việc cung cấp getter và setter có thể set giá trị mới cho computed properties fullName
fullName.value = "Maria Jane"

</script>

<template>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <p>Tên đầy đủ là: {{ lastName }}</p>
</template>
