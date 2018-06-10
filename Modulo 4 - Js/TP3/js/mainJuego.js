var selectLevel = document.getElementById('nivel').value; 
console.log (selectLevel);

var nivelSelect={
  'nivel': selectLevel;
}

var data=JSON.stringify(nivelSelect);
localStorage.setItem('seleccion', data);
