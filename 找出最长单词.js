function findLongestWord(str) {
    // 请把你的代码写在这里
    str=str.split(' ');
    let result=str[0];
    for(let i=0;i<str.length;i++){
        if(result.length<str[i].length){
            result=str[i];
        }
    }
    return console.log(result);
}
findLongestWord("The quick brown fox jumped over the lazy dog");