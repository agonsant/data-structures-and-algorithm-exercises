const generateData = () => {
    const arr=[];
    let currentSize = 10;
    for (let i = 0; i < 15; i++) {
        const data = [];
        for(let j =0; j<currentSize; j++){
            data.push(Math.floor(Math.random() * 10000) + 1 );
        }
        arr.push(data);
        currentSize= Math.round(currentSize*2.5);
    }

    return arr;
}

const benchmarkSort = arr => {
    console.time('benchmarkSort');
    const finalArr = arr.sort((a,b) => a-b);
    console.timeEnd('benchmarkSort');
    return finalArr;
}

const sizes = generateData();
//console.log(sizes);
sizes.forEach(size => benchmarkSort(size));
