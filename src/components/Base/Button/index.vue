<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  background-color: var(--background-color-accent);
  border-radius: var(--border-radius);
  color: #000;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  transition-duration: 300ms;
  transition-property: transform;
}

button:hover {
  transform: scaleX(1.05) scaleY(1.05);
}
</style>
