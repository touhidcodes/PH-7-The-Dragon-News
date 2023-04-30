// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCDzkn6GngkcVveuhiG-YDDrti2gN3LbI4",
	authDomain: "the-dragon-news-be4ff.firebaseapp.com",
	projectId: "the-dragon-news-be4ff",
	storageBucket: "the-dragon-news-be4ff.appspot.com",
	messagingSenderId: "581294382356",
	appId: "1:581294382356:web:5b30073919d62feedd3601",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
