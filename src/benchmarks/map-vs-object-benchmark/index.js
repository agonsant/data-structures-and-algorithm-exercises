const benchmarkMap = size => {
    console.time('benchmarkMap');
    const map = new Map();
    for (let i = 0; i < size; i++) map.set(i, i);
    console.timeEnd('benchmarkMap');
}

const benchmarkObj = size => {
    console.time('benchmarkObj');
    const obj = {};
    for (let i = 0; i < size; i++) obj[i] = i;
    console.timeEnd('benchmarkObj');
}

const sizes = [10, 50, 100, 150, 250, 500, 750, 1000, 1200, 1250, 1500, 1750, 10000, 12250, 15000,
             17250, 20000, 40000, 60000, 85000, 100000,125000,150000,300000,500000,750000, 1000000];

sizes.forEach(size => benchmarkMap(size));
sizes.forEach(size => benchmarkObj(size));