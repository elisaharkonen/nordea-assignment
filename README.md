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
Tässä A-funktiossa luodaan satunnainen luku. Tämä funktio on otettu myös täältä nettisivulta: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

```
function A(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}
```
