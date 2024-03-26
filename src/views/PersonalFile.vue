<template>
	
		<h1>PERSONAL FILE</h1>
	<div>
		<h2>AVATAR</h2>
		<h2>CARDS</h2>
		<h2>STATS</h2>
	</div>
	
	<div id="app">
    <vue-slick-carousel :options="carouselOptions">
      <div v-for="(card, index) in cards" :key="index">
        <img :src="card.images.small" alt="Pokemon Card" />
      </div>
    </vue-slick-carousel>
  </div>
	
	</template>
	
	
	
	<style scoped>
	h1{
		text-align: center;
	}
	div h2
	{	margin-top: 5rem;
		height:20rem;
		gap: 10px;
		
	}
	
	</style>
	
	
	
	
	<script setup>
	
	</script>