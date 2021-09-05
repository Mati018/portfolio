import Marketplace from "assets/featured-projects-images/farmerMarketPlace.png";
import EmojiInterpreter from "assets/featured-projects-images/emojiInterPreter.png";

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
  }
];

export default featuredProjectsList;
