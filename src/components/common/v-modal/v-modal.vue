<template>
  <div class="modal" :class="{ 'is-open': isOpen, 'is-close': !isOpen }">
    <div class="header">
      <div>
        <span class="title">{{ title }}</span>
      </div>
      <div class="options">
        <a href="javascript:void(0)"
          ><em class="fas fa-plus"></em
        ></a>
      </div>
    </div>
    <div class="content">
      <slot name="content"/>
    </div>
    <div class="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script src="./v-modal.ts" lang="ts"/>
<style src="./v-modal.scss" lang="scss"/>