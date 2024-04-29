import { defineStore } from "pinia";
import type { IEmployee } from "@/types";
import { Employees } from "@/api/Resources/Employees";
import useUIStore from "./ui";

const useEmployeeStore = defineStore("employee", {
  state: () => ({
    employees: [] as IEmployee[],
    selectedEmployee: null as IEmployee | null,
    employeeCount: 0,
    employeeActiveCount: 0,
    employeeNotActiveCount: 0,
    filter: {
      active: undefined as boolean | undefined,
      gender: "",
      nat: "",
    },
    searchValue: "",
  }),
  getters: {
    filteredEmployees(state) {
      const lowerSearchValue = state.searchValue.toLowerCase();
      const filter = state.filter;
      const filterHasValues =
        filter.active !== undefined ||
        filter.gender !== "" ||
        filter.nat !== "";
      if (this.searchValue !== "" || filterHasValues) {
        return state.employees.filter((employee) => {
          const lowerFirstName = employee.name.first.toLowerCase();
          const lowerLastName = employee.name.last.toLowerCase();
          const lowerId = employee.id.toString().toLowerCase();
          const lowerNat = employee.nat.toLowerCase();
          const lowerPhone = employee.phone.toLowerCase();

          const matchesSearch =
            lowerFirstName.includes(lowerSearchValue) ||
            lowerLastName.includes(lowerSearchValue) ||
            lowerId.includes(lowerSearchValue) ||
            lowerNat.includes(lowerSearchValue)||
            lowerPhone.includes(lowerSearchValue);

          const matchesFilter =
            (filter.active === undefined ||
              employee.active === filter.active) &&
            (filter.gender === "" || employee.gender === filter.gender) &&
            (filter.nat === "" || lowerNat === filter.nat);
          return matchesFilter && matchesSearch;
        });
      } else {
        return state.employees;
      }
    },
  },
  actions: {
    async fetchEmployees(offset: number, limit: number): Promise<void> {
      try {
        const fetchedEmployees = await Employees.getEmployees(offset, limit);
        this.setEmployees(fetchedEmployees);
        useUIStore().resultsCount = this.filteredEmployees.length;
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    },
    async getAllEmployees(): Promise<void> {
      try {
        const fetchedEmployees = await Employees.getAllEmployeesCount();
        this.setEmployees(fetchedEmployees);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    },
    async getEmployeeCount(): Promise<void> {
      try {
        const fetchedEmployees = await Employees.getAllEmployeesCount();
        this.setEmployeesCount(fetchedEmployees.length);
        this.setActiveEmployeesCount(
          fetchedEmployees.filter((employee) => employee.active).length
        );
        this.setNotActiveEmployeeCount(
          fetchedEmployees.filter((employee) => !employee.active).length
        );
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    },

    async createEmployee(name: string, position: string, isActive = true) {
      try {
        const createdEmployee = await Employees.createEmployee({
          name,
          position,
          isActive,
        });
        this.setEmployees([...this.employees, createdEmployee]);
      } catch (error) {
        console.error("Error creating employee:", error);
      }
    },

    async updateEmployee(
      id: number | string,
      updatedEmployee: Partial<IEmployee>
    ) {
      try {
        await Employees.updateEmployee(id, updatedEmployee);
        const employeeIndex = this.employees.findIndex(
          (employee) => employee.id === id
        );
        if (employeeIndex !== -1) {
          this.updateEmployeeInEmployees(updatedEmployee, employeeIndex);
          this.setEmployees([...this.employees]);
        }
      } catch (error) {
        console.error("Error updating employee:", error);
      }
    },

    async deleteEmployee(id: number | string) {
      try {
        await Employees.deleteEmployee(id);
        const employeeIndex = this.employees.findIndex(
          (employee) => employee.id === id
        );
        if (employeeIndex !== -1) {
          this.removeEmployee(employeeIndex);
          this.setEmployees([...this.employees]);
        }
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    },

    async toggleEmployeeStatus(id: number | string) {
      const getEmployee = (id: number | string) =>
        this.employees.find((employee) => employee.id == id);
      const employee = getEmployee(id);

      if (employee) {
        try {
          await Employees.updateEmployeeStatus(id, {
            isActive: !employee.active,
          });
          this.toggleActive(employee);
        } catch (error) {
          console.error("Error toggling employee status:", error);
        }
      }
    },

    setFilter(newFilter: any) {
      this.filter = newFilter;
    },

    setSearchValue(newValue: string) {
      this.searchValue = newValue;
    },

    setSelectedEmployee(employee: IEmployee | null) {
      this.selectedEmployee = employee;
    },

    setEmployees(employees: IEmployee[]) {
      this.employees = employees;
    },

    removeEmployee(employeeIndex: number) {
      this.employees.splice(employeeIndex, 1);
    },

    updateEmployeeInEmployees(
      updatedEmployee: Partial<IEmployee>,
      employeeIndex: number
    ) {
      this.employees[employeeIndex] = {
        ...this.employees[employeeIndex],
        ...updatedEmployee,
      };
    },

    toggleActive(employee: IEmployee) {
      employee.active = !employee.active;
    },
    setEmployeesCount(count: number): void {
      this.employeeCount = count;
    },
    setActiveEmployeesCount(count: number): void {
      this.employeeActiveCount = count;
    },
    setNotActiveEmployeeCount(count: number): void {
      this.employeeNotActiveCount = count;
    },
  },
});
export default useEmployeeStore;
