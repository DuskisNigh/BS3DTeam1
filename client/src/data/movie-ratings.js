import { generateRandomArray } from '../utils/generate-array';

export default {
    labels: ['Ratings'],
    datasets: [
        {
            label: 'Movie Ratings',
            fill: false,
            backgroundColor: '#000',
            pointBorderColor: '#000',
            pointBackgroundColor: '#000',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#000',
            pointHoverBorderColor: '#000',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: generateRandomArray(500, _ => ({ x: Math.random(), y: Math.random()}))
        }
    ]
};