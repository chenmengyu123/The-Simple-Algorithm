function chunk(arr, size) {
    // 请把你的代码写在这里
    let arr1=[];
    for(let i=0;i<arr.length;i=i+size){
        arr1.push(arr.slice(i,i+size));
    }
    return arr1;
}

chunk(["a", "b", "c", "d"], 2);

