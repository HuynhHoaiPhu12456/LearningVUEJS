<script setup lang="ts">

defineProps({
    propA: Number,

    propB: {
        type: [String, Number],
        required: true
    },

    propC: {
        type: String,
        required: true
    },

    propD: {
        type: Number,
        default: 100
    },

    propE: {
        type: Object,

        default(rawProps: string) {
            return {
                color: "red",
                border: "none",
                "border-radius": "10px",
                padding: "10px",
                background: "aqua",
            }
        }
    },

    propG: {
        type: Function,

        default() {
            return 'Đây là function'
        }
    }

})
</script>

<template>
    <div>
        <p class="classPropA">propA: {{ propA }}</p>
        <p>propB: {{ propB }}</p>
        <p>propC: {{ propC }}</p>
        <p>propD: {{ propD }}</p>
        <p>propE: {{ propE }}</p>

    </div>

    <button @click="propG()" :style="propE" :title="propC">Click me</button>
</template>

<style scoped>
.ssll {
    color: aqua;
}
</style>