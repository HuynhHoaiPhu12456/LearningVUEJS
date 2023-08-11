<script setup lang="ts">
import { reactive, ref } from 'vue';
import EmittingEvent from './EmittingEvent.vue'
import EventValidation from './EventValidation.vue'

let posts = reactive([
    { id: 1, title: "Final Fantasy", content: "Đây là một series game cực hay" },
    { id: 2, title: "Mansion House", content: "Đây là một bộ phim" },
    { id: 3, title: "Something", content: "Là cái gì đó" }
]
)

let postFontSize = ref(1);

const onEnlargeText = (enlargeAmount: number): void => {
    postFontSize.value += enlargeAmount;
}

const logChangeNumber = (id: number, value: string) => {
    console.log(value, id);
}

const logUpdateString = (value: string) => {
    console.log(value);
}

const logUser = (email: string, password: string) => {
    console.log("Đây là Email: ", email);
    console.log("Đây là password: ", password);
}


</script>


<template>
    <!--
        Component parent có thể lắng nghe sự kiện bằng cách dùng v-on 
        Khi lắng nghe event từ parent có thể sử dụng hàm mũi tên, cho phép truy cập vào event argument   
        Nếu Event handler là một method, thì giá trị sẽ được truyền vào parameter đầu tiên của method
    -->

    <div :style="{ fontSize: postFontSize + 'em' }">
        <EmittingEvent v-for="item in posts" v-bind:key="item.id" v-bind:post="item"
            v-on:enlarge-text="(n: number) => postFontSize += n" v-on:change="(a: number, b: string) => console.log(b, a)"
            v-on:update="logUpdateString">
        </EmittingEvent>
    </div>

    <div>
        <EventValidation v-on:submit="(n) => { logUser(n.email, n.password) }"></EventValidation>
    </div>
</template>