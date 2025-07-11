
function ScegliViaggio(img)

{

let viaggi=[
    
    {img:'orosei.jpg',titolo:'Sardegna da urlo',descrizione:'Mare turchese e trasparente',articolo:'articolo1.html'},
     {img:'dolomiti.jpg',titolo:'Abbasso il caldo',descrizione:'Pace e verde ovunque',articolo:'articolo2.html'},
      {img:'como.jpg',titolo:'A un passo da Milano',descrizione:'Passeggia lungo il lago e visita la citta',articolo:'articolo3.html'}


    
];

const articolo=document.getElementById("articolo");

//const htmlelements=viaggi.map(viaggio => `<img src=${img}>`).join();



let trovato=viaggi.find(viaggio => viaggio.img === img);



console.log(trovato.articolo);

if (trovato !=null)
{
window.location=trovato.articolo;

}



}