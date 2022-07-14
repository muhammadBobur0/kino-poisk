

let elList = document.querySelector(".list")
let form = document.querySelector(".form")
let input = document.querySelector('.input')
let danger = document.querySelector(".get")



async function elAdd(post){
  let response = await fetch(`https://www.omdbapi.com/?apikey=6e537db6&s=${post}`);
  let data = await response.json();
  if(data.Error){
    danger.textContent = "kino topilmadi"
    return

  }else{
    creat(data, elList)

  }
  
}



function creat(array, node) {
  node.innerHTML = "";
  let serach =  array.Search
  for (poc of serach) {
    var newitam = document.createElement("li");
    var elimg = document.createElement("img");
    var elid = document.createElement("span");
    var elnum = document.createElement("h2");
    var elcan = document.createElement("span");
    var elegg = document.createElement("span");
    var elegg = document.createElement("span");
    
    newitam.setAttribute("class", "iteam");
    node.appendChild(newitam);
    newitam.appendChild(elimg);
    newitam.appendChild(elid);
    newitam.appendChild(elnum);
    newitam.appendChild(elcan);
    newitam.appendChild(elegg);
    
    
    Number(elegg);
    elid.textContent = `id: ${poc.imdbID}`;
    elnum.textContent = ` ${poc.Title}`;
    elimg.src = `${poc.Poster}`;
    elimg.setAttribute("alt", "movies");
    elimg.setAttribute("class", "img");
    elimg.setAttribute("with", "500");
    elimg.setAttribute("height", "750");
    elcan.textContent = `year: ${poc.Year} `;
    elegg.textContent = `Type: ${poc.Type} `;
    elnum.setAttribute("class", "tittle");
  }
}

form.addEventListener('submit', function(evt){
  evt.preventDefault()
  let val = input.value
  elAdd(val)
  
  
})




