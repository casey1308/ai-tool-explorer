import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartWrapper = styled.div`
  max-width: 600px;
  margin: 40px auto;
  background-color: ${({ theme }) => theme.cardBg};
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
`;

const CategoryChart = ({ tools }) => {
  if (!tools || tools.length === 0) return null;

  const categoryCounts = tools.reduce((acc, tool) => {
    acc[tool.category] = (acc[tool.category] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        label: '# of Tools',
        data: Object.values(categoryCounts),
        backgroundColor: '#6200ea',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { color: '#999' },
      },
      y: {
        ticks: { color: '#999' },
        beginAtZero: true,
      },
    },
  };

  return (
    <ChartWrapper>
      <h3>📊 Tools by Category</h3>
      <Bar data={data} options={options} />
    </ChartWrapper>
  );
};

export default CategoryChart;
