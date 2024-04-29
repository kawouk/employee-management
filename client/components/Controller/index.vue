<template>
  <div class="controller">
    <div class="controller__search">
      <Search />
    </div>
    <div class="controller__btns">
      <v-btn
        variant="plain"
        prepend-icon="mdi-account-plus"
        density="default"
        @click="showAddPopup"
      >
        Add Employee</v-btn
      >
      <Filter />
    </div>
  </div>
</template>
<script lang="ts" src="./script.ts" />
<style lang="scss" scoped src="./styles.scss" />
