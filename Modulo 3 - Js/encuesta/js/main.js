$(document).ready(function(e){
	$.ajax({
	  method: "get",
	  url: "https://mariabelenalegre.com/encuenta/api.php"
	  
	  })
	  .done(function( data ) {
	    console.log(response); 
	    var ul = $('#resultados');
	    console.log(ul);
		$.each(response,function(index,elem){
			console.log(elem);
			let li = `<li><h2>${elem.name}</h2><p><span>${elem.email}</span></p><p>${elem.body}</p></li>`;
			console.log(li);
			ul.append(li);

		});

	  });

});	  