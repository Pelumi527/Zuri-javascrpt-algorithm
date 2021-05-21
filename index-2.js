function checkYuGiOh(n){
    let arr = []; // creating an empty array
        if(typeof(n) === "string"){ 
            console.log("invalid parameter:", JSON.stringify(n)) // if the input is a string output this
        }else {
            for (let i=1; i<=Number(n); i++){ // creating a loop to create an array
                if(i%2==0 && i%3==0 && i%5==0){ 
                    let i = "yu-gi-oh"
                    arr.push(i)                
                }else if(i%2==0 && i%3==0){    
                    let i = "yu-gi"
                    arr.push(i)
                }else if(i%2==0 && i%5==0){
                    let i = "yu-oh"
                    arr.push(i)
                }else if (i%3==0 && i%5==0){
                    let i = "gi-oh"
                    arr.push(i)
                }else if(i%5==0){
                    let i = "oh"
                    arr.push(i)
                }else if (i%2==0){
                    let i = "yu"
                    arr.push(i)
                }else if(i%3==0){
                    let i="gi"
                    arr.push(i)
                }
                else{
                    arr.push(i)
                };                          // checking the factors of i and putting them into an array
            }       
            console.log(arr)           
        }
}

checkYuGiOh(30)