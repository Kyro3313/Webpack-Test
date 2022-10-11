import generateJoke from './generateJoke';
import { v4 as uuidv4 } from 'uuid';
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click',generateJoke)

generateJoke()
console.log(uuidv4())
