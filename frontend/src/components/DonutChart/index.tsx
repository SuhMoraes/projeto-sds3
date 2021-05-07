import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

//Definindo um tipo(array string[], array number[])
type ChartData = {
  labels: string[];
  series: number[];
}

const DonutChart = () => {

  // Estado renderizado pelo useState
  const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

  useEffect(() => {
    // Requisição assíncrona
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
      // Pegando os dados
      .then(response => {
        const data = response.data as SaleSum[];
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => x.sum);

        // Atribuindo os dados as variaveis
        setChartData({ labels: myLabels, series: mySeries });
      });
  }, []);

  /* Condição*/
  //  const mockData = {
  //    series: [477138, 499928, 444867, 220426, 473088],
  //    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
 

  const options = {
    legend: {
      show: true
    }
  }

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"

    />

  );
}

export default DonutChart;