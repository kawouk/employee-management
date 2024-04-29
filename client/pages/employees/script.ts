import useEmployeeStore from "~/stores/employees";
import useUIStore from "~/stores/ui";
import { getLastPage } from "~/lib/utils";
export default defineNuxtComponent({
  setup() {
    // ROUTING
    const route = useRoute();
    const router = useRouter();

    // STORES
    const employeeStore = useEmployeeStore();
    const UIStore = useUIStore();

    // STATES
    const offset = ref(0);
    const limit = ref(5);
    const page = ref(1);

    // COMPUTED
    const loading = computed((): boolean => {
      return UIStore.loading;
    });
    const noQuery = computed((): boolean => {
      return (
        !route.query.search &&
        !route.query.gender &&
        !route.query.active &&
        !route.query.nat
      );
    });
    const showPagination = computed((): boolean => {
      return (
        (UIStore.resultsCount >= 5 ||
          offset.value ===
            getLastPage(
              employeeStore.employeeCount,
              limit.value,
              page.value
            )) &&
        noQuery.value
      );
    });
    const filter = computed((): any => {
      return route.query.gender || route.query.active || route.query.nat;
    });

    // METHODS
    const fetchEmployees = async (): Promise<void> => {
      UIStore.startLoading();
      if (!noQuery.value) {
        offset.value = 0;
        limit.value = 0;
      } else {
        limit.value = 5;
      }
      if (page.value > employeeStore.employeeCount) {
        await employeeStore.getEmployeeCount();
        offset.value = getLastPage(
          employeeStore.employeeCount,
          limit.value,
          page.value
        );
      } else if (page.value <= 1) {
        offset.value = 0;
      } else {
        offset.value = (page.value - 1) * limit.value;
      }

      await employeeStore.fetchEmployees(offset.value, limit.value);
      UIStore.stopLoading();
    };

    const updatePage = (): void => {
      router.push({
        query: {
          ...route.query,
          p: page.value,
        },
      });
    };
    const checkSearch = (): void => {
      if (route.query.search) {
        employeeStore.searchValue = route.query.search.toString();
      }
    };
    const checkFilter = (): void => {
      if (route.query.gender) {
        employeeStore.filter.gender = route.query.gender.toString();
      }
      if (route.query.active) {
        const active = route.query.active.toString() === "true";
        employeeStore.filter.active = active;
      }
      if (route.query.nat) {
        employeeStore.filter.nat = route.query.nat.toString();
      }
    };

    // MOUNTED
    onMounted(async () => {
      checkSearch();
      checkFilter();
      page.value = !route.query.p ? 1 : parseInt(route.query.p.toString());
      await fetchEmployees();
    });

    // WATCHER
    watch(page, async (_newPage, _oldPage) => {
      await fetchEmployees();
    });
    watch(filter, async (_newFilter, _oldFilter) => {
      await fetchEmployees();
    });

    return {
      employees,
      loading,
      showPagination,
      page,
      updatePage,
    };
  },
});
