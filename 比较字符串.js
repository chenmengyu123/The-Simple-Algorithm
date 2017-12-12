//如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。
function mutation(arr) {
    // 请把你的代码写在这里
    let a=arr[0].toLowerCase();
    let b=arr[1].toLowerCase();

    for(let i=0;i<b.length;i++){
        if(a.indexOf(b[i])<0){
            return console.log(false);
        }
    }
    return console.log(true);

}

mutation(["hello", "hey"]);
