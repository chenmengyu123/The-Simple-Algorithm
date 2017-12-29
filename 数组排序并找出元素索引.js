function where(arr, num) {
    // 请把你的代码写在这里
    //push返回数组长度不能连缀写
    arr.push(num);
    //因为在 Unicode 指针顺序中"10"在"2"之前，所以要用function
    arr.sort(function (a,b) {
        return a-b;
    });
    console.log(arr);
    let index=arr.indexOf(num);
    return console.log(index);
}

where([2, 20, 10], 19);