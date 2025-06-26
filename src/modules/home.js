import "../styles/assets/home.css"
import { foodImages, foods, foodDescriptions } from "../index.js";
function foodInfo() {
    const foodItems = foods.map((food, index) => {
        return {
          name: food,
          image: foodImages[index],
          description: foodDescriptions[index]
        };
      });
    return foodItems; 
}

function createFoodBoxUI() {
    const foodItems = foodInfo();
    
    // Container for the rotating box
    const foodBoxesContainer = document.createElement('div');
    foodBoxesContainer.classList.add("food-box-container");
  
    const foodInfoContainer = document.createElement('div');
    foodInfoContainer.classList.add("food-box");
    foodBoxesContainer.appendChild(foodInfoContainer);
  
    let currentIndex = 0;
  
    function showNextFood() {
        const item = foodItems[currentIndex];
        const foodDescription = document.createElement('div');
        foodDescription.classList.add('food_description');
        const foodImage = document.createElement('img');
        foodImage.src = item.image;
        foodImage.alt = item.name;
        let heroCTA = document.createElement('button');
        heroCTA.textContent = 'Explore more';
  
        // Update content
        foodDescription.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            `;
        foodDescription.appendChild(heroCTA);
        foodInfoContainer.appendChild(foodDescription);
        foodInfoContainer.appendChild(foodImage);
  
      // Fade in
      foodInfoContainer.classList.add("show");
  
      // After 2.5s, fade out and move to next
      setTimeout(() => {
        foodInfoContainer.classList.remove("show");
          foodInfoContainer.classList.add("hide");
          foodInfoContainer.removeChild(foodDescription);
          foodInfoContainer.removeChild(foodImage);
  
        setTimeout(() => {
          foodInfoContainer.classList.remove("hide");
          currentIndex = (currentIndex + 1) % foodItems.length;
          showNextFood();
        }, 200); // match your CSS transition duration
      }, 4000); // duration each box stays visible
    }
  
    showNextFood();
  
    return foodBoxesContainer;
  }
  
export function homeUI() {
    let main = document.querySelector('main');

    //section 1 of the home page
    let section1 = document.createElement('section');
    section1.classList.add('hero_section');
    main.appendChild(section1);
    let hero_box = document.createElement('div');
    hero_box.classList.add('hero_box');
    section1.appendChild(hero_box);
    hero_box.appendChild(createFoodBoxUI());

    
    //section 2 of the home page
    let section2 = document.createElement('section');
    section2.classList.add('review_section');
    let reviewBox = document.createElement('div');
    reviewBox.classList.add('review_box');
    section2.appendChild(reviewBox);
    main.appendChild(section2);
    
}