
// variabili globali

let x=10;
let y=5;
let z=3;


//funzioni


function sum(a,b) //variabili locali
{
    return a+b;
}




let somma=sum(sum(x,y),z);

let numero1=3;
let numero2=2;
let operazione="+";



console .log(somma);

console.log("Risultato tra " + numero1 + ' ' + operazione + ' ' + numero2 + ' = ' + Calc(numero1,numero2,operazione))

function Calc(a,b,c)
{

    switch (operazione)
{

    case "+":return  a+b;
    case "/":
        if (b==0)
        {
            return "Divisione per zero non consentita";
        }
else
{
 return  a/b;
}
    
   
    case "*":return  a*b;
    case "-":return  a-b;


}

}





  for (let i=1;i<=30;i++)
    {


       console.log(checkIndex(i));


 }



function checkIndex(numero)
{

if (numero % 3===0 && numero % 5===0)
            {

                
                 return ("Laura Carbognin");
            }
else if (numero % 3===0)
        {
         return ("Laura");
       

        }
else if (numero % 5===0)
        {
        return ("Carbognin");

        }
else
return numero;
}


let numero=40;


for (let i=0;i<=numero;i++)
{

    Dispari(i);

  
}

for (let i=0;i<=numero;i++)
{

    Pari(i);

  
}
function Dispari(num)
{

if (num % 2 ===1)
{

    console.log(num)

}


}

function Pari(num)
{

if (num % 2 ===0)
{

    console.log(num)

}


}
