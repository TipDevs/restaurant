import "../styles/assets/menu.css";
export function menuUI() {
    let menu_main = document.querySelector('main');
    let latestFood = '';
    const foodMenu = [
        {
            name: "Jollof Rice & Chicken",
            price: "₦3,500",
            picture: ""
        },
        {
            name: "Amala, Efo Riro & Beef",
            price: "₦2,800",
            picture: ""
        },
        {
            name: "Jollof Rice & Beef",
            price: "₦3,000",
            picture: ""
        },
        {
            name: "Fried Rice, Jollof Rice & Chicken",
            price: "₦3,500",
            picture: ""
        },
        {
            name: "Alfredo Pasta",
            price: "₦12,000",
            picture: ""
        },
        {
            name: "Asun Pasta",
            price: "₦13,500",
            picture: ""
        },
        {
            name: "BBQ & 5alive",
            price: "₦35,000",
            picture: ""
        },
    ]
    function foodMap() {
        foodMenu.map((food) => {
            latestFood = new Foods(food.name, food.price, food.picture);
            latestFood.foodInstanceDisplay()
            console.log(latestFood);
        })
    }
    class Foods {
        constructor(name, price, picture) {
            this.name = name;
            this.price = price;
            this.picture = picture;
        }
        foodInstanceDisplay() {
            let food_card = document.createElement('div');
            food_card.classList.add('food_card');
            let foodToOrder = document.createElement('div');
            let food_name = document.createElement('h2');
            food_name.textContent = `${this.name}`;
            foodToOrder.appendChild(food_name);
            let food_price = document.createElement('p');
            food_price.textContent = `${this.price}`;
            foodToOrder.appendChild(food_price);
            food_card.appendChild(foodToOrder);
            let food_picture = document.createElement('div');
            food_picture.classList.add('food_picture');
            food_card.appendChild(food_picture);
            let orderBtn = document.createElement('button');
            orderBtn.classList.add('orderBtn')
            orderBtn.textContent = 'Order Now';
            foodToOrder.appendChild(orderBtn);
            menu_main.appendChild(food_card);
            menu_main.classList.add('menu_main');
        }
    }
    foodMap();
}