class Food{
    constructor(){
        this.image = loadImage("Milk.png")
        var foodStock
        var lastFed
    }
    display(){
        imageMode(CENTER)
        image(this.image, 50, 250, 95, 95)

        if(this.foodStock !=0){
            for(var i=0; i<this.foodStock; i++){
                if(i%10 === 0){
                    x = 80
                    y=y+80
                }
                image(this.image, x, y, 50, 50)
            }
        }
    }
    getFoodStock(){
    var foodStockRef = database.ref('food')
    foodStockRef.on('value', function(data){
        foodStock = data.val()
    })
    }
    updateFoodStock(food){
     database.ref('/').update({
         Food: food
     })
    }
    deductFood(abc){

    database.ref('/').update({
        Food: abc
    })
    }
}