var guardoCumplesJson = JSON.parse(localStorage.getItem("guardoCumplesJson")) 
var listaCumples = guardoCumplesJson.listaCumples; 

if (guardoCumplesJson == null || guardoCumplesJson == undefined) {
    listaCumples = []; 
}
else {
    listaCumples.forEach(function(e) {
        console.log(e.nombre); 
    })
}

$("img").on("click", function(e) { 
    e.preventDefault();
    let imgName = $(this).data("nombre");
    $("#imgName").val(imgName);
})


$("button").on("click", function(e) { 
    e.preventDefault();
    let homejeada = { 
        'nombre': $("#name").val(),
        'fecha':  $("#date").val(),
        'imagen': $("#imgName").val()
    };

    listaCumples.push(homejeada); 

    guardoCumplesJson = { 
        'listaCumples': listaCumples,
        'total': listaCumples.length
    };

    let jsonCumpleString = JSON.stringify(guardoCumplesJson); 
    localStorage.setItem("guardoCumplesJson", jsonCumpleString); 
});

