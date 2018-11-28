// Code for the first list - Top Ten Pokémon Games
let pokémonGames = ['Pokémon Ultra Sun and Ultra Moon','Pokémon Diamond Pearl and Platinum','Pokémon Red Blue and Yellow','Pokémon HGSS','Pokémon X and Y','Pokémon ΩRαS','Pokémon Emerald','Pokémon Black and White 2','Pokémon Sun and Moon','Pokémon Fire Red and Leaf Green'];

for (let count = 0; count < pokémonGames.length; count++) {
    console.log(pokémonGames[count]);
    console.log(document.getElementById(count.toString()).innerHTML);
    document.getElementById(count.toString()).innerHTML = pokémonGames[count];
};