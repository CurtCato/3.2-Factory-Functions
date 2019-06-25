//Practice: Doctors

const createDoctor = (name, specialty, address) => {
  return {
    drName: `${name}`,
    drSpecialty: `${specialty}`,
    drAddress: `${address}`
  };
};

const createPet = (name, breed) => {
  return {
    petName: `${name}`,
    petBreed: `${breed}`
  };
};

let bowWowKennels = [
  createPet("Woofie", "Golden"),
  createPet("Archie", "Lab"),
  createPet("David", "GreatDane")
];

//Practice: Music Row

let jumpStop = [];
let chatten = [];
let polar = [];

let artistInfo = [
  {
    artistName: "Bruce Atikins",
    artistGenre: "Country",
    artistAge: 23
  },
  {
    artistName: "Jensen Brown",
    artistGenre: "Pop",
    artistAge: 20
  },
  {
    artistName: "Dre Funkz",
    artistGenre: "Funk",
    artistAge: 25
  },
  {
    artistName: "Busta Grimes",
    artistGenre: "Rap",
    artistAge: 21
  },
  {
    artistName: "Bartholomew Danielson",
    artistGenre: "Bluegrass",
    artistAge: 23
  },
  {
    artistName: "Avilee Dallas",
    artistGenre: "Country",
    artistAge: 19
  },
  {
    artistName: "Austin Kinkaid",
    artistGenre: "Pop",
    artistAge: 22
  },
  {
    artistName: "Loyonce Branis",
    artistGenre: "Rap",
    artistAge: 27
  }
];

// Using one factory function to create artists
const createArtist = (name, genre, age) => ({
  artistName: name,
  artistGenre: genre,
  artistAge: age
});

let bruceAtikins = createArtist("Bruce Atikins", "Country", 23)
chatten.push(bruceAtikins)

let jensenBrown = createArtist("Jensen Brown", "Pop", 20)
polar.push(bruceAtikins)

let dreFunkz = createArtist("Dre Funkz", "Funk", 25)
jumpStop.push(dreFunkz)

let busta = createArtist("Busta Grimes", "Rap", 21)
jumpStop.push(busta)

let bart = createArtist("Barthalomew Danielson", "Bluegrass", 23)
chatten.push(bart)

let avil = createArtist("Avilee Dallas", "Country", 19)
chatten.push(avil)

let austin = createArtist("Austin Kinkaid", "Pop", 27)
polar.push(austin)

let loy = createArtist("Loyonce Branis", "Rap", 27)
jumpStop.push(loy)

// Used a for each loop instead of factory functions here

// artistInfo.forEach(obj => {
//   if (obj.artistGenre === "Pop") {
//     polar.push(obj);
//   } 
//   else if (obj.artistGenre === "Rap" || obj.artistGenre === "Funk") { 
//    jumpStop.push(obj);
//   } 
//   else {
//       chatten.push(obj) 
//   }
// });

console.log(chatten)
console.log(jumpStop)
console.log(polar)

