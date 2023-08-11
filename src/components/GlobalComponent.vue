<script lang="ts">

export default {
    props: ['title'],

    setup() {
    },

    directives: {
        focus: {
            mounted: (el, binding) => {
                el.style.color = binding.value,
                    el.focus()
            }

        }
    }
};


</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <input v-focus="title">
    </div>
</template>