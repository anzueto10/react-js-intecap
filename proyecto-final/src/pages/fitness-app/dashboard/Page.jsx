import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { ActivitiesContext } from "../../../providers/ActivitiesProvider";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Page = () => {
  const { activities } = useContext(ActivitiesContext);
  const types = Array.from(new Set(activities.map((a) => a.type)));

  const timeSpentData = {
    labels: activities.map((a) => a.name),
    datasets: [
      {
        label: "Tiempo (minutos)",
        data: activities.map((a) => a.duration),
        fill: true,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4,
      },
    ],
  };

  const typeData = {
    labels: types,
    datasets: [
      {
        label: "Número de actividades",
        data: types.map(
          (type) => activities.filter((a) => a.type === type).length
        ),
        backgroundColor: [
          "#FF5733",
          "#33FF57",
          "#3357FF",
          "#FF33A6",
          "#A633FF",
        ],
      },
    ],
  };

  const caloriesBurnedData = {
    labels: activities.map((a) => a.name),
    datasets: [
      {
        label: "Calorías quemadas",
        data: activities.map((a) => a.calories),
        backgroundColor: "#FF6384",
        hoverBackgroundColor: "#FF637A",
      },
    ],
  };

  const activitiesByMonth = activities.reduce((acc, activity) => {
    const month = new Date(activity.date).getMonth();
    acc[month] = acc[month] ? acc[month] + 1 : 1;
    return acc;
  }, {});

  const monthLabels = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const activitiesByMonthData = {
    labels: monthLabels,
    datasets: [
      {
        label: "Número de actividades",
        data: monthLabels.map((_, index) => activitiesByMonth[index] || 0),
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Gráficos</h1>

      <section className="mb-5">
        <h2 className="mb-3">Actividades con más tiempo</h2>
        <div className="chart-container max-w-full mx-auto">
          <Line
            data={timeSpentData}
            options={{ responsive: true, maintainAspectRatio: true }}
          />
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Qué categoría tiene más actividades</h2>
        <div className="chart-container max-w-full mx-auto">
          <Bar
            data={typeData}
            options={{ responsive: true, maintainAspectRatio: true }}
          />
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Actividades que queman más calorías</h2>
        <div className="chart-container max-w-full mx-auto">
          <Pie
            data={caloriesBurnedData}
            options={{ responsive: true, maintainAspectRatio: true }}
          />
        </div>
      </section>

      <section>
        <h2>En qué mes se hacen más actividades</h2>
        <Bar data={activitiesByMonthData} />
      </section>
    </Container>
  );
};

export default Page;
