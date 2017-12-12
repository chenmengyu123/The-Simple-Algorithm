function slasher(arr, howMany) {
    // 请把你的代码写在这里
    arr.splice(0,howMany);
    return arr;
}

slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
