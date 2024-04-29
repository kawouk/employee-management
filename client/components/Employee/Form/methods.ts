import type { IEmployee } from "~/types";

export const updateStateOptions = (employee: IEmployee, stateOptions: any) => {
  switch (employee.location.country) {
    case "Lebanon":
      stateOptions.value = ["State 1", "State 2", "State 3"];
      break;
    case "UAE":
      stateOptions.value = ["State A", "State B", "State C"];
      break;
    case "Saudi Arabia":
      stateOptions.value = ["State X", "State Y", "State Z"];
      break;
    case "Kuwait":
      stateOptions.value = ["State K1", "State K2", "State K3"];
      break;
    case "Bahrain":
      stateOptions.value = ["State B1", "State B2", "State B3"];
      break;
    case "Oman":
      stateOptions.value = ["State O1", "State O2", "State O3"];
      break;
    default:
      stateOptions.value = [];
      break;
  }
};
