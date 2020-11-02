console.log("Hello world")

const multiply = () => {
  console.log(2 * 2)
}

function multiplyAnotherVersion(){
  console.log(2 * 2)
}

multiply()
multiplyAnotherVersion()

// square()

const square = (number) => {
  console.log(number * number)
}

// square()

square(5)
// pokazać że funkcje mogą zwracać wartość
const result = square(25)

// powiedzieć że zmienne to pudełka
// opowiedziec o const i let oraz var
const myVar = 5;

//opowiedzieć o typach zmiennych number, string, boolean, undefined, null, funkcja też jest zmienną



//opowiedziec o tablicach -> tablica piesków
const dogs = ["Pimpek", "Łata", "Piksel", "Całka"]

console.log(dogs[0])
console.table(dogs)
// opowiedzieć o obiektach

const dog = {
  name: 'Pimpek',
  bark: () => {
    console.log("Hau hau!")
  }
}

dog.bark()

const dogsWithoutCapitalLetter = dogs.map(dog => dog.toLowerCase())
console.log(dogsWithoutCapitalLetter)
const dogsThatDontEndWithA = dogs.filter(dog => !dog.endsWith("a"))
console.log(dogsThatDontEndWithA)
dogs.forEach(dog => console.log(dog))

// const cart = [{}, {}, {}]