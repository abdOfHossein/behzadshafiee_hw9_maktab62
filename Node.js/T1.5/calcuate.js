
let calculate={
    sum:function(num1,num2){
        let sum=num1+num2;
        return(sum)
    },
    minuse:function(num1,num2){

        let minuse=num1-num2;

        return(minuse)
    },
    division:function(num1,num2){

        let division=num1/num2;

        return(division);
    },
    zarb:function(num1,num2){
        let zarb=num1*num2;
        return(zarb)
    }
}
module.exports = calculate;