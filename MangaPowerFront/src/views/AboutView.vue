<template>
  <div class="mainDivHome">
    <div class="logo">
      <img class="logoimage" src="logo.png" alt="">
    </div>
    <div class="about-page">
      <h1>Bienvenido a Pokémon Cards Adventure</h1>
      <div class="section">
        <h2>Descubre el emocionante mundo de las cartas Pokémon</h2>
        <p>En Pokémon Cards Adventure, te sumergirás en un universo lleno de emoción, estrategia y diversión. Conviértete en un entrenador Pokémon, colecciona cartas, construye tu mazo y desafía a otros entrenadores para demostrar quién es el mejor.</p>
      </div>
      <div class="section">
        <h2>Explora los orígenes de las cartas Pokémon</h2>
        <p>Aprende sobre la rica historia de las cartas Pokémon, desde sus humildes comienzos en 1996 hasta su evolución en la actualidad. Descubre cómo las cartas Pokémon se han convertido en una parte icónica de la cultura pop, capturando la imaginación de millones de personas en todo el mundo.</p>
      </div>
      <div class="section">
        <h2>Conoce a los personajes icónicos</h2>
        <p>Desde Pikachu hasta Charizard, conoce a tus Pokémon favoritos y descubre sus poderes únicos. Aprende sobre los entrenadores legendarios, como Ash Ketchum y Misty, que han dejado una marca indeleble en la historia de Pokémon.</p>
      </div>
      <div class="section">
        <h2>Únete a la comunidad</h2>
        <p>¡Conéctate con otros entrenadores Pokémon de todo el mundo! Participa en torneos, intercambia cartas y comparte estrategias en nuestra vibrante comunidad en línea. Haz nuevos amigos y disfruta de la camaradería que solo los fans de Pokémon pueden ofrecer.</p>
      </div>
      <div class="section">
        <h2>Embárcate en una aventura inolvidable</h2>
        <p>Desde los paisajes serenos de Pueblo Paleta hasta las emocionantes batallas en la Liga Pokémon, Pokémon Cards Adventure te llevará en un viaje épico que nunca olvidarás. ¿Estás listo para empezar tu viaje hacia la grandeza?</p>
      </div>
    </div>
  
  </div>
</template>

<script>

</script>

<style>

.mainDivHome {
  height: auto; /* Ajustar la altura automáticamente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/public/autumn-night-illuminated-lantern-tree-yellow-leaf-generated-by-ai.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat; 
  background-attachment: fixed; /* Fija el fondo */
}
.logoimage {
  width: 100%;
}
.logo {
  max-width: 30rem;
  width: 70%;
  padding: 0rem 1rem;
  margin: 1rem;
  background-color: rgb(255, 255, 255, 0.65);
  border-radius: 0.5rem;
}
.about-page {
  padding: 20px;
  color: white;
  width: 80%;
}

.section {
  margin-bottom: 30px;
}

.section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.section p {
  font-size: 18px;
}

</style>