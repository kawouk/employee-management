<template>
  <div>
    <Loader v-if="loading"/>
    <div class="counter-header" v-else>
      <CounterBox
        :number="numberOfEmployees"
        title="Total Employees"
        :color="secondaryColor"
      />
      <CounterBox
        :number="numberOfActiveEmployees"
        title="Active Employees"
        :color="successColor"
      />
      <CounterBox
        :number="numberOfNotActiveEmployees"
        title="Deactivated Employees"
        :color="errorColor"
      />
    </div>
  </div>
</template>
<script lang="ts" src="./script.ts" />
<style lang="scss" scoped src="./styles.scss" />
