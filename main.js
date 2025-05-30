import './style.css'
import { setupCounter } from './counter.js'

// Import our new files
import './css/style.css'
import './css/dark-mode.css'
import './css/animations.css'
import './js/main.js'
import './js/theme.js'
import './js/language.js'
import './js/scroll.js'

// Initialize necessary components from the default Vite template
const counter = document.querySelector('#counter')
if (counter) setupCounter(counter)