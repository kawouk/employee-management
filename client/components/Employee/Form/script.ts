import useEmployeeStore from "~/stores/employees";
import { updateStateOptions } from "./methods";
import {
  stateOptions,
  employee,
  titleOptions,
  showDatePicker,
  genderOptions,
  countryOptions,
  natOptions,
} from "./states";

export default defineNuxtComponent({
  setup(props, { emit }) {
    // STORES
    const employeeStore = useEmployeeStore();

    // COMPUTED
    const selectedEmployee = computed(():any => {
      return employeeStore.selectedEmployee
        ? employeeStore.selectedEmployee
        : employee.value;
    });

    // Methods
    const addNewEmployee = (): void => {
      emit("add-employee", employeeStore.selectedEmployee);
    };

    // WATCHER
    watch(
      () => employee.value.location.country,
      (_newValue) => {
        updateStateOptions(employee.value, stateOptions);
      }
    );
    watch(
      employee,
      (newValue) => {
        employeeStore.selectedEmployee = { ...newValue };
      },
      { deep: true }
    );

    return {
      employeeStore,
      titleOptions,
      showDatePicker,
      employee: selectedEmployee,
      genderOptions,
      countryOptions,
      stateOptions,
      natOptions,
      updateStateOptions,
      addNewEmployee,
    };
  },
});
