<template>
  <div class="v-card">
    <div class="card-title">
      <span>{{ title }}</span>
      <span></span>
    </div>
    <slot name="content"/>
  </div>
</template>

<script src="./v-card.ts" lang="ts"/>
<style src="./v-card.scss" lang="scss"/>