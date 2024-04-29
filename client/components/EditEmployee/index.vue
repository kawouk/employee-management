<template>
  <div class="edit-employee" ref="editEmployeeRef">
    <IconsDots @click="toggleDropdown" />
    <transition name="dropdown">
      <ul
        class="edit-employee__dropdown"
        v-if="isDropdownVisible"
        ref="dropdownRef"
      >
        <li @click="editEmloyee"><span>Edit</span> <IconsEdit /></li>
        <li @click="activateEmployee" class="active-emp">{{ activateText }}</li>
        <li @click="deleteEmloyee" class="delete">
          <span>Delete</span> <IconsDelete />
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" scoped src="./styles.scss" />
