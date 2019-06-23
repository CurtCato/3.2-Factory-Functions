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

const createArtist = (name, genre, age) => ({
  artistName: name,
  artistGenre: genre,
  artistAge: age
});

// artistInfo.forEach(person => {
//     if (person.artistGenre === "Pop") {
//         polar.push("Name: " + person.artistName + ", Age: " + person.artistAge)
//     } else if (person.artistGenre === "Rap" || "Funk") {
//         jumpStop.push("Name: " + person.artistName + ", Age: " + person.artistAge)
//     } else if (person.artistGenre === "Country" || "Bluegrass") {
//         chatten.push("Name: " + person.artistName + ", Age: " + person.artistAge)
//     }
// })

artistInfo.forEach(obj => {
  if (obj.artistGenre === "Pop") {
    polar.push(obj);
  } 
  else if (obj.artistGenre === "Rap" || obj.artistGenre === "Funk") { 
   jumpStop.push(obj);
  } 
  else {
      chatten.push(obj) 
  }
});

console.log(chatten)
console.log(jumpStop)
console.log(polar)

