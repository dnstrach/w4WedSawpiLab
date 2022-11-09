const { default: axios } = require("axios")

let button = document.querySelector('button')

const clickBtn = () => {
    console.log('button clicked')
}

button.addEventListener('click', clickBtn)

const baseURL = 'https://swapi.dev/api/planets/'

axios.get('https://swapi.dev/api/planets/?search=Alderaan').then(res =>{
    console.log(res.data)
})


