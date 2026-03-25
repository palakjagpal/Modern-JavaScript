let arr=[10,10,20,30,30,40,50,60,60];
let count =0;
let newarr = [];

console.log("arr : ",arr)

for(let i=0; i<arr.length;i++){
    let dup=false;
    for(let j=0; j<count;j++){
        if(arr[i]=== newarr[j]){
            dup=true;
            break;
        }
    }
    if(!dup){
        newarr[count]=arr[i];
        count++;
    }
}

console.log("newarr : ",newarr);