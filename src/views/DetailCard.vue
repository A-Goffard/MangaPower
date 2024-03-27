<template>
    <div>
      <h1>DETAIL CARD</h1>
    </div>
  </template>
  
  <script setup>
    import { defineProps } from 'vue';
  
    const props = defineProps({
      fitxa: {
        type: Object,
        required: true
      }
    });
  </script>
  
  <style scoped>
  
  </style>