<!-- PCPoints.vue -->
<template>
  <div>
    <h2>PC</h2>
    <p>Puntos: {{ points }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  points: {
    type: Number,
    required: true
  }
});
</script>

<style scoped>
div {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 5rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
