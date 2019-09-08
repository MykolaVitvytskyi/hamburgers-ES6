class Hamburger{
  constructor(size, stuffing){
    this.price = size.price + stuffing.price;
    this.calories = stuffing.calories + size.calories;
    this.topping = [];
  }
  
  static SIZE_SMALL = {price: 50, calories: 20};
  static SIZE_BIG = {price: 100, calories: 40};
  static STUFFING_CHEESE = {price: 10, calories: 20};
  static STUFFING_SALAD = {price: 20, calories: 5};
  static STUFFING_POTATO = {price: 15, calories: 10};
  static TOPPING_SAUCE = {price: 15, calories: 0};
  static TOPPING_MAYO = {price: 20, calories: 5};

  addTopping(item){  
    this.topping.push(item);
  };

  calcPrice(){
    return this.topping.reduce((prev, next) =>{    
      return prev + next.price;   
    },this.price);
  };

 calcCalories(){
    return this.topping.reduce((prev, next) =>{    
      return prev + next.calories;   
    },this.calories);
  }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories: " + hamburger.calcCalories());
console.log("Price: " + hamburger.calcPrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Calories with sauce: " + hamburger.calcCalories());
console.log("Price with sauce: " + hamburger.calcPrice());