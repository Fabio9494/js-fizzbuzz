
for(let i=1;i<=100;i++){
    
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
        let div =document.createElement("div")
        div.innerHTML="FizzBuzz";
        document.getElementById("container").appendChild(div);
    }
    else if(i%3==0){
        console.log("Fizz");
        let div =document.createElement("div")
        div.innerHTML="Fizz";
        document.getElementById("container").appendChild(div);
    }

    else if(i%5==0){
        console.log("Buzz");
        let div = document.createElement("div")
        div.innerHTML="Buzz";
        document.getElementById("container").appendChild(div);
    }

    else{
        console.log(i);
        let div =document.createElement("div")
        div.innerHTML=i;
        document.getElementById("container").appendChild(div);
    } 
}
