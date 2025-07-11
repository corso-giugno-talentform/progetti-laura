

//sintassi classi  ES6 LIVELLO PIU' AGGIORNATO

//prima lettera maiuscola
//singolare
//inglese

class NewClass

{

constructor(firstname,lastname,age)

{
this.firstname=firstname;
this.lastname=lastname;
this.age=age;


}

stampaEta()
{

console.log(this.age)

}

}


let persona = new NewClass

persona.stampaEta();

console.log(persona.firstname)


class ContoClass

{

constructor(numeroconto,intestatario,saldo)

{
this.numeroconto=numeroconto;
this.intestatario=intestatario;
this.saldo=saldo;


}

deposita(somma)
{


    this.saldo+=somma;




}

preleva(somma)
{

this.saldo=this.saldo-somma;

}


visualizzaSaldo()
{

console.log(this.saldo)

}

calcolaInteressi()
{
 

//console.log((this.saldo/100)*1 + ' Euro')
console.log((this.saldo*0.01) + ' Euro')
}

}


let Conto1 = new ContoClass

let Conto2 = new ContoClass

let Conto3 = new ContoClass

Conto1.intestatario="Laura"
Conto1.numeroconto="1111111111";
Conto1.saldo=1000;


console.log('SALDO')
Conto1.visualizzaSaldo();


console.log('DEPOSITA')
Conto1.deposita(100);
Conto1.visualizzaSaldo();

console.log('PRELEVA')
Conto1.preleva(200);
Conto1.visualizzaSaldo();





console.log('INTERESSI:')
Conto1.calcolaInteressi();






/****** */

Conto2.intestatario="pippo"
Conto2.numeroconto="1111111111";
Conto2.saldo=500;


console.log('SALDO')
Conto2.visualizzaSaldo();


console.log('DEPOSITA')
Conto2.deposita(100);
Conto2.visualizzaSaldo();

console.log('PRELEVA')
Conto2.preleva(200);
Conto2.visualizzaSaldo();

/***** */

Conto3.intestatario="pluto"
Conto3.numeroconto="1111111111";
Conto3.saldo=800;


console.log('SALDO')
Conto3.visualizzaSaldo();


console.log('DEPOSITA')
Conto3.deposita(100);
Conto3.visualizzaSaldo();

console.log('PRELEVA')
Conto3.preleva(200);
Conto3.visualizzaSaldo();



let array_oggetti_new=[Conto1,Conto2,Conto3]


array_oggetti_new.forEach(function(a)

{
console.log( a)


}



)


















//NUOVO METODO ES5 JS

//prima lettera maiuscola
//singolare
//inglese

function Person(firstname,lastname,age)

{

this.firstname=firstname;
this.lastname=lastname;
this.age=age;
this.printAge= function()
{
console.log(this.age)

}
this.getIndex=function(indice)
{
console.log('Posizione ' + indice)

}
}


//crea istanza oggetto Person


let persona3= new Person('Laura','Carbognin','18');
let persona4= new Person('xx','xxxxxxx','30');

let persona5= new Person

persona5.firstname='prova'
persona5.age=32;
persona5.printAge();



console.log(persona3,persona4)


let gruppo = [persona3,persona4,new Person('PIPPO','PLUTO','18'),persona5]

//stampa contenuti


gruppo.forEach(function(persona,posizione)

{

    
   
    persona.getIndex(posizione);
    console.log(persona);
    persona.printAge();



}

)






//definizione oggetti key:valore
//VECCHIO METODO





let persona1 = {

    nome:'Laura', //proprieta
    cognome:'Carbognin',
    status:true,
    nazione:"IT",
    age:null,

    stampaEta:function() {
        if (this.age)
        {return this.age;}
        else
         {return ('non si sa');}
       
    
    } //metodo

};




let persona2 = {

    nome:'pippo',
    cognome:'pluto',
    status:true,
    nazione:"IT",
    age:20,

    stampaEta:function() {
        if (this.age)
        
        {return this.age;}
        else
         {return ('non si sa');}

        

    }
};

/*let products;

products=fetch('https://fakestoreapi.com/products');*/



let array_oggetti=[persona1,persona2];

//lettura array di oggetti

array_oggetti.forEach(function(a)
{

 
   console.log(a.stampaEta())


}


)
/*
products.forEach(function(a)
{

    console.log(a)

}


)*/



//console.log(persona.cognome,persona.nazione)


let objlibro=

{

    titolo:"Libro Prova",
    autore:"Pippo",
    pagine:380,
    letto:'si',

    Viewinfo:function()
    {

        console.log(this.titolo,this.autore,this.pagine,' Letto:' + this.letto)

    }
,
    CalcolaTempo:function()
    {

        let tempo=380*2;

        let ore=tempo/60;

        let resto=tempo%60;

        

        console.log('Tempo lettura:' + tempo + ' Minutes...' + parseInt(ore)  + ' Ore e ' + resto + '  Minuti')



    }


}

objlibro.Viewinfo();

objlibro.CalcolaTempo();





