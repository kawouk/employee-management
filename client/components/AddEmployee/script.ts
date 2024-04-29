import useUIStore from "~/stores/ui";
export default defineNuxtComponent({
  setup() {
    // STORES
    const UIStore = useUIStore();

    // STATES
    const notifications = ref(false);
    const sound = ref(true);
    const widgets = ref(false);
  
    // COMPUTED
    const showAddPopup = computed(() => {
      return UIStore.showAddPopup;
    });

    //METHODS
    const closeAddPopup = (): void => {
      UIStore.setShowAddPopup(false);
    };

    return {
      showAddPopup,
      notifications,
      sound,
      widgets,
      UIStore,
      closeAddPopup,
    };
  },
});
