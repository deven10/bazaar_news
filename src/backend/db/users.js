import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "I am Groot 😉",
    website: "https://linktr.ee/umraniadeven",
  },
  {
    _id: uuid(),
    firstName: "Tanay",
    lastName: "Pratap",
    username: "tanayPratap",
    password: "tanayPratap",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Ex Microsoft, Mentor, Teacher, Entrepreneur",
    website: "https://neog.camp/",
  },
  {
    _id: uuid(),
    firstName: "shubham",
    lastName: "soni",
    username: "shubhamsoni",
    password: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Eat, Sleep, Code, Repeat",
    website: "https://github.com/deven10",
  },
  {
    _id: uuid(),
    firstName: "Bruce",
    lastName: "Wayne",
    username: "brucewayne",
    password: "brucewayne",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "I'm Batman 🦇",
    website: "https://www.linkedin.com/in/umraniadeven/",
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Wick",
    username: "johnwick",
    password: "johnwick",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Wanna Play Football ⚽?",
    website: "https://deven-portfolio.netlify.app/",
  },
];
