function rot13(str) {
    let b = '';
    let reg = /[A-Z]/;
    for (let i = 0; i < str.length; i++) {
        if (reg.test(str[i])) {
            let a = str.charCodeAt(i) + 13;
            if (a >= 91) {
                b += String.fromCharCode(a - 26);
            } else {
                b += String.fromCharCode(a);
            }
        }else{
            b+=str[i];
        }
    }
    return b;
}

rot13("SERR CVMMN!");