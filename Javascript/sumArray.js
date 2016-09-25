function sumArray(arr){
    arr[1]  = arr[0] + arr[1];
    if (arr.length > 0) arr.splice(0,1);
    return (arr.length === 1) ? arr : sumArray(arr).toString();
}
console.log(sumArray([1,2,3,4,5,6]));
