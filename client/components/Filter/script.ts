import useEmployeeStore from "~/stores/employees";
import type { IFilter, IGenderFilter } from "./type";

export default defineNuxtComponent({
  setup(props, ctx) {
    // ROUTING
    const route = useRoute();
    const router = useRouter();

    // STORES
    const employeeStore = useEmployeeStore();

    // STATES
    const filters = ref<IFilter[]>([
      "active",
      "not active",
      "gender",
      "nationality",
    ]);
    const genderFilterArr = ref<IGenderFilter[]>(["male", "female"]);
    const natFilterArr = ref(["india", "us", "uk"]);

    // METHODS
    const notNestedFilter = (filter: IFilter): boolean => {
      return filter === "not active" || filter === "active";
    };
    const genderFilter = (filter: IFilter): boolean => {
      return filter === "gender";
    };
    const natFilter = (filter: IFilter): boolean => {
      return filter === "nationality";
    };
    const filterActive = (filter: string): boolean => {
      if (filter === "active") {
        if (employeeStore.filter.active !== undefined) {
          return employeeStore.filter.active;
        } else {
          return false;
        }
      } else if (filter === "not active") {
        if (employeeStore.filter.active !== undefined) {
          return !employeeStore.filter.active;
        } else {
          return false;
        }
      } else if (filter === "male" || filter === "female") {
        return employeeStore.filter.gender === filter;
      } else if (filter === "uk" || filter === "us" || filter === "india") {
        return employeeStore.filter.nat === filter;
      } else {
        return false;
      }
    };
    const addFilter = (filter: IFilter): void => {
      let newQuery = { ...route.query };

      if (filter === "active") {
        const isActive = route.query.active === "true";

        if (isActive) {
          delete newQuery.active;
        } else {
          newQuery.active = "true";
        }
      } else if (filter === "not active") {
        const isActive = route.query.active === "false";

        if (isActive) {
          delete newQuery.active;
        } else {
          newQuery.active = "false";
        }
      } else {
        const filterParam = route.query.filter;
        if (!filterParam || filterParam !== filter) {
          newQuery.filter = filter;
        } else {
          delete newQuery.filter;
        }
      }
      if (newQuery.active === "true") {
        employeeStore.filter.active = true;
      } else if (newQuery.active === "false") {
        employeeStore.filter.active = false;
      } else {
        employeeStore.filter.active = undefined;
      }
      router.push({ query: newQuery });
    };

    const addGenderFilter = (gender: IGenderFilter): void => {
      const genderParam = route.query.gender;
      if (genderParam === gender) {
        const { gender: removedGender, ...queryWithoutGender } = route.query;
        router.push({ query: queryWithoutGender });
        employeeStore.filter.gender = "";
      } else {
        router.push({ query: { ...route.query, gender } });
        employeeStore.filter.gender = gender;
      }
    };
    const addNatFilter = (nat: string): void => {
      const natParam = route.query.nat;
      if (natParam === nat) {
        const { nat: removedNat, ...queryWithoutNat } = route.query;
        router.push({ query: queryWithoutNat });
        employeeStore.filter.nat = "";
      } else {
        router.push({ query: { ...route.query, nat } });
        employeeStore.filter.nat = nat;
      }
    };
    return {
      filters,
      genderFilterArr,
      natFilterArr,
      notNestedFilter,
      genderFilter,
      natFilter,
      addFilter,
      addGenderFilter,
      addNatFilter,
      filterActive,
    };
  },
});
