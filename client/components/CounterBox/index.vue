<template>
  <div class="counter-box" :style="{ boxShadow: boxShadow }">
    <div class="counter">{{ displayNumber }}</div>
    <div class="title" :style="{color:props.color}">{{ title }}</div>
  </div>
</template>
<script lang="ts" src="./script.ts" />
<style lang="scss" scoped src="./styles.scss" />
