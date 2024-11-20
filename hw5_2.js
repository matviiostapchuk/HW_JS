var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price(){
        let total_cost =0
        for (let key in services){
            if(typeof this[key]!="function"){
                total_cost += parseFloat(this[key])
                // console.log(key + ': ');
                // console.log(parseFloat(this[key]))
            }
        }
        console.log("Загальна вартість наданих послуг: " + +total_cost)
    },
    minPrice(){
        let min_price = 2 ** 53 - 1
        for (let key in services){
            if(typeof this[key]!="function"){
                if(min_price > parseFloat(this[key])){
                    min_price = parseFloat(this[key])
                }
            }
        }
        console.log("Мінімальна ціна: " + +min_price)
    },
    maxPrice(){
        let max_price =0
        for (let key in services){
            if(typeof this[key]!="function"){
                if(max_price < parseFloat(this[key])){
                    max_price = parseFloat(this[key])
                }
            }
        }
        console.log("Максимальна ціна: "+ +max_price)
    }
};
services.price()
services.minPrice()
services.maxPrice()    
    
services['Розбити скло'] = "200 грн";
services['Помити підлогу'] = "25 грн";

services.price()
services.minPrice()
services.maxPrice() 


    