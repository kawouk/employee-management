<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="UIStore.showAddPopup"
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card>
        <v-toolbar>
          <v-btn icon="mdi-close" @click="closeAddPopup()"></v-btn>

          <v-toolbar-title>Add New Employee</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn text="Save" variant="text" @click="closeAddPopup()"></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <EmployeeForm />
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts" src="./script.ts" />
<style lang="scss" scoped src="./styles.scss" />
