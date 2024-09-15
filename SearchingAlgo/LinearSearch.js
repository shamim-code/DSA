
function linearSearch(Arr, searchValue){

    for( let i = 0; i < Arr.length; i++){
        if(Arr[i] === searchValue){
            return console.log("Found !");
        }else{
            return console.log("Not found !");
        }
    }
    
}


const Arr = [1,5,2,7,4,10,16,18,9,44,3];
const searchValue = 10;

console.log(linearSearch(Arr, searchValue));