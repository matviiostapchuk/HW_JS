
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var re = /[a-zA-Z]+\.?[a-zA-Z]*(@gmail|@yahoo).com/; 
function getInfo(){
    for(let j=0;j<3;j++){
        for (let key in arr[j]){
            if(key=="email"&(re.test(arr[j][key]))){
                console.log(arr[j][key]);
            }
        }
    }
}
getInfo()


