let arr = [7854, 7980, 8569,8570,8571,8572,8573,8574,8575,8576,8577,8577];

arr.forEach((num)=>{
    // console.log(num);
    let numString = num.toString();
    // console.log(numString);
    let total = 0;
    for (let index = 0; index < numString.length; index++) {
        
        total = total + eval(numString[index]);
        // console.log(numString)
        // return total
        
    }

    console.log(`${num}'s total is ${total}`)
    

})


console.log("here");

let arr2=[];

for (let i = 8577; i <= 9999; i++) {
     let b = i.toString();
    //  console.log(b);
    let total = 0;
    for (let index = 0; index < b.length; index++) {
        total = total + eval(b[index]);
        
    }

    if(total == 21){
      arr2.push(i);
    }


}
   
    console.log(arr2);