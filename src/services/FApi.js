// src/services/fakeApi.js

const musicDatabase = {
    pop: ["Taylor Swift", "Ed Sheeran", "Ariana Grande", "Bruno Mars", "Lady Gaga", "Luis Miguel", "Shakira", "Alejandro Sanz", "Camila", "Reik", "Sin Bandera", "Thalía", "Pablo Alborán", "Natalia Lafourcade", "Gloria Trevi"],
    reggaeton: ["Bad Bunny", "J Balvin", "Daddy Yankee", "Ozuna", "Maluma", "Karol G", "Anuel AA", "Farruko", "Natti Natasha", "Becky G"],
    rock: ["Led Zeppelin", "Pink Floyd", "The Beatles", "Queen", "Nirvana", "Maná", "Café Tacvba", "Zoé", "Molotov", "Caifanes", "Hombres G", "Los Enanitos Verdes", "El Tri", "La Maldita Vecindad"],
    banda: ["Banda MS", "Julión Álvarez", "La Arrolladora Banda El Limón", "Calibre 50", "Gerardo Ortiz", "Christian Nodal", "Los Tigres del Norte", "El Recodo", "Bronco", "Los Ángeles Azules"],
    norteño: ["Intocable", "Los Tigres del Norte", "Pesado", "La Leyenda", "Los Tucanes de Tijuana", "Cardenales de Nuevo León", "Ramón Ayala", "Los Huracanes del Norte", "Grupo Frontera", "La Firma"],
    cumbia: ["Los Ángeles Azules", "Rayito Colombiano", "Grupo Cañaveral", "La Sonora Dinamita", "Los Askis", "Los Kumbia Kings", "Grupo Niche", "La Sonora Santanera", "Celso Piña", "Panteón Rococó"],
    trap: ["Bad Bunny", "Anuel AA", "C. Tangana", "Duki", "Paulo Londra", "Khea", "Rauw Alejandro", "Myke Towers", "Nicki Nicole", "Bizarrap"],
    regionalMexicano: ["Vicente Fernández", "Pepe Aguilar", "Alejandro Fernández", "Pedro Infante", "Joan Sebastian", "Jenni Rivera", "Antonio Aguilar", "Lucha Villa", "Lorenzo de Monteclaro", "Jorge Negrete"],
    indie: ["Arctic Monkeys", "Tame Impala", "Vampire Weekend", "Florence + The Machine", "The Strokes", "Zoé", "Café Tacvba", "Enjambre", "Little Jesus", "Porter", "Technicolor Fabrics", "Rey Pila", "Hello Seahorse!", "Kinky"],
    mariachi: ["Vicente Fernández", "Alejandro Fernández", "Pedro Infante", "Pepe Aguilar", "Aida Cuevas", "Flor Silvestre", "Javier Solís", "Antonio Aguilar", "Amalia Mendoza", "Pablo Montero"],
    
    // Géneros internacionales
    hiphop: ["Kendrick Lamar", "Drake", "Jay-Z", "Nas", "Eminem", "Kanye West", "Tupac", "Notorious B.I.G.", "J. Cole", "Travis Scott"],
    jazz: ["Miles Davis", "John Coltrane", "Duke Ellington", "Ella Fitzgerald", "Billie Holiday", "Louis Armstrong", "Charlie Parker", "Thelonious Monk", "Chet Baker", "Herbie Hancock"],
    blues: ["B.B. King", "Muddy Waters", "Howlin' Wolf", "John Lee Hooker", "Etta James", "Robert Johnson", "Albert King", "Freddie King", "Buddy Guy", "Big Mama Thornton"],
    classical: ["Ludwig van Beethoven", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Franz Schubert", "Frederic Chopin", "Tchaikovsky", "Vivaldi", "Handel", "Haydn", "Schumann"],
    metal: ["Metallica", "Iron Maiden", "Black Sabbath", "Megadeth", "Slayer", "Pantera", "Judas Priest", "Anthrax", "Slipknot", "System of a Down"],
    edm: ["Tiesto", "Armin van Buuren", "Martin Garrix", "David Guetta", "Hardwell", "Steve Aoki", "Marshmello", "Zedd", "Calvin Harris", "Avicii"],
    kpop: ["BTS", "BLACKPINK", "EXO", "TWICE", "Red Velvet", "BIGBANG", "Girls' Generation", "Super Junior", "SHINee", "ITZY"],
    soul: ["Aretha Franklin", "Otis Redding", "Sam Cooke", "Marvin Gaye", "Al Green", "Curtis Mayfield", "Bill Withers", "Etta James", "Patti LaBelle", "Gladys Knight"],
    funk: ["James Brown", "Stevie Wonder", "Prince", "Sly and the Family Stone", "George Clinton", "Parliament", "Earth, Wind & Fire", "The Isley Brothers", "Rick James", "Bootsy Collins"],
    folk: ["Bob Dylan", "Joan Baez", "Simon & Garfunkel", "Neil Young", "Joni Mitchell", "Woody Guthrie", "Cat Stevens", "Nick Drake", "Leonard Cohen", "Arlo Guthrie"],
    punk: ["The Clash", "Sex Pistols", "Ramones", "The Stooges", "Green Day", "Bad Religion", "Dead Kennedys", "Misfits", "Blink-182", "The Offspring"],
    disco: ["Bee Gees", "Donna Summer", "Chic", "Gloria Gaynor", "KC and the Sunshine Band", "Village People", "Diana Ross", "The Jacksons", "Boney M.", "Earth, Wind & Fire"],
    house: ["Frankie Knuckles", "Larry Levan", "David Guetta", "Carl Cox", "Armand Van Helden", "Eric Prydz", "Axwell", "Steve Angello", "Fedde Le Grand", "Robin Schulz"],
    rnb: ["Beyoncé", "Alicia Keys", "Usher", "Rihanna", "The Weeknd", "Chris Brown", "Ne-Yo", "Trey Songz", "John Legend", "Mary J. Blige"],
    opera: ["Luciano Pavarotti", "Maria Callas", "Placido Domingo", "Renée Fleming", "Jonas Kaufmann", "Dmitri Hvorostovsky", "Cecilia Bartoli", "Montserrat Caballé", "Andrea Bocelli", "Joan Sutherland"],
    gospel: ["Mahalia Jackson", "Kirk Franklin", "Yolanda Adams", "Shirley Caesar", "Donnie McClurkin", "CeCe Winans", "Marvin Sapp", "Tamela Mann", "The Clark Sisters", "James Cleveland"],
    alternative: ["Radiohead", "Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains", "Smashing Pumpkins", "Nine Inch Nails", "Tool", "Red Hot Chili Peppers", "Foo Fighters"],
    dubstep: ["Skrillex", "Excision", "Zomboy", "Flux Pavilion", "Knife Party", "Datsik", "Virtual Riot", "NERO", "Rusko", "Modestep"]
  };
  
  // Mapa de sinónimos para géneros
  const genreSynonyms = {
    "hip-hop": "hiphop",
    "r&b": "rnb",
    "rhythm and blues": "rnb",
    "k-pop": "kpop",
    "edm": "electronic",
    "electronic dance music": "edm",
    "dancehall": "reggaeDancehall",
    "regional mexicano": "regionalMexicano", 
    "mexicano": "regionalMexicano",
    "mexicana": "regionalMexicano"
  };
  
  // Función para obtener el género "normalizado" desde el género ingresado
  const getNormalizedGenre = (genre) => {
    const normalizedGenre = genre.toLowerCase().trim();
    return genreSynonyms[normalizedGenre] || normalizedGenre; // Si el género tiene un sinónimo, lo usa
  };
  
  // Función para simular la predicción basada en las respuestas del usuario
  export const simulateMusicPreference = (preferences) => {
    const genre = getNormalizedGenre(preferences.genre);
    const artists = musicDatabase[genre] || ["Artista no encontrado"]; // Busca el género en musicDatabase
    
    return {
      genre: genre.charAt(0).toUpperCase() + genre.slice(1), // Capitaliza el género
      artists
    };
  };  