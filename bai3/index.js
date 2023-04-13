let start=1;
let end=1;
document.write(start+" "+end+"\t");
for(let i=0;i<18;i++){
    let sum=start+end;
    document.write(sum+"\t");
    start=end;
    end=sum;
}