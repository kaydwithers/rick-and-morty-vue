<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  background-color: var(--background-color-accent);
  border-radius: var(--border-radius);
  font-size: 1.25rem;
  padding: 1rem 2rem;
  color: white;
  transition-duration: 300ms;
  transition-property: transform;
}

button:hover {
  transform: scaleX(1.05) scaleY(1.05);
}
</style>
