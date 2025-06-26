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
homeUI();
export { foodImages, foods, foodDescriptions };
