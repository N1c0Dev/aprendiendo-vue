<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- Accede a la variable counter almacenada en el state del store (forma no recomendada, siempre hay que usar computed) -->
    <h1>Mi contador: {{ $store.state.counter }}</h1>
  </div>
</template>
