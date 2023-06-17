import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    createdAt: "01/05/2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    firstName: "shubham",
    lastName: "soni",
    createdAt: "11/15/2021",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Dark Knight Rises, Gotham is in Safe hands",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "brucewayne",
    firstName: "Bruce",
    lastName: "Wayne",
    createdAt: "04/04/2019",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "You gotta be a fighter to be a lover, If you don't fight for your love, what kind of love is it?",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johnwick",
    firstName: "John",
    lastName: "Wick",
    createdAt: "06/05/2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Being the Mentor I never had.",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanayPratap",
    firstName: "Tanay",
    lastName: "Pratap",
    createdAt: "12/31/2022",
    updatedAt: formatDate(),
  },
];
