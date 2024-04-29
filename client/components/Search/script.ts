import useEmployeeStore from "~/stores/employees";
import useUIStore from "~/stores/ui";

export default defineNuxtComponent({
  setup(props, ctx) {
    // ROUTING
    const router = useRouter();
    const route = useRoute();

    // STORES
    const employeeStore = useEmployeeStore();
    const UIStore = useUIStore();

    // STATES
    const searchText = ref("");
    const page = ref(1);

    // METHODS
    const search = async (): Promise<void> => {
      UIStore.startLoading();
      if (searchText.value === "") {
        const { search, ...queryWithoutSearch } = route.query;
        router.push({
          query: queryWithoutSearch,
        });
        if (route.query.p) {
          page.value = parseInt(route.query.p.toString());
        }
        UIStore.startLoading();
        employeeStore.searchValue = searchText.value;
        await employeeStore.fetchEmployees((page.value - 1) * 5, 5);
        UIStore.stopLoading();
        return;
      }
      router.push({
        query: { ...route.query, search: searchText.value },
      });
      await employeeStore.getAllEmployees();
      employeeStore.searchValue = searchText.value;
      UIStore.resultsCount = employeeStore.filteredEmployees.length;
      UIStore.stopLoading();
    };
    onMounted(() => {
      searchText.value = employeeStore.searchValue;
    });
    return {
      searchText,
      search,
    };
  },
});
