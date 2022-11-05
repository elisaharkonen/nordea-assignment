# nordea-assingment

This document is used for Nordea coding assignments.

## Task 1

Tehtävässä tarkoituksena tulostaa consoleen 50 satunnaista kokonaislukua 0 ja 1000 väliltä. Valitsin javascriptin koska se kuuluu C-suvun kieliin ja on yleisempi kuin C#. 

Selvitin miten javascriptillä luodaan satunnaisia kokonaislukuja
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Lähdin ratkaisemaan ensimmäistä tehtävää for-looppia hyödyntäen: 

```
for (var i = 0; i < 50; i++) {
        console.log(A(0,1001));
    }
```

Tässä looppissa kutsutaan A-funktiota 50 kertaa ja tulostetaan ne konsoliin.
Tässä A-funktiossa luodaan satunnainen luku. Tämä funktio on otettu myös tältä nettisivulta: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

```
function A(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}
```

## Task 2

Tehtävässä on tarkoituksena tulostaa ykköstehtävän 50 satunnaisesti luotua numeroa txt-fileen.

Lähdin etsimään outputin tulostusta txt fileen, ja löysin fs.writefile -funktion 
https://stackoverflow.com/questions/2496710/writing-to-files-in-node-js -sivulta, jonka
avulla luvut tulostuvat consolen sijasta txt fileen.

```
let result = "";
 for (var i = 0; i < 50; i++) {
        result = result + (A(0,1001)) + " ";
    }
```

Tässä ykköstehtävän logiikkaa hyödyntäen tallennetaan result-muuttujaan satunnaisesti luodut luvut. Seuraavaksi aiemmin mainitulta stackoverflow-sivulta otin mallia, kuinka
txt-tiedostoon kirjoitetaan tekstiä:

```
fs.writeFile("task-2.txt", result, (err) => {
    if (err) {
        throw err;
        }
    });
```

## Task 3

Tässä tehtävässä hyödynnetään aiemmissa vaiheissa luotuja satunnaislukuja, ja tulostetaan txt-fileen vain parilliset luvut suuruusjärjestyksessä pienimmästä suurimpaan.

Käyttäen for loopia loin satunnaiset luvut kuten aiemmissa vaiheissa, nyt tallennan to result-array. Selvitin miten javascript syntaksilla tarkistetaan onko luku parillinen (https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even), ja hyödynsin sitä if-lauseessa loopin sisällä. Tässä myös sama A-funktio kuin ykköstehtävässä. 

```
let result2 = [];
 for (var i = 0; i < 50; i++) {
        let temp = A(0,1001);
        if (temp % 2 == 0){
            result2.push(temp);
        }
    }
```

Seuraavaksi selvitin miten numerot saadaan tulostumaan suuruusjärjestyksessä tältä sivulta: https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly

```
    result2.sort((a, b)=>{return a-b});
```

Tämän jälkeen samaa writefile-funktiota käyttäen luvut kirjoitetaan txt-fileen:

```
 fs.writeFile("task-3.txt", result2, (err) => {
        if (err) {
            throw err;
        }
    });
```


## Task 4 & 5

I don't have experience in API fetches so I was not able to complete the last two tasks.

First I would need to fetch the information from the website and look for the correct endpoint from which I'm able to pull the information. Then as the data comes in json format, I would parse the response and display the correct data in a readable format in excel. 