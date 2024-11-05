const namesOfGod = [
    {
        word: "Jehovah",
        hint: "Hebrew name of God."
    },
    {
        word: "Jireh",
        hint: "God, the Provider"
    },
    {
        word: "Nissi",
        hint: "God, our Banner"
    },
    {
        word: "Rapha",
        hint: "God, the Healer"
    },
    {
        word: "Shaddai",
        hint: "God, Almighty"
    }
];
const bibleBooks = [
    {
        word: "Genesis",
        hint: "Old Testament, it tells about the beginning of everything!"
    },
    {
        word: "Matthew",
        hint: "New Testament, one of the Gospels, named after one Jesus´ deciples."
    },
    {
        word: "Psalms",
        hint: "Old Testament, containing hymns, prayers and worship"
    },
    {
        word: "revelations",
        hint: "New Testament, telling about the end time and final hope for believers."
    },
    {
        word: "Corinthians",
        hint: "New Testament, Paul urges to love and to repent and turn from wicked ways."
    }
];
const bibleCharacters=[
    { word:"Daniel",
        hint:"He survived the lions´ den."
    },
    { word:"David",
        hint:"Once a shepherd, an anointed King of Israel, chased by Saul. The braves one to kill Goliath at that time."
    },
    { word:"Ruth",
        hint:"Loyal Moabite young widow, following her mother-in-law to Judah; there is a book in the Old Testament that is called after her."
    },
    { word:"Mary",
        hint:"Chosen by God to be the mother of Jesus. "
    },
    { word:"Peter",
        hint:"One of Jesus` deciples, once called Simon. "
    }
]
const bibleEvents = [
    {
        word: "Baptism",
        hint: "One of Jesus´ command. It confirms the unity with Jesus´ death and resurrection"
    },
    {
        word: "Creation",
        hint: "The Beginning of everything."
    },
    {
        word: "Ascension",
        hint: "Jesus´s return to the Father."
    },
    {
        word: "Crucifixion",
        hint: "This is how Jesus died."
    },
    {
        word: "Flood",
        hint: "Noah was called to build the Ark due to this incident."
    }
];
//// Wait for the DOM to finish loading before running the game
// Get the option elements and add event listeners to them
document.addEventListener("DOMContentLoaded"), function () {
    let options = document.getElementsByTagName("option");

    for (let option of options) {
        option.addEventListener("click", function () {
            if (this.getAttribute("data-category-type") === "bible-books") {
                checkAnswer();
            } else {
                let chosenCat = this.getAttribute("data-category-type");
                runGame(chosenCat);
            }
        })
    }
}
function startGame(){
    //get random words from specific array
    let randomWord = "";
for (let i = 0; i < bibleBooks.length; i++) {
    displayWord += "_ ";
}
document.getElementById("displayWord").textContent = displayWord;


    if (chosenCat==="bible-books"){
        let {word, hint} = bibleBooks[Math.floor(Math.random()*bibleBooks.length)];
        currentquest=word;
        document.getElementById("cue").innerText = hint;
    }else{
        window.alert("Please, choose a category.")
    }
}