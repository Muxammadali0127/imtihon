
let ekub=(a,b)=>{
    for(i=Math.min(a,b);i>2;i--){
        if(a%i==0 && b%i==0){
            return i;
        }
    }
    return 1;
}

console.log(ekub(12,15));
