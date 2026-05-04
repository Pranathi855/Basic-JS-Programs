let num=528
let rev=0
for(;num>0;num=Math.floor(num/10))
    {
    rev=rev*10+num%10
}
console.log("Reverse:"+rev)