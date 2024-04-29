import { defineStore } from "pinia";

const useUIStore = defineStore("ui", {
  state: () => ({
    showAddPopup: false,
    loading: true,
    resultsCount: 0,
  }),
  actions: {
    setShowAddPopup(value: boolean): void {
      this.showAddPopup = value;
    },
    startLoading(): void {
      this.loading = true;
    },
    stopLoading(): void {
      this.loading = false;
    },
  },
});
export default useUIStore;
