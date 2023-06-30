import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

import adarsh from "../../images/adarsh_balika.jpg";
import tanay from "../../images/tanay_pratap.jpg";
import shubham from "../../images/shubham_soni.jpg";
import bruce from "../../images/bruce_wayne.jpg";
import john from "../../images/john_wick.jpg";
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
    avatar: adarsh,
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
    avatar: tanay,
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
    avatar: shubham,
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
    avatar: bruce,
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
    avatar: john,
  },
];
