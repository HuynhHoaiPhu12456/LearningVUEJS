<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount } from 'vue';

let message = ref("")

let logMessage = () => {
    console.log(message.value)
}

// Được gọi trước khi component được gắn kết lần đầu tiên vào DOM.
onBeforeMount(() => {
    console.log("Trước khi được mount vào DOM")
})
// Được gọi sau khi component đã được gắn kết vào DOM.
onMounted(() => {
    message.value // <div>
    console.log("Component đã được mount")
})
// Được gọi trước khi component bắt đầu cập nhật lại và trước khi DOM được cập nhật.
onBeforeUpdate(() => {
    console.log("Trước khi thực hiện update")
})
// Được gọi sau khi component đã cập nhật lại và sau khi DOM được cập nhật.
onUpdated(() => {
    console.log("Component được update")
})
// Được gọi trước khi component bắt đầu quá trình hủy.
onBeforeUnmount(() => {
    console.log("Trước khi gỡ component")
})
// Được gọi sau khi component đã hoàn thành quá trình hủy.
onUnmounted(() => {
    console.log("Component đã được gỡ")
})

</script>

<template>
    <div class="container">
        <h4>Ví dụ 1: Văn bản</h4>
        <div class="appContainer" id="app">
            <div class="row">
                <input v-model.trim="message" type="text" placeholder="Nhập thông điệp">
            </div>
            <div class="row">
                <button @click="logMessage">Log Message</button>
            </div> <br>
            <div class="row">
                <p>Thông điệp: {{ message }}</p>
            </div>
        </div>

    </div>
</template>

<style scoped>
.container {
    min-height: 20px;
    width: 50%;
    padding: 5px;
    margin: 100px auto 50px;
    border: 1px solid black;
    border-radius: 10px;
    background: beige;
}

.appContainer {
    margin: 10px;
    padding: 15px;
}

.row {
    margin-top: 5px;
    padding: 5px 15px;
}

input {
    width: 100%;
    height: 30px;
    font-size: medium;
    /* border: none; */
    /* background: transparent; */
}

input:focus {
    outline-width: 0;
    border-radius: 5px;
}

p {
    overflow-wrap: break-word;
}

textarea {
    resize: vertical;
    width: 100%;
    /* background: transparent;
    border: none; */
}

textarea:focus {
    outline-width: 0;
}

div#app3.appContainer input {
    width: 32px;
    height: 12px;
    margin: 2.5px;
}

div#app.appContainer div.row button {
    float: right;
    border: none;
    background-color: pink;
    color: azure;
    padding: 5px 15px;
    border-radius: 5px;
}

div#app.appContainer div.row button:hover {
    color: red;
    font-style: italic;
}

select {
    width: 100%;
}
</style>