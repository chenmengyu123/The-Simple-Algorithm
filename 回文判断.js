function palindrome(str) {
    // 请把你的代码写在这里
    var reg=/\W|\s|_/gi;
    str=str.replace(reg,'').toLowerCase();
    var newStr=stry.split('').reverse().join('');
    return console.log(newStr==stry,stry);
}



palindrome("\"0_0 (: /-\\ :) 0-0\"");