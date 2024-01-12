<template>
  <div class="overlay" :class="{ 'is-open': isOpen, 'is-close': !isOpen }">
    <slot />
  </div>
</template>

<script src="./v-overlay.ts" lang="ts"/>
<style src="./v-overlay.scss" lang="scss"/>