<script setup lang="ts">

let Color = defineProps({
    inputstyle: {},
})

let VDolor = {
    mounted: (el: any, binding: any) => {
        el.style.color = binding.value.color
        el.style.padding = binding.value.padding
    }
}

</script>

<template>
    <div>
        <input v-dolor="inputstyle">
    </div>
</template>