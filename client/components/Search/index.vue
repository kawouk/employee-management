<template>
  <form @submit.prevent="search">
    <v-text-field
      hint="Search for employees via Name,Phone,or ID"
      label="Search"
      type="input"
      v-model="searchText"
      prepend-inner-icon="mdi-magnify"
      variant="solo"
      bg-color="white"
      color="primary"
      density="comfortable"
    ></v-text-field>
  </form>
</template>
<script lang="ts" src="./script.ts" />
<style lang="scss" scoped src="./styles.scss" />