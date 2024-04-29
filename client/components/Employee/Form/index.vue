<template>
  <form
    class="add-form"
    @submit.prevent="addNewEmployee"
  >
    <v-list class="name-section" lines="two" subheader>
      <v-list-subheader>Employee Name</v-list-subheader>
      <span>
        <v-select
          :items="titleOptions"
          v-model="employee.name.title"
          density="comfortable"
          label="Title"
          variant="solo-filled"
          bg-color="white"
        ></v-select>
        <v-text-field
          label="First Name"
          density="comfortable"
          variant="solo-filled"
          v-model="employee.name.first"
          color="white"
          bg-color="white"
        ></v-text-field>
        <v-text-field
          label="Last Name"
          v-model="employee.name.last"
          density="comfortable"
          variant="solo-filled"
          bg-color="white"
        ></v-text-field>
      </span>
    </v-list>
    <v-list class="name-section" lines="two" subheader>
      <v-list-subheader>Address</v-list-subheader>
      <span>
        <v-select
          :items="countryOptions"
          v-model="employee.location.country"
          density="comfortable"
          label="Country"
          variant="solo-filled"
          bg-color="white"
          @change="updateStateOptions"
        ></v-select>
        <v-select
          :items="stateOptions"
          v-model="employee.location.state"
          density="comfortable"
          label="State"
          variant="solo-filled"
          bg-color="white"
          :disabled="!employee.location.country"
        ></v-select>
        <v-text-field
          label="City"
          v-model="employee.location.city"
          density="comfortable"
          variant="solo-filled"
          bg-color="white"
        ></v-text-field>
      </span>
      <span>
        <v-text-field
          label="Street"
          density="comfortable"
          variant="solo-filled"
          v-model="employee.location.street"
          bg-color="white"
        ></v-text-field>
        <v-text-field
          label="Post Code"
          density="comfortable"
          variant="solo-filled"
          v-model="employee.location.postcode"
          bg-color="white"
        ></v-text-field>
        <v-select
          :items="natOptions"
          v-model="employee.nat"
          density="comfortable"
          label="Nationalities"
          variant="solo-filled"
          bg-color="white"
        ></v-select>
      </span>
    </v-list>
    <v-list class="name-section" lines="two" subheader>
      <v-list-subheader>Employee Info</v-list-subheader>
      <span>
        <input type="date" class="dob-input" v-model="employee.dob.date" />
        <v-text-field
          label="Email"
          density="comfortable"
          variant="solo-filled"
          bg-color="white"
          v-model="employee.email"
        ></v-text-field>

        <v-text-field
          label="Phone"
          density="comfortable"
          variant="solo-filled"
          bg-color="white"
          type="tel"
          v-model="employee.phone"
        ></v-text-field>
      </span>
      <span>
        <v-select
          :items="genderOptions"
          v-model="employee.gender"
          density="comfortable"
          label="gender"
          variant="solo-filled"
          bg-color="white"
        ></v-select>
      </span>
    </v-list>
  </form>
</template>
<script lang="ts" src="./script.ts" />
<style lang="scss" scoped src="./styles.scss" />
