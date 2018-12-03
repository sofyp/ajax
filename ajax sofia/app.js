const nappi = document.getElementById('hakunappi');

console.log('alku');

nappi.addEventListener('click', (evt) => {
  const search = document.getElementById('etsi').value;

  fetch('http://api.tvmaze.com/search/shows?q=' + search).then((vastaus) => {
    return vastaus.json();
  }).then((json) => {
    //naytaOhjelma(json);
    tulostaKaikki(json);
  }).catch((error) => {
    console.log(error);
  });
});

function tulostaKaikki(k) {
  let nimi, linkki, kuva, kuvaus = '';
  for (let e = 0; e < k.length - 1; e++) {
    nimi = k[e].show.name;
    linkki = k[e].show.officialSite;
    kuvaus = k[e].show.summary;
    console.log('kierros');

    let divi = document.createElement('DIV');
    document.getElementById('tulos').appendChild(divi);
    try {
      kuva = k[e].show.image.medium;
      let image = document.createElement('IMG');
      image.setAttribute('src', kuva);
      divi.appendChild(image);
    } catch {
      let korvaus= document.createElement('IMG');
      korvaus.setAttribute('src= "/img/noimage.jpg"');
      divi.appendChild(korvaus);
      console.log('no img');
    }
    let name = document.createElement('h1');
    divi.appendChild(name);
    let link = document.createElement('a');
    link.setAttribute("href", linkki);
    divi.appendChild(link);
    let summary = document.createElement('p');
    divi.appendChild(summary);
    let gen = document.createElement('h5');
    divi.appendChild(gen);

    name.innerHTML = nimi;
    link.innerHTML = linkki;
    summary.innerHTML = kuvaus;
    gen.innerHTML = tulostaGenre(k);


  }
};

function tulostaGenre(k) {
  for (r=0; r < k.length-1; r++) {
    let genre = k[r].show.genres;
    return genre;
  }
  ;
};

/*

function naytaOhjelma(i){
  let nimi, linkki, kuva, kuvaus= ''; //poista muut paitsi nimi
  for (let e=0; e<i.length; e++){
    nimi= i[e].show.name;
    linkki= i[e].show.officialSite;//poista
    kuva= i[e].show.image.medium;//poista
    kuvaus= i[e].show.summary;//poista
    console.log(nimi);
    console.log(linkki);//poista
    console.log(kuva);//poista
    console.log(kuvaus);//poista
    //document.write(nimi + linkki); //poista linkki
  };
  console.log(i);

}
*/

/* console.log('alku1');
  fetch('http://api.tvmaze.com/singlesearch/shows?q=' + search)
  .then((tulo)=>{return tulo.json();
  }).then((json)=>{
    tulostaSivulleYksi(json);
  }).catch((error)=>{
    console.log(error + ' error 2');
  });*/

/*

function naytaOhjelma(i){
 let nimi, linkki, kuva, kuvaus= ''; //poista muut paitsi nimi
 for (let e=0; e<i.length; e++){
  nimi= i[e].show.name;
   linkki= i[e].show.officialSite;//poista
   kuva= i[e].show.image.medium;//poista
   kuvaus= i[e].show.summary;//poista
   console.log(nimi);
   console.log(linkki);//poista
   console.log(kuva);//poista
   console.log(kuvaus);//poista
   //document.write(nimi + linkki); //poista linkki
 };
 console.log(i);
}*/

/*function tulostaSivulleYksi(t) {
  console.log('väli');
  let nimi= t.name;
  let linkki= t.officialSite;
  let kuva= t.image.medium;
  let selostus= t.summary;
  tulos.innerHTML= nimi + "<br>" + linkki+ "<br>" +"<img src=" + kuva +">" + "<br>" + selostus;
};*/

/*let divi = document.createElement("DIV");
  let image = document.createElement("IMG");
  image.setAttribute("src", kuva);
  document.getElementById("tulos").appendChild(image);

  let teksti= document.createTextNode(nimi +  linkki + kuvaus);
  divi.appendChild(teksti);
  document.getElementById("tulos").appendChild(divi);*/