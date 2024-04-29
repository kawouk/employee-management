import useEmployeeStore from "~/stores/employees";
import useUIStore from "~/stores/ui";
import type { IEmployee } from "~/types";

export default defineNuxtComponent({
  props: {
    employeeId: {
      type: Number,
      required: true,
    },
    isEmployeeActive: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, ctx) {
    // STORES
    const employeeStore = useEmployeeStore();
    const UIStore = useUIStore();

    // STATES
    const isDropdownVisible = ref(false);
    const editEmployeeRef = ref<HTMLElement | null>(null);
    const dropdownRef = ref<HTMLElement | null>(null);

    // COMPUTED
    const activateText = computed((): string => {
      return props.isEmployeeActive ? "deactivate" : "activate";
    });
    const selectedEmployee = computed((): any => {
      if (employeeStore.employees.length > 0) {
        return employeeStore.employees.find(
          (emp) => emp.id == props.employeeId
        );
      }
      return null;
    });

    // METHODS
    const toggleDropdown = (): void => {
      isDropdownVisible.value = !isDropdownVisible.value;
    };
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        editEmployeeRef.value &&
        !editEmployeeRef.value.contains(event.target as Node)
      ) {
        isDropdownVisible.value = false;
      }
    };
    const editEmloyee = () => {
      employeeStore.selectedEmployee = selectedEmployee.value;
      isDropdownVisible.value = false;
      UIStore.setShowAddPopup(true);

    };
    const activateEmployee = async (): Promise<void> => {
      await employeeStore.toggleEmployeeStatus(props.employeeId);
      isDropdownVisible.value = false;
    };
    const deleteEmloyee = async (): Promise<void> => {
      await employeeStore.deleteEmployee(props.employeeId);
      isDropdownVisible.value = false;
    };

    // WATCHER
    watch(isDropdownVisible, (newValue) => {
      if (newValue) {
        document.addEventListener("click", handleClickOutside);
      } else {
        document.removeEventListener("click", handleClickOutside);
      }
    });

    // To clean up the event listener when the component is unmounted
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      isDropdownVisible,
      editEmployeeRef,
      activateText,
      toggleDropdown,
      editEmloyee,
      activateEmployee,
      deleteEmloyee,
    };
  },
});
