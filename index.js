 function convertFahrToCelsius(f){
     if ( Number(f)) {      // if it it is a number run the function 
        let C = (f -32)*5/9
        console.log(C.toFixed(4))  // format to 4 decimal place
    } else if (Array.isArray(f)){   
        console.log(JSON.stringify(f),"is not a valid number but a/an array.") // if it is an array output this
   } else if(typeof(f) === "object"){
       console.log(JSON.stringify(f),"is not a valid number but a/an object.") // if it is an object output this
    } else if (typeof (f) === "string"){
        console.log(JSON.stringify(f),"is not a valid number but a string.") // if it is an string output this
    }     else{
         console.log(JSON.stringify(f), "undefined")
    }
};

convertFahrToCelsius();
