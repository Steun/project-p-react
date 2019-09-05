import React, { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import usePostVisitService from '../../services/usePostVisitService';

import { Visit } from '../../types/Visit';

const Visits: FC<{}> = () => {
  const service = usePostVisitService();
  const chartData = {
    datasets: [
      {
        label: '# Visits',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
    labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'],
    series: [
      'Deze week',
      'Vorige week',
      '3 weken geleden',
      '4 weken geleden',
      '5 weken geleden',
      '6 weken geleden',
      '7 weken geleden',
      '8 weken geleden',
      '9 weken geleden',
      '10 weken geleden',
    ],
  };

  function getNumberOfWeek(date: Date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear: number =
      (date.valueOf() - firstDayOfYear.valueOf()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  function fillChart(visits: Visit[]) {
    const newData = chartData.datasets[0].data;
    const currentWeek = getNumberOfWeek(new Date());

    visits.forEach(visit => {
      const visitDay = new Date(visit.start_time).getDay();
      const visitWeek = getNumberOfWeek(new Date(visit.start_time));

      // if the visit is equal to current week, add to newData
      if (visitWeek === currentWeek) newData[visitDay - 1] += 1;
    });
    chartData.datasets[0].data = newData;
  }

  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' && fillChart(service.payload.data)}
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}

      <Bar
        data={chartData}
        height={350}
        options={{
          maintainAspectRatio: false,
          scales: { yAxes: [{ ticks: { stepSize: 1 } }] },
        }}
      />
    </div>
  );
};

export default Visits;
