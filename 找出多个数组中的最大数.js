function largestOfFour(arr) {
    // 请把你的代码写在这里
    let arry='';
    let newArry=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arry==null||arr[i][j]>arry){
                arry=arr[i][j];
            }
        }
        newArry.push(arry);
        arry=null;
    }
    return console.log(newArry);
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
