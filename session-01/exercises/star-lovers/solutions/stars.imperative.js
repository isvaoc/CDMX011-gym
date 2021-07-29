export const printStar = (numero) => {
    let string="";
    if (numero == 0){
        string="";
    } else{
        for (let i=1; i<=numero; i++){
            string= string +"*"
        }
    }
    return string
};

export const printArrayStar = (numero) => {
    let stringList=[]
    if (numero == 0){
        stringList=[]
    } else{
        let string=""
        for (let i=1; i<=numero; i++){
            string= string +"*"
            stringList.push(string)
        }
    }
    return stringList
};
