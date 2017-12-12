function confirmEnding(str, target) {
    let len=target.length;

    return console.log(str.substr(-len)==target);
}

confirmEnding("He has to give me a new name", "me");