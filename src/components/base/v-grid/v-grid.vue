<template>
  <div class="v-grid">
    <table ref="vgrid">
      <thead>
        <slot name="thead" />
      </thead>
      <tbody>
        <slot name="tbody" />
      </tbody>
    </table>
  </div>
</template>

<script src="./v-grid.ts" lang="ts"/>
<style src="./v-grid.scss" lang="scss"/>