<template>
  <div :class="`${APP_PREFIX}-v-input`">
    <fieldset
      :class="{
        [`${APP_PREFIX}-form ${APP_PREFIX}-fieldset`]: true,
        invalid,
        disabled,
      }"
    >
      <legend
        v-if="label && label !== ''"
        :class="{ [`${APP_PREFIX}-legend`]: true, invalid, disabled }"
      >
        {{ label }}
      </legend>
      <input
        v-bind="$attrs"
        :class="{
          [`${APP_PREFIX}-input`]: true,
          'has-label': label && label !== '',
          invalid,
          disabled,
        }"
        :placeholder="placeholder"
      />
    </fieldset>
  </div>
</template>

<script src="./v-input.ts" lang="ts"/>
<style src="./v-input.scss" lang="scss" scoped/>