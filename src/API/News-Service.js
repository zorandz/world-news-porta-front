import axios from "axios";

const API_URL = 'http://localhost:8081';

export async function saveContact(contact) {
    return await axios.post(API_URL, contact);
}

export async function fetchForHomePage() {
    return await axios.get(API_URL + '/main-fetch');
}
