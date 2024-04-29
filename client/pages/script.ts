import useEmployeeStore from "~/stores/employees";
import useUIStore from "~/stores/ui";

export default defineNuxtComponent({
  setup() {
    // STORES
    const employeeStore = useEmployeeStore();
    const UIStore = useUIStore();

    // STATES
    const secondaryColor = ref("#635bff");
    const successColor = ref("#63d463");
    const errorColor = ref("#ff0000");

    // COMPUTED
    const loading = computed((): boolean => UIStore.loading);
    const numberOfEmployees = computed(
      (): number => employeeStore.employeeCount
    );
    const numberOfActiveEmployees = computed(
      (): number => employeeStore.employeeActiveCount
    );
    const numberOfNotActiveEmployees = computed(
      (): number => employeeStore.employeeNotActiveCount
    );

    return {
      secondaryColor,
      successColor,
      errorColor,
      loading,
      numberOfActiveEmployees,
      numberOfNotActiveEmployees,
      numberOfEmployees,
    };
  },
});
