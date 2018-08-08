const rutaImg = "img/"
var guardoCumplesJson = JSON.parse(localStorage.getItem("guardoCumplesJson"));  
var listaCumples = guardoCumplesJson.listaCumples; 
var listaLength = guardoCumplesJson.total;  

if (listaCumples == null) {
  console.log("No existen cumpleaños guardados")
}
else {
  listaCumples.forEach(function(element) {
    console.log(element.nombre);
  })
}

function proximosCumples() {
  $.each(listaCumples, function(index, element) { 
    let fecha = element.fecha.substring(4,12);
    let li = $(`<li><span>${fecha}</span> - <span>${element.nombre}</span></li>`);
    let deleteCumple = $(`<button class="borrarCumple" data-id="${index}">x</button>`);
    li.append(deleteCumple); 
    $("#cumples").append(li); 

    deleteCumple.on("click", function(e) { 
      e.preventDefault();
      let indice = $(this).data("id");
      $(this).closest("li").remove(); 
      listaCumples.splice(indice, 1); 
      listaLength = listaCumples.length; 
      localStorage.setItem("guardoCumplesJson", JSON.stringify(guardoCumplesJson)); 
      listaCumples.forEach(function(e) {
      })
      console.log(guardoCumplesJson.total);
    });
});


}

function cumpleDeHoy() {
  let indice = Math.floor(Math.random() * listaCumples.length); 
  let cumpleHoyImg = listaCumples[indice].imagen;
  let cumpleHoyName = listaCumples[indice].nombre;
  let h1 = `<h1>${cumpleHoyName}</h1>`;
  let img = `<img src='${rutaImg}Lego ${cumpleHoyImg}.png'>`;

  $("#cumpleDiaImg").append(h1);
  $("#cumpleDiaImg").append(img);

}
proximosCumples();
cumpleDeHoy();