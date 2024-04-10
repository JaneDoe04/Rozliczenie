let dodaj_firme_button = document.querySelector('#nowa_firma_button');
let dodaj_firme_input = document.querySelector('#nowa_firma_input');
let nowy_pracownik_div = document.querySelector('#nowy_pracownik_div');
let nowy_pracownik_button = document.querySelector('#nowy_pracownik_button');
let usun_pracownikow_button = document.querySelector('#usun_pracownikow');
let usun_button = document.querySelectorAll('.usun_button');
const modal_window = document.querySelector('.modal');
const delecior = document.querySelector('.delecior');
delecior.addEventListener('click', (e)=>{
e.preventDefault();
modal_window.style.display='flex';


const selectElement  = document.querySelector('select');
const selectedIndex = selectElement.selectedIndex;
const selectedOptionText = selectElement.options[selectedIndex].text;
document.querySelector('.firma_delete').textContent = selectedOptionText


})
modal_window.addEventListener('click', (e)=>{
  console.log(e.target.classList);
  if(e.target.classList.contains('akccept')){

  }else if(e.target.classList.contains('zgoda')){
const id = document.querySelector('select').value;  
document.querySelector('.akccept').innerHTML=`<form action='baza.php' method='post' class='dziadostwo'><input type='hidden' value='${id}' name='usuwanie_firmy'></form>`    
document.querySelector('.dziadostwo').submit();
  }else{
    modal_window.style.display='none';

  }
})

dodaj_firme_input.addEventListener('keyup', ()=>{
  if(dodaj_firme_input.value!=""){
    dodaj_firme_button.disabled=false;
  }else{
    dodaj_firme_button.disabled=true;
  }
});


nowy_pracownik_button.addEventListener('click', ()=>{
  nowy_pracownik_div.innerHTML = "<form action='baza.php' method='post'>"+
  "<input type='text' name='imie' placeholder='Imię'>"+   
  "<input type='text' name='urodziny' placeholder='rok urodzenia rrrr-mm-dd'>"+   
  //"<input type='text' name='koszt_przychodu' placeholder='koszt uzyskania przychodu'>"+
  "Koszt uzyskania przychodu:<input type='radio' name='koszt_przychodu' value='0' checked class='checkmark'>0"+
  "<input type='radio' name='koszt_przychodu' value='250' class='checkmark'>250"+
  "<input type='radio' name='koszt_przychodu' value='300' class='checkmark'>300"+
  

  "<input type='hidden' name='nazwa_firmy' value='"+ document.querySelector('.id_firmy').value+"'>"+   
  "<input type='submit' name='dodaj_pracownika' value='dodaj'>"+   
  "</form>";
})

usun_pracownikow_button.addEventListener('click', ()=>{
  usun_button.forEach(el => {
    if(el.type=="hidden"){
      el.type="submit";
    }else{
      el.type="hidden";
    }
  });

})
document.querySelector('.aktualka').addEventListener('click', ()=>{document.querySelectorAll('.edytuj_btn').forEach(el=>{
  if(el.type=="hidden"){
    el.type="submit";
  }else{
    el.type="hidden";
  }
})

})
