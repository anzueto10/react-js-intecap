import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as chartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

chartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const [sales, setSales] = useState([]);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAddSale = () => {
    const newSale = {
      product,
      quantity: parseInt(quantity),
      price: parseFloat(price),
    };

    setSales([...sales, newSale]);
    setPrice("");
    setProduct("");
    setQuantity("");
  };
  const barData = {
    labels: sales.map((sale) => sale.product),
    datasets: [
      {
        label: "Ventas (Q)",
        data: sales.map((sale) => sale.price * sale.quantity),
      },
    ],
  };

  const pieData = {
    labels: sales.map((sale) => sale.product),
    datasets: [
      {
        label: "Ventas (Q)",
        data: sales.map((sale) => sale.price * sale.quantity),
        backgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,206,86,0.6)",
          "rgba(75,192,192,0.6)",
        ],
      },
    ],
  };
  return (
    <div>
      <h1>Detalles de la venta</h1>
      <div>
        <input
          type="text"
          placeholder="Producto"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleAddSale}>Agregar</button>
      </div>
      <h2>Tabla de Ventas</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.product}</td>
              <td>{sale.quantity}</td>
              <td>{sale.price}</td>
              <td>{sale.product * sale.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Gráfico de Barras</h2>
      <Bar data={barData} />
      <h2>Gráfico de Pie</h2>
      <Pie data={pieData} />
    </div>
  );
};

export default SalesChart;
