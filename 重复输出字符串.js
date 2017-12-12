//方法一
function repeat(str, num) {
    let i=0;
    let newStr='';

    while (i<num){
        for(let j=0;j<str.length;j++){
            newStr+=str[j];
            console.log(newStr);
        }
        i++;
    }
    return newStr;
}
repeat("abc", 3);
//方法二
function repeat(str, num) {
    return num > 0 ? str.repeat(num) : "";
}
repeat("abc", 3);