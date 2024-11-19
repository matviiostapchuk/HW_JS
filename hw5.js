var animal = {
    name: "tiger",
    speed: "70 kph",
    continent: "South America",
    getInfo(){
        for (let key in animal){
            console.log(key + ': ' + animal[key]);
        }
    }
}

animal.getInfo()
animal.color = "orange"
animal.getInfo()
