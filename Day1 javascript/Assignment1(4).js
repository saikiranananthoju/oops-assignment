let first = -1 , second = -1;
let arr = [50,66,1,99,33,2,4,]

for(let i = 0; i <= arr.length-1; i++){
    if(arr[i] > first){
        second = first;
        first = arr[i];
    }
    else if( arr[i] > second && arr[i] != first){
        second = arr[i];
    }
}
console.log(first);
console.log(second);