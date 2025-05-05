import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const getGradeFromScore = (score) => {
  if (score >= 90) return '탁월';
  if (score >= 80) return '우수';
  if (score >= 70) return '양호';
  if (score >= 60) return '보통';
  return '개선 필요';
};

const RadarChart = ({ ratings = [80, 90, 70, 85, 75] }) => {
  const data = {
    labels: ['구조적 복잡도', '코드 품질', '가독성', '유지보수성', '테스트 용이성'],
    datasets: [
      {
        label: '절대 평가 점수',
        data: ratings,
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        borderColor: 'rgb(46, 125, 50)',
        pointBackgroundColor: 'rgb(46, 125, 50)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(46, 125, 50)'
      }
    ]
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20
        },
        pointLabels: {
          font: {
            size: 14,
            family: "'Noto Sans KR', sans-serif"
          }
        },
        grid: {
          color: 'rgba(0,0,0,0.1)'
        },
        angleLines: {
          color: 'rgba(0,0,0,0.1)'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const score = context.raw;
            const grade = getGradeFromScore(score);
            return `${score}점 (${grade})`;
          }
        }
      }
    }
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
