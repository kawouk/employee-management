import type { IEmployee } from "@/types";
import { isEmployeeActive } from "@/lib/utils";
import useEmployeeStore from "~/stores/employees";

export default defineNuxtComponent({
  name: "table-example",
  display: "Table",
  order: 8,

  setup() {
    const employeeStore = useEmployeeStore();
    // COMPUTED
    const employees = computed((): IEmployee[] => {
      return employeeStore.filteredEmployees;
    });

    // METHODS
    const employeeId = (id: number) => {
      return parseInt(id.toString());
    };

    return {
      employees,
      dragging: false,
      isEmployeeActive,
      employeeId,
    };
  },
});
