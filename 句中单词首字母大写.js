function titleCase(str) {
    // 请把你的代码写在这里
    let newStr=str.toLowerCase().split(' ');

    for(let i=0;i<newStr.length;i++){
        let val=newStr[i][0];
        newStr[i]=newStr[i].replace(val,function replace(val) {
            return val.toUpperCase();
        })
    }
    return newStr.join(' ');
}

titleCase("I'm a little tea pot");
