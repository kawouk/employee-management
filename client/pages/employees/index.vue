<template>
  <div>
    <Controller />
    <Loader v-if="loading" />

    <EmployeeTable v-else />
    <v-pagination
      v-if="showPagination"
      :class="{ 'page-loading': loading }"
      v-model="page"
      :length="3"
      :total-visible="5"
      @update:model-value="updatePage"
    ></v-pagination>
  </div>
</template>
<script lang="ts" src="./script.ts" />
<style lang="scss" scoped src="./styles.scss" />
