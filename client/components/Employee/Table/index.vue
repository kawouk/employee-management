<template>
  <client-only>
    <div class="row">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">phone</th>
            <th scope="col">NAT</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="employee-data"
            v-for="(employee, index) in employees"
            :key="index"
          >
            <td scope="col">{{ employee.id }}</td>
            <td scope="col">{{ employee.name.first }}</td>
            <td scope="col">{{ employee.phone }}</td>
            <td scope="col">{{ employee.nat }}</td>
            <td
              class="employee-data__edit"
              scope="col"
              :class="isEmployeeActive(!!employee.active)"
            >
              <span>
                {{ isEmployeeActive(!!employee.active) }}
              </span>
              <span class="employee-data__edit-icon">
                <EditEmployee
                  :employee-id="employeeId(employee.id)"
                  :is-employee-active="!!employee.active"
                />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <rawDisplayer class="col-3" :value="employees" title="List" /> -->
    </div>
  </client-only>
</template>

<script lang="ts" src="./script.ts" />
<style scoped lang="scss" src="./styles.scss" />
