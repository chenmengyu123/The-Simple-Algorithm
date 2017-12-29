function destroyer(arr,b) {
    // 请把你的代码写在这里/

    let args=arguments;

    for(let i=1;i<args.length;i++) {
        //因为filter不会改变原数组，所以要重新赋值给arr
        arr=arr.filter(function (item) {
            return item!==args[i];
        })
    }
    //console.log(arguments);
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
