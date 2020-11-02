const inputElement = document.querySelector('.dog-name');
const selectElement = document.querySelector('#trait');
const saveButton = document.querySelector('#save');
const changePhotoBtn = document.querySelector('#wonderful-pet')
const imgElement = document.querySelector('.pet-photo')

console.log(inputElement);
console.log(inputElement.value);

const images = [
  'https://www.warrenphotographic.co.uk/photography/bigs/09859-Fawn-Pug-dog-and-pup-white-background.jpg',
  'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg',
  'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/surprises_about_dogs_and_cats_slideshow/1800x1200_surprises_about_dogs_and_cats_slideshow.jpg',
  'https://www.dogstrust.org.uk/help-advice/_images/164742v800_puppy-1.jpg',
];

const names = ["Całka", "Pimpuś", "Szatan", "Reks", "Puszek", "Mia"]

// powiedzieć o funkcjach anonimowych
changePhotoBtn.addEventListener('click', () => {
  imgElement.setAttribute('src', getRandomValueFromArray(images))

  inputElement.value =getRandomValueFromArray(names)

  const traits = Array.from(selectElement.options).map(option => option.value)
  
  const newTrait =getRandomValueFromArray(traits)
  selectElement.value = newTrait;
})

const getRandomValueFromArray = (anyArray) => {
  return anyArray[Math.floor(Math.random()*anyArray.length)]
}

saveButton.addEventListener('click', () => {
  const name = inputElement.value;
  const trait = selectElement.value;
  const imageUrl = imgElement.getAttribute('src')
  const dog = {
    name,
    trait,
    imageUrl
  }
  console.log(dog)
  //najpierw zapisać jednego pieska
  const savedDogs = JSON.parse(localStorage.getItem('dogs'))
  console.log(savedDogs)
  
  if(savedDogs) {
    const lastDogId = Math.max(...savedDogs.map(dog => dog.id))
    const updateDogs = [...savedDogs, {
      dog,
      id: lastDogId + 1
    }]

    localStorage.setItem('dogs', updateDogs)
  } else {
    localStorage.setItem('dogs', {
      ...dog,
      id: 0,
    })
  }
  

});
