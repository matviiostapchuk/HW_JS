var rndboss = Math.random();
    rndboss *= 100000;
    rndboss = Math.floor(rndboss)+1;
    console.log("к-сть згенерованих чисел: " + +rndboss)
function random50_50(number){
    var evenNumbers=0, oddNumbers=0, Percentage_of_even=0, Percentage_of_odd=0
    for(let i=0;i<number;i++){
        var changeNumber = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
        if(changeNumber>99){
            if(changeNumber%2 ==0){
                evenNumbers++
            }
            if(changeNumber%2 ==1){
                oddNumbers ++
            }
        }else{
            i--
        }
    }
    Percentage_of_even = evenNumbers/rndboss*100
    Percentage_of_odd = oddNumbers/rndboss*100
    console.log("Результат:\nПарні числа: " + +evenNumbers +"\nНепарні числа: "+ +oddNumbers)
    console.log("Відсоток парних до не парних: "+ +Percentage_of_even.toFixed(2)+"% "+ +Percentage_of_odd.toFixed(2)+"%")
}
random50_50(rndboss)
