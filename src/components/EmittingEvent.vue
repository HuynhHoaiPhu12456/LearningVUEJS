<script setup lang="ts">

defineProps(['post']);

const emit = defineEmits<{
    (e: 'enlarge-text', pix: number): void;
    (e: 'change', id: number, value: string): void;
    (e: 'update', value: string): void;
}>();

const emitEnlargeText = () => {
    emit('enlarge-text', 0.1)
}

const emitChange = () => {
    emit('change', 123, "Đây là số: "); // Gửi sự kiện 'change' với tham số id là 123
};

const emitUpdate = () => {
    emit('update', 'New value'); // Gửi sự kiện 'update' với tham số value là 'New value'
};
</script>

<template>
    <!-- Một Component có thể phát một custom event trực tiếp từ template sử built-in $emit method -->
    <!-- Đôi khi sẽ hữu ích khi phát (emit) ra một giá trị cụ thể với một sự kiện -->

    <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <p v-html="post.content"></p>
        <button v-on:click="emitEnlargeText">
            <!-- <button v-on:click="$emit('enlarge-text', 0.1)"> -->
            Phóng to
        </button>
    </div>

    <div>
        <button @click="emitChange">Emit Change Event</button>
        <button @click="emitUpdate">Emit Update Event</button>
    </div>
</template>

<style scoped>
button {
    margin: 5px 5px 0px 0px;
}
</style>