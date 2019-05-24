import NormalDistribution from 'normal-distribution';

export function generateRandomArray(size, callback) {
    return [...new Array(size)].map(callback);
}

export function generateNormalDistribution() {
    return new NormalDistribution(83, 7);
}