import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

// import adarsh from "../../images/adarsh_balika.jpg";
// import tanay from "../../images/tanay_pratap.jpg";
// import shubham from "../../images/shubham_soni.jpg";
// import bruce from "../../images/bruce_wayne.jpg";
// import john from "../../images/john_wick.jpg";

// https://i.ibb.co/QN1NmRj/adarsh-balika.jpg
// https://i.ibb.co/27T7TWr/barbie.jpg
// https://i.ibb.co/RNcm4TN/ben10.jpg
// https://i.ibb.co/R0sRR6Q/bruce-wayne.jpg
// https://i.ibb.co/HpmfNtg/deven.jpg
// https://i.ibb.co/BLb6RTT/female.png
// https://i.ibb.co/GWZDNGk/img.jpg
// https://i.ibb.co/TmYfHXq/john-wick.jpg
// https://i.ibb.co/TMbFYm8/landing-image.jpg
// https://i.ibb.co/d2Z36HF/male.png
// https://i.ibb.co/xz3Fvb3/person-1.jpg
// https://i.ibb.co/FKDz010/person-2.jpg
// https://i.ibb.co/5rTX8xX/shubham-soni.jpg
// https://i.ibb.co/LvVryfK/tanay-pratap.jpg

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
    avatar: "https://i.ibb.co/QN1NmRj/adarsh-balika.jpg",
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
    avatar: "https://i.ibb.co/LvVryfK/tanay-pratap.jpg",
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
    avatar: "https://i.ibb.co/5rTX8xX/shubham-soni.jpg",
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
    avatar: "https://i.ibb.co/R0sRR6Q/bruce-wayne.jpg",
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
    avatar: "https://i.ibb.co/TmYfHXq/john-wick.jpg",
  },
];
