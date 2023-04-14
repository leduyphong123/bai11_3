let value;
let start=1;
let end=1;
let sum=[start,end];
let result=0;
for(let i=0;i<20;i++){
    value=start+end;
    sum.push(start+end);
    start=end;
    end=value;
}
for(let i=0;i<sum.length;i++){
    result+=sum[i];
}
document.write(result);