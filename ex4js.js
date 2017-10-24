function ex4(){
  var lastname = document.getElementById('nom').value;
  var firstname = document.getElementById('prenom').value;
  var town = document.getElementById('ville').value;
  result = 'Bonjour monsieur '+ firstname + lastname +', '+ town;
  alert(result);
}
