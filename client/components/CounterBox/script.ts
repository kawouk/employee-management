export default defineNuxtComponent({
  props: {
    number: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    color:{
      type: String,
      default: "#666666",
    }
  },
  setup(props) {
    const displayNumber = ref(0);
    const boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

    const animateCounter = () => {
      const step = Math.ceil(props.number / 1000); // Divide the number into 50 steps
      let currentNumber = 0;

      const interval = setInterval(() => {
        currentNumber += step;
        if (currentNumber >= props.number) {
          currentNumber = props.number;
          clearInterval(interval);
        }
        displayNumber.value = currentNumber;
      }, 50);
    };

    onMounted(animateCounter);

    return { displayNumber, boxShadow ,props};
  },
});
