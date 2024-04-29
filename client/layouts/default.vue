<template>
  <v-layout>
    <SideBar />
    <v-main class="main-page">
      <NuxtPage />
    </v-main>
    <AddEmployee />
  </v-layout>
</template>
<script lang="ts" src="./script.ts"/>

<style scoped lang="scss">
.main-page {
  margin: 2rem;
}
</style>
