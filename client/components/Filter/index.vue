<template>
  <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <v-btn
        color="primary"
        v-bind="props"
        density="default"
        prepend-icon="mdi-filter-variant"
      >
        Filter
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(filter, i) in filters" :key="i">
        <v-list-item-title
          class="list-item"
          v-if="notNestedFilter(filter)"
          @click="addFilter(filter)"
        >
          <IconsCheck v-if="filterActive(filter)" />
          {{ filter }}</v-list-item-title
        >
        <v-menu
          transition="slide-y-transition"
          v-else-if="genderFilter(filter)"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              v-bind="props"
              :ripple="false"
              class="filter-inner-btn"
            >
              Gender
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(filter, i) in genderFilterArr" :key="i">
              <v-list-item-title
                class="list-item"
                @click="addGenderFilter(filter)"
              >
                <IconsCheck v-if="filterActive(filter)" />
                {{ filter }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu transition="slide-y-transition" v-else-if="natFilter(filter)">
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              :ripple="false"
              class="filter-inner-btn"
              v-bind="props"
            >
              Nationality
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(filter, i) in natFilterArr" :key="i">
              <v-list-item-title
                class="list-item"
                @click="addNatFilter(filter)"
              >
                <IconsCheck v-if="filterActive(filter)" />
                {{ filter }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script lang="ts" src="./script.ts" />
<style lang="scss" scoped src="./styles.scss" />
