//array


let numeri=[1,2,3,4]; //array stesso tipo

let mix=[1,null,'',98.90,'aaa'];

let matrix=[11,22,numeri];

console.log(mix.length);

console.log(mix[4]);


//signed 0001


//unsigned 1

numeri.push(5); //aggiunge valore  in fondo
numeri.unshift(0); //aggiunge valore all'inizio


console.log(numeri)
console.log(numeri.length)


numeri.pop(); //toglie il primo
numeri.shift(); //toglie ultimo

console.log(numeri)
console.log(numeri.length)


let array_1 = [
  ['un', 'per', 'incatenarli.'],
  ['Anello', 'trovarli,'],
  ['ghermirli', 'e'],
  ['gondor', 'mark'],
];
let array_2 = [
  [['trovarli,']],
  ['tu,', 'sciocchi'],
  ['tu,', 'sciocchi', ['padron', 'Sauron']],
  ['nel', ['fuggite', 'gandalf']],
  [['domarli,', 'passare'], 'buio']
];


console.log (array_1[0][0],
     array_1[1][0] ,
      array_1[0][1],
      array_2[4][0][0],
      array_1[0][0] ,
      array_1[1][0],
            array_1[0][1],
      array_1[1][1],
      array_1[0][0],
    array_1[1][0],
     array_1[0][1],
            array_1[2][0],
             array_1[2][1],
             array_2[3][0],
                    array_2[4][1],
              array_1[0][2],
         
    );


let persone =['mario','paolo','luca'];



persone[0]='pippo' //assegnazione cella





for (let i=0;i<persone.length;i++)
{

    if (persone[i]!='pippo')
    {

 console.log( persone[i] );
    }

 

  
}


persone.forEach 

(
    
function(a,b) //callback function a=valore; b=indice
{

console.log(a,b)
}


)

let array_amici=["amico1","amico2","amico3","amico4","amico5"];


array_amici.push("amico6");

array_amici.pop("amico1");


array_amici.forEach(
    
function(a,b)
{
if (a=="amico2")
{

    console.log("Amico2 è presente.")
}

}

)

let array_numeri=[1,15,3,8,12,9,7,20]

let max10,somma=0;
let arraynew=[];


array_numeri.forEach(
    
function(a,b)
{
if (a>10)
{

max10++;


}

arraynew.push(a*2)
somma=a+somma


}
)

arraynew.forEach(
    
function(a,b)
{
console.log(a)
}
)


let stringa="PAROLA";
let numvoc=0;
let array_vocali=["a","e","i","o","u"]

array_vocali.forEach (
    
    function(a,b)
{

stringa=stringa.toLowerCase();

if (stringa.search(a)>0)
{

numvoc=numvoc+1;

}

}

)

console.log("VOCALI " + numvoc + ' IN ' + stringa)





















