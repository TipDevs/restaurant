import "../styles/assets/home.css"
import { foodImages, foods, foodDescriptions, customerReviews } from "../index.js";
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
    foodInfoContainer.classList.add("food-box", "transition");
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
  
      // After 2s, fade out and move to next
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

function getReview() {
    const review = customerReviews.map(reviewObj => {
        return reviewObj;
    });
    return review;
}
  
function loadCustomerReviews() {
  const reviews = getReview();
  let currentIndex = 0;

  // Create review container elements
  const reviewer = document.createElement('h2');
  const customerReview = document.createElement('p');
  const reviewRate = document.createElement('em');
  const reviewDate = document.createElement('strong');

  const reviewLoadingBox = document.createElement('div');
  reviewLoadingBox.classList.add('review_loader');

  reviewLoadingBox.appendChild(reviewer);
  reviewLoadingBox.appendChild(customerReview);
  reviewLoadingBox.appendChild(reviewRate);
  reviewLoadingBox.appendChild(reviewDate);

  function showNextReview() {
    const reviewItem = reviews[currentIndex];

    reviewer.textContent = reviewItem.name;
    customerReview.textContent = reviewItem.review;
    reviewRate.textContent = `⭐ ${reviewItem.rating}`;
    reviewDate.textContent = reviewItem.date;

    reviewLoadingBox.classList.add('show');

    setTimeout(() => {
      reviewLoadingBox.classList.remove('show');
      reviewLoadingBox.classList.add('hide');

      setTimeout(() => {
        reviewLoadingBox.classList.remove('hide');
        currentIndex = (currentIndex + 1) % reviews.length;
        showNextReview();
      }, 600); // match your CSS transition
    }, 4000);
  }

  showNextReview();

  return reviewLoadingBox;
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
    const reviewInfo = loadCustomerReviews();
    let section2 = document.createElement('section');
    section2.classList.add('review_section');
    let reviewBox = document.createElement('div');
  reviewBox.classList.add('review_box');
  reviewBox.appendChild(loadCustomerReviews());
    section2.appendChild(reviewBox);
    main.appendChild(section2);  
}