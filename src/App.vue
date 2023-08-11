<script setup lang="ts">
import ComputedProperties from './components/ComputedProperties.vue'
import LifeCycleHook from './components/LifeCycleHook.vue';
import DependencyParent from './components/Dependency/DependencyParent.vue';
import PropsValidate from './components/PropsValidate.vue'
import ListeningEvent from './components/ListeningEvent.vue'
import ParentSlots from './components/ParentSlots.vue'
import MyModal from './components/MyModal.vue'
import CustomDirective from './components/CustomDirective.vue'
import { ref, provide, reactive } from 'vue'


let isHook = ref(true)

const buttonDestroy = () => {
  isHook.value = !isHook.value
}

const objectValidate = {
  mess: 0,
  media: "Facebook"
}

const a = 0

let logSomething = () => {
  console.log("Something")
}

let inputStyle = reactive(
  {
    color: 'green',
    padding: '10px'
  }
)

</script>

<!-- <script lang="ts">
import { ref, provide } from 'vue'
import ComputedProperties from './components/ComputedProperties.vue'
import LifeCycleHook from './components/LifeCycleHook.vue';
import DependencyParent from './components/Dependency/DependencyParent.vue';

export default {
  components: {
    ComputedProperties,
    LifeCycleHook,
    DependencyParent
  },

  setup() {
    let isHook = ref(true);
    const buttonDestroy = () => {
      isHook.value = !isHook.value
    }

    return {
      isHook,
      buttonDestroy
    }
  }
}

</script> -->

<template>
  <div>
    <ParentSlots></ParentSlots>
  </div>

  <!-- <global-component :title="'red'"></global-component> -->

  <CustomDirective :inputstyle="inputStyle"></CustomDirective>

  <div class="outer">
    <h3>Vue Teleport Example</h3>
    <div>
      <MyModal />
    </div>
  </div>
</template>

<style scoped></style>
