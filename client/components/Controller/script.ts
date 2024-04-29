import useUIStore from "~/stores/ui";

export default defineNuxtComponent({
  setup(props, ctx) {
    // STORES
    const UIStore = useUIStore();

    // METHODS
    const showAddPopup = (): void => {
      UIStore.setShowAddPopup(true);
    };
    return {
      showAddPopup,
    };
  },
});
