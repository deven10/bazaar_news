import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

import adarsh from "../../images/adarsh_balika.jpg";
import tanay from "../../images/tanay_pratap.jpg";
import shubham from "../../images/shubham_soni.jpg";
import bruce from "../../images/bruce_wayne.jpg";
import john from "../../images/john_wick.jpg";

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
      likedBy: [
        {
          bookmarks: [],
          createdAt: formatDate(),
          firstName: "shubham",
          followers: [],
          following: [],
          // id: "1",
          lastName: "soni",
          password: "shubhamsoni",
          updatedAt: formatDate(),
          username: "shubhamsoni",
          avatar: shubham,
          _id: uuid(),
        },
      ],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    createdAt: "01/05/2023",
    avatar: adarsh,
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
    avatar: shubham,
    firstName: "shubham",
    lastName: "soni",
    createdAt: "11/15/2021",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Dark Knight Rises, Gotham is in Safe hands",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          bookmarks: [],
          createdAt: formatDate(),
          firstName: "Adarsh",
          avatar: adarsh,
          followers: [],
          following: [],
          // id: "1",
          lastName: "Balika",
          password: "adarshBalika123",
          updatedAt: formatDate(),
          username: "adarshbalika",
          _id: uuid(),
        },
        {
          bookmarks: [],
          createdAt: formatDate(),
          firstName: "Tanay",
          avatar: tanay,
          followers: [],
          following: [],
          // id: "1",
          lastName: "Pratap",
          password: "tanayPratap",
          updatedAt: formatDate(),
          username: "tanayPratap",
          _id: uuid(),
        },
        {
          bookmarks: [],
          createdAt: formatDate(),
          firstName: "shubham",
          avatar: shubham,
          followers: [],
          following: [],
          // id: "1",
          lastName: "soni",
          password: "shubhamsoni",
          updatedAt: formatDate(),
          username: "shubhamsoni",
          _id: uuid(),
        },
      ],
      dislikedBy: [],
    },
    username: "brucewayne",
    firstName: "Bruce",
    avatar: bruce,
    lastName: "Wayne",
    createdAt: "04/04/2019",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "You gotta be a fighter to be a lover, If you don't fight for your love, what kind of love is it?",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          bookmarks: [],
          createdAt: formatDate(),
          firstName: "Adarsh",
          followers: [],
          following: [],
          avatar: adarsh,
          // id: "1",
          lastName: "Balika",
          password: "adarshBalika123",
          updatedAt: formatDate(),
          username: "adarshbalika",
          _id: uuid(),
        },
        {
          bookmarks: [],
          createdAt: formatDate(),
          firstName: "Tanay",
          avatar: tanay,
          followers: [],
          following: [],
          // id: "1",
          lastName: "Pratap",
          password: "tanayPratap",
          updatedAt: formatDate(),
          username: "tanayPratap",
          _id: uuid(),
        },
        {
          bookmarks: [],
          createdAt: formatDate(),
          firstName: "shubham",
          avatar: shubham,
          followers: [],
          following: [],
          // id: "1",
          lastName: "soni",
          password: "shubhamsoni",
          updatedAt: formatDate(),
          username: "shubhamsoni",
          _id: uuid(),
        },
        {
          bookmarks: [],
          createdAt: formatDate(),
          firstName: "Bruce",
          avatar: bruce,
          followers: [],
          following: [],
          // id: "1",
          lastName: "Wayne",
          password: "brucewayne",
          updatedAt: formatDate(),
          username: "brucewayne",
          _id: uuid(),
        },
      ],
      dislikedBy: [],
    },
    username: "johnwick",
    firstName: "John",
    avatar: john,
    lastName: "Wick",
    createdAt: "06/05/2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Being the Mentor I never had.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          bookmarks: [],
          createdAt: formatDate(),
          firstName: "Bruce",
          avatar: bruce,
          followers: [],
          following: [],
          // id: "1",
          lastName: "Wayne",
          password: "brucewayne",
          updatedAt: formatDate(),
          username: "brucewayne",
          _id: uuid(),
        },
        {
          bookmarks: [],
          createdAt: formatDate(),
          firstName: "Adarsh",
          avatar: adarsh,
          followers: [],
          following: [],
          // id: "1",
          lastName: "Balika",
          password: "adarshBalika123",
          updatedAt: formatDate(),
          username: "adarshbalika",
          _id: uuid(),
        },
        {
          bookmarks: [],
          createdAt: formatDate(),
          firstName: "John",
          avatar: john,
          followers: [],
          following: [],
          // id: "1",
          lastName: "Wick",
          password: "johnwick",
          updatedAt: formatDate(),
          username: "johnwick",
          _id: uuid(),
        },
      ],
      dislikedBy: [],
    },
    username: "tanayPratap",
    firstName: "Tanay",
    avatar: tanay,
    lastName: "Pratap",
    createdAt: "12/31/2022",
    updatedAt: formatDate(),
  },
];
