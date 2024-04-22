import { ref } from 'vue';

const cardsWon = ref([]); // Initialize an empty array to store won cards

const storeCard = (card) => {
    cardsWon.value.push(card);
};

export { cardsWon, storeCard };

