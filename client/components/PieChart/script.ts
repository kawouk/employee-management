export default defineNuxtComponent({

  props: {
    activeEmployees: {
      type: Number,
      required: true,
    },
    totalEmployees: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const chart = ref(null);
    const series = ref([0, 100]);

    const chartOptions = {
      chart: {
        type: "pie",
        animations: {
          enabled: true,
          speed: 800,
        },
      },
      labels: ["Inactive Employees", "Active Employees"],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "70%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "Total",
                formatter: function (w:any) {
                  return `${Math.round(w.globals.seriesTotals[0])}%`;
                },
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    watch(
      () => props.activeEmployees,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          series.value = [100 - newValue, newValue];
        }
      }
    );



    return {
      chart,
      series,
      chartOptions,
    };
  },
});
