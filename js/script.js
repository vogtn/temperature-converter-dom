
//on submit activate this function
function handleConvert() {
  var temp = document.getElementById('temp').value;
  var Faren = document.getElementById('F');


  if(Faren.checked == true){
    convertFaren();
  }else{
    convertCels();
  }

  function convertFaren(){
    var converted = ((temp-32) * (5/9));
    document.getElementById('newConvert').innerHTML = converted + " Degrees Celcius";
  }
  function convertCels(){
    var converted = ((temp * 9/5) +(32));
    document.getElementById('newConvert').innerHTML = converted + " Degrees Farenheit";
  }

}
