import useEmployeeStore from "@/stores/employees";
import useUIStore from "~/stores/ui";

export default defineNuxtComponent({
  setup() {
    // ROUTING
    const route = useRoute();

    // STORES
    const employeeStore = useEmployeeStore();
    const UIStore = useUIStore();

    // STATES
    const offset = ref(0);
    const limit = ref(0);

    // MOUNTED
    onMounted(async () => {
      if (!employeeStore.employees.length) await fetchEmployees();
    });

    // METHODS
    const fetchEmployees = async (): Promise<void> => {
      if (employeeStore.employeeCount === 0) {
        UIStore.startLoading();
        await employeeStore.getEmployeeCount();
        UIStore.stopLoading();
      }
    };
  },
});
