import axios from "axios";
// const url = 'https://api.petfinder.com/'
const token = localStorage.getItem('token')

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

export default axios.create({
  baseURL: 'https://api.petfinder.com/',
  headers: token? headers : {
    "Content-type": "application/json"
  }
});