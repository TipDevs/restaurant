import ceo_photo from "../assets/images/ceo.webp";
export function aboutUI() {
    let about_main = document.querySelector('main');
    about_main.classList.add('about_main');
    const aboutCeo = {
        heading: "About the CEO",
        ceo_photo: ceo_photo,
        title: "Chef Sarah Anthony Moyosore — Founder & CEO, Aila’s Kitchen",
        firstPara: "Chef Sarah Anthony Moyosore is the culinary mind and founder of Aila’s Kitchen, a proudly Nigerian food brand dedicated to delivering authentic, flavorful, and expertly prepared meals. With several years of professional kitchen experience, Chef Sarah has built a reputation for her skillful blend of traditional recipes and contemporary culinary techniques.",
        secondPara: "Her career in the food industry began with hands-on roles in some of Nigeria’s well-regarded food establishments. She served as a Cook at Donald Fast Food by De Angel’s, where she gained valuable experience in fast-paced kitchen environments and customer-focused service. She went on to work as a Chef at Naija Pasta & Grills, where she further refined her mastery in preparing specialty rice and pasta dishes, becoming known for her creativity and attention to detail.",
        thirdPara: "Beyond commercial kitchens, Chef Sarah also held a Private Cook position for a family of four, a full-time live-out role where she handled diverse daily meals, ranging from indigenous soups to intercontinental dishes — a role that honed her versatility and personalized culinary service.",
        ceoPlan: [
            "Today, as the CEO of Aila’s Kitchen, Chef Sarah brings together all these experiences to offer an extensive menu that features:",
            "Signature Rice Dishes: Jollof Rice, Asun Rice, Seafood Rice, Native Rice (Palm or Vegetable Oil), Ofada Rice, Coconut Rice, and more.",
            "Specialty Pasta Creations: Alfred Pasta, Asun Pasta, Seafood Pasta, Native Pasta, and Jollof Pasta.",
            "Traditional Nigerian Soups: Afang, Edikainkong, Egusi, Ogbono, Fisherman Native Soup, and beyond.",
            "Pepper Soups, Sauces & Combos: Ofada Sauce, Snail Sauce, Efo Riro, Peppered Goat Meat, Dodo Gizzard, Ewa Agoyin, and more."
        ],
        ceoMission: [
            "Chef Sarah’s mission is simple yet profound: to serve food that warms the heart, celebrates culture, and leaves an unforgettable taste in every bite.",
            "Through Aila’s Kitchen, she continues to uphold a standard of quality, innovation, and culinary excellence that has made her brand a trusted name for home-style meals, corporate catering, and special events."
        ]
    }
    function writeAboutCeo() {
        let headingText = document.createElement('h2');
        headingText.textContent = `${aboutCeo.heading}`
        let ceo_photo = document.createElement('img');
        ceo_photo.src = aboutCeo.ceo_photo;
        let ceoTitle = document.createElement('h3');
        ceoTitle.textContent = aboutCeo.title;
        let firstPara = document.createElement('p');
        firstPara.textContent = `${aboutCeo.firstPara}`;
        let secondPara = document.createElement('p');
        secondPara.textContent = `${aboutCeo.secondPara}`;
        let thirdPara = document.createElement('p');
        thirdPara.textContent = `${aboutCeo.thirdPara}`;
        let ceoPlanPara = document.createElement('p');
        ceoPlanPara.textContent = `${aboutCeo.ceoPlan[0]}`;
        let ceoPlanList = document.createElement('ul');
        let plan1 = document.createElement('li');
        plan1.textContent = `${aboutCeo.ceoPlan[1]}`;
        let plan2 = document.createElement('li');
        plan2.textContent = `${aboutCeo.ceoPlan[2]}`;
        let plan3 = document.createElement('li');
        plan3.textContent = `${aboutCeo.ceoPlan[3]}`;
        let plan4 = document.createElement('li');
        plan4.textContent = `${aboutCeo.ceoPlan[4]}`;
    }
}