import type { IEmployee } from "@/types";

// STATES
export const titleOptions = ref<string[]>(["Mr", "Mrs", "Ms"]);
export const genderOptions = ref<string[]>(["Male", "Female"]);
export const stateOptions = ref<string[]>([]);
export const countryOptions = ref<string[]>([
  "Lebanon",
  "UAE",
  "Saudi Arabia",
  "Kuwait",
  "Bahrain",
  "Oman",
]);
export const natOptions = ref<string[]>([
  "LEB",
  "UAE",
  "KSA",
  "KU",
  "Bahrainian",
  "OM",
]);
export const showDatePicker = ref(false);
export const employee = ref<any>({
  gender: "",
  name: {
    title: "",
    first: "",
    last: "",
  },
  location: {
    street: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
  },
  email: "",
  dob: {
    date: "",
    age: 0,
  },
  nat: "",
  phone: "",
});
