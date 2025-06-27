import "./styles/static.css";
import jollofRice from "./assets/images/jollof_rice.webp";
import alfredoPasta from "./assets/images/asun_pasta.webp";
import seaFoodRice from "./assets/images/seafood_rice.webp";
import efoRiro from "./assets/images/efo_riro.webp";
import catFishPepperSoup from "./assets/images/cat_fish_pepper_soup.webp";
import {homeUI} from "./modules/home.js"
const foodImages = [jollofRice, seaFoodRice, alfredoPasta, efoRiro, catFishPepperSoup];
const foods = ["Jollof Rice", "Seafood Rice", "Alfredo Pasta", "Efo Riro", "Cat Fish Pepper Soup"];

const foodDescriptions = [
  "A West African classic bursting with rich, smoky, and slightly spicy tomato flavors. Every spoonful is a blend of savory rice cooked in a seasoned tomato stew, with hints of thyme, bay leaves, and curry powder. Expect bold flavors, tender grains, and an irresistible aroma that'll make you crave seconds.",
  
  "A flavorful fusion of rice simmered in a seafood-infused broth, packed with prawns, calamari, mussels, and sometimes fish fillets. The rice absorbs the oceanic sweetness of the seafood, spiced with herbs, pepper, and a touch of citrus zest. Expect a rich, savory, and slightly briny taste with a silky finish.",
  
  "A luxuriously creamy and comforting dish made with perfectly cooked fettuccine pasta tossed in a silky sauce of butter, heavy cream, and parmesan cheese. It’s rich, velvety, and indulgent, with a delicate balance of savory and cheesy flavors that melt in your mouth. Expect a smooth, creamy bite with every forkful — pure, simple comfort on a plate.",
  
  "A Yoruba vegetable soup made with a generous mix of spinach or fluted pumpkin leaves, cooked in a rich, peppery, and oily stew with assorted meats and dried fish. It's earthy, spicy, and deeply savory. Expect a hearty, flavorful dish with layers of texture from the tender greens, meat, and spice-laden sauce.",
  
  "A light yet intensely aromatic broth made with fresh catfish, seasoned with local spices like uda, uziza, and scent leaves. It’s peppery, warming, and slightly herbal. Expect a hot, soul-soothing experience with tender fish chunks swimming in a spicy, aromatic broth perfect for chilly evenings or a cleansing treat."
];

const customerReviews = [
    {
      name: "Chidinma A.",
      review: "Aila's Kitchen is a hidden gem! The Jollof Rice was absolutely divine — rich, smoky, and perfectly spiced. Can’t wait to come back for more!",
      rating: 5,
      date: "25th of June, 2025"
    },
    {
      name: "Tolu M.",
      review: "I tried the Seafood Rice for the first time and wow… the flavors were so fresh and vibrant. You can literally taste the ocean in every bite.",
      rating: 4,
      date: "24th of June, 2025"
    },
    {
      name: "Emeka C.",
      review: "The Asun Pasta was a bold and fiery experience! The goat meat was tender, and the pepper sauce had just the right amount of kick. A must-try for spice lovers.",
      rating: 5,
      date: "23rd of June, 2025"
    },
    {
      name: "Aisha B.",
      review: "Efo Riro at Aila's Kitchen reminds me of home. The assorted meats and perfectly seasoned greens took me straight to a proper Yoruba kitchen. 10/10.",
      rating: 5,
      date: "22nd of June, 2025"
    },
    {
      name: "Kingsley O.",
      review: "If you haven’t had their Cat Fish Pepper Soup, you’re missing out. The broth was so aromatic and comforting, with a peppery heat that warms you from the inside.",
      rating: 4,
      date: "21st of June, 2025"
    },
    {
      name: "Ada E.",
      review: "Tried the Alfredo Pasta last weekend and it was heavenly. Creamy, cheesy, and so indulgent. I didn’t expect a Nigerian kitchen to get it this good!",
      rating: 5,
      date: "20th of June, 2025"
    },
    {
      name: "Daniel K.",
      review: "This place has the best customer service and the food quality is top notch. The presentation, the taste — everything was on point.",
      rating: 5,
      date: "19th of June, 2025"
    },
    {
      name: "Faith N.",
      review: "I love how every dish at Aila's Kitchen feels like it was made with love. It’s my go-to spot for comfort food that always delivers.",
      rating: 5,
      date: "18th of June, 2025"
    },
    {
      name: "David P.",
      review: "From the moment you walk in, the aroma hits you. The food tastes even better than it smells. Jollof and Efo Riro are my personal favorites!",
      rating: 5,
      date: "17th of June, 2025"
    },
    {
      name: "Temi O.",
      review: "Aila’s Kitchen is proof that simple, traditional recipes done right can outshine anything. The flavors are authentic, and portions are generous.",
      rating: 5,
      date: "16th of June, 2025"
    }
  ];
  
homeUI();
export { foodImages, foods, foodDescriptions, customerReviews };
