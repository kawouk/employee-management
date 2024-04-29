export default defineNuxtComponent({
  setup(props, ctx) {
    const drawer = ref<boolean>(true);
    const rail = ref<boolean>(true);
    return {
      drawer,
      rail,
    };
  },
});
