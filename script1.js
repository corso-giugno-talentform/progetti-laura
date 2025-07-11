
//DICHIARAZIONI VAR E CONST


let eta=32;

const MAX=18;

// CONDIZIONE


if (eta>=18)
{
console.log("maggiorenne");

    if (eta>=30 && eta<=50)
    {

        console.log("eta' tra 30 e 50");
    }

}
else

{
console.log("non sei maggiorenne");

}

//operatore ternario

console.log(eta>=MAX ? 'Maggiorenne': 'Minorenne');

// switch case


let giorno="lunedi"

switch (giorno)
{

case "lunedi": console.log("E' lunedi"); break;
case "martedi": console.log("E' martedi"); break;

}


//if valori sempre false, 0,"" null , NaN, undifined

//if valori sempre true tutto il resto

let mese=2;

switch (mese)
{
case 11:
case 12:
case 1:
case 2:console.log("Inverno"); break;
case 3:
case 4:
case 5:console.log("Primavera"); break;
case 6:
case 7:
case 8:console.log("Estate"); break;
case 9:
case 10:console.log("Autunno"); break;
}

switch (true)
{
case (mese==1 || mese==2):console.log("Inverno1"); break;

}


let eta1=10;


if (eta1 >=0 && eta1<=12)
{

    console.log("Bambino");

}

if (eta1 >=13 && eta1<=17)
{

    console.log("adolescente");

}


if (eta1 >=18 && eta1<=64)
{

    console.log("adulto");

}

if (eta1 >64)
{

    console.log("anziano");

}


if (eta1<0 || eta1>120)

    {

        console.log("Eta' non valida");
    }




