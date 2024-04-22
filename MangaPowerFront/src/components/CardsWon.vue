<template>
    <div class="cards-won-container">
        <h2>Cards Won</h2>
        <div class="card-container">
            <PokemonCard v-for="pokemon in cardsWon" :key="pokemon.name" :pokemon="pokemon" />
        </div>
    </div>
</template>

<script setup>
import { cardsWon, storeCard } from './CardsWonStore'; // Importing the reactive reference and store function  

export { cardsWon, storeCard };
</script>

<style scoped>
.cards-won-container {
    margin-top: 2rem;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}
</style>
