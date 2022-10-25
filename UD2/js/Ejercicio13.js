console.log("a");
function bisiesto(a){
    if(a%4==0){
        if(a%10==0){
            if(a%400==0){
                console.log("1");
            }
            else{
                console.log("0");
            }

        }
        else{
            console.log("1");
        }
    }
    else{
        console.log("0");
    }

}