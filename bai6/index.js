let count=0;
let sum=0;
for(let i=1;i<1000;i++){
    if(count<30){
        if(i%7==0){
            sum+=i;
            count++;
        }
    }
}
document.write(sum);