import ReactMeals from "../../assets/projects-index/reactmeals.png";
import AmazonStore from "../../assets/projects-index/amazon.png";
import Unity from "../../assets/projects-index/unity.png";
import GymApp from "../../assets/projects-index/gym.png";
import CarRental from "../../assets/projects-index/car-rental.png";

const Menu = [
  {
    id: 1,
    image: CarRental,
    title: "Car Rental App (Tailwind CSS, TypeScript, Next.js)",
    category: "Next.js",
  },
  {
    id: 2,
    image: GymApp,
    title: "Responsive Gym Exercises App (with Material UI)",
    category: "React.js",
    link: "https://kb-gym-react.netlify.app",
  },
  {
    id: 3,
    image: AmazonStore,
    title: "Beauty Product Store Concept (non-responsive yet)",
    category: "React.js",
    link: "https://kovacs-boldizsar-amazon-store.netlify.app",
  },
  {
    id: 4,
    image: ReactMeals,
    title: "Food Order App with Firebase back-end (non-responsive yet)",
    category: "React.js",
    link: "https://kovacs-boldizsar-food-order.netlify.app",
  },
  {
    id: 5,
    image: Unity,
    title: "Physics Education Website (Unity WebGL)",
    category: "Vanilla JavaScript",
    link: "https://boldi247.github.io/fizikaonline/index.html",
  },
];

export default Menu;
