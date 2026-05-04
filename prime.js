function isprime(num){
    if (num<=1){
        return "Not a prime number"
    }
    for(let i=2;i<num;i++){
        if(num%2==0){
            return "Not a prime number"
        }
    }
    return "prime";
}
let num=9;
console.log(isprime(num))
