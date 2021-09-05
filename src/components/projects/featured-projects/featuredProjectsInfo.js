import Marketplace from "assets/featured-projects-images/farmerMarketPlace.png";
import EmojiInterpreter from "assets/featured-projects-images/emojiInterPreter.png";
import highJobAlert from "assets/featured-projects-images/highJobAlert.png";
import floatingButton from "assets/featured-projects-images/floatingButton.jpg"
const featuredProjectsList = [
  {
    id: 1,
    projectName: "Farmers_Marketplace",
    imageSrc: Marketplace,
    summary:
      "Blockchain based Agricultural Marketplace",
    tags: [
      {
        tagName: "ReactJs",
      },
      {
        tagName: "Solidity",
      },
      {
        tagName: "HTML",
      },
      {
        tagName: "CSS",
      }
    ],
    externalLink: "",
    githubLink: "https://github.com/Mati018/Farmers_Marketplace",
    githubAvailability: "yes",
  },
  {
    id: 2,
    projectName: "Emoji Interpreter",
    imageSrc: EmojiInterpreter,
    summary:
      "This will interpret emojis. Put an emoji and it will tell what that means.",
    tags: [
      {
        tagName: "ReactJs",
      },
      {
        tagName: "CSS",
      }
    ],
    externalLink: "https://mati018.github.io/emoji_interpreter/",
    githubLink: "https://github.com/Mati018/emoji_interpreter",
    githubAvailability: "yes",
  },
  {
    id: 3,
    projectName: "High Jobalert",
    imageSrc: highJobAlert,
    summary:
      "High Jobalert project is web application built using PHP, MySQL as backend and HTML JavaScript & Bootstrap as Frontend technologies.",
    tags: [
      {
        tagName: "HTML",
      },
      {
        tagName: "CSS",
      },
      {
        tagName: "PHP",
      },
      {
        tagName: "MySQL",
      }
    ],
    externalLink: "http://highjobalert.com/",
    githubLink: "https://github.com/Mati018/High-Jobalert",
    githubAvailability: "yes",
  },
  {
    id: 4,
    projectName: "Floating Button",
    imageSrc: floatingButton,
    summary:
      "Floating Volume is a simple app that allows you to control media, ringer, alarm and in-call volume, and switch between ringer modes within the floating interface.",
    tags: [
      {
        tagName: "Java",
      },
      {
        tagName: "HTML",
      }
    ],
    externalLink: "https://www.amazon.com/gp/product/B089HW8PDW",
    githubLink: "https://github.com/Mati018",
    githubAvailability: "no",
  }
];

export default featuredProjectsList;
