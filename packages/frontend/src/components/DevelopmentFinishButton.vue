<template>
  <div
    @click="$emit('click')"
    class="dev-button cursor-pointer rounded-md overflow-hidden border border-black"
  >
    <div class="m-1 bg-yellow-200 p-1 rounded-md border border-black">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.dev-button {
  background: repeating-linear-gradient(45deg, black, black 5px, yellow 5px, yellow 10px);
}
</style>
