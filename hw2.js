function pow(){
    let a = prompt("Ввести число");
    let b = prompt("Ввести степінь");
    let result =1
    if (b<0){
        for(let i=0;i<-b;i++){

            result /=a
        }
    }
    for(let i=0;i<b;i++){

        result *=a
    }
    console.log("Результат: " + +result);
}
pow()
