let start=1;
let end=1;
for(let i=0;i<100;i++){
   let sum=start+end; 
    start=end;
    end=sum;
    if(sum%5==0){
        document.write("so dau tien chia het cho 5 la: "+sum);
        break;
    }
}