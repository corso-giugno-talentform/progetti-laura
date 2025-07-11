
//for

let numero;

for (let i=1;i<=10;i++)
{

numero=i % 2 


console.log(i)




if (numero==1)
{

console.log("NUMERO DISPARI")
continue; //VA AL PROSSIMO CICLO
}


if (numero==0)
{

console.log("NUMERO PARI")
break; //ESCE DAL CICLO
}


}
let somma=0;

for (let i=1;i<=100;i++)
{

   somma=somma+i;
  

}

 console.log(somma) 

let b=3;

for (let i=1;i<=10;i++)
{


     if (i==5)
    {
        continue;
    }

    if (i==b)
    {
        for (let x=1;x<=10;x++)
        {
        console.log( b*x );


        }

        break;
        
    }



  
   
}

  for (let i=1;i<=30;i++)
    {


        console.log(i);

if (i % 3===0 && i % 5===0)
            {

                 console.log("Laura Carbognin");
                 continue;
            }

        if (i % 3===0)
        {
        console.log("Laura")
       

        }

         if (i % 5===0)
        {
        console.log("Carbognin")

        }



    }