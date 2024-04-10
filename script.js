const selektor_firmowy = document.querySelector('.select_firmowy');
const przyciski_strony1 = document.querySelectorAll('.btn_arkusz1');
const strony_arkusza1 = document.querySelectorAll('.strona_arkusz1');
const opcje_selekta_firmowego = document.querySelectorAll('.opcja_selekta_firmowego');
const wybor_pracownika_select = document.querySelector('.wybor_pracownika');
const arkusz3_sciezka = document.querySelector('.arkusz3_sciezka');
const komorki = document.querySelectorAll('.dane_4TRANS .komorka span');
const licz_brutto = document.querySelector('.licz_brutto');
const robusy = document.querySelectorAll('.liczba_roboli');
// if(robusy[0]){
//     if(robusy[0].innerHTML!=robusy[1].innerHTML){
//         alert('Ilosc plikow 4TRANS oraz liczba pracownikow w pliku sanitaryjnym sie nie zgadza!');
    
//     }else{
//         if(robusy[0]&&robusy[1])
//         robusy[0].style.color=robusy[1].style.color = 'green';
//     }
// }


const notatka = document.querySelector('.notatka');
const przechowywacz =document.querySelector('.przechowywacz');

if(przechowywacz){
    notatka.value = przechowywacz.value
}
if(notatka){
    notatka.textContent=notatka.textContent;
    notatka.addEventListener('input', function() {
    const zmienna = notatka.value;
        notatka.value = zmienna;
    przechowywacz.setAttribute('value', notatka.value);
    
});
}






let wynagrodzenie_zasadnicze = document.querySelector('.dane_4TRANS .wynagrodzenie_zasadnicze');
let dodatki_za_czas_pracy_w_godz_nocnych = document.querySelector('.dodatki_za_czas_pracy_w_godz_nocnych');
let wynagrodzenie_normalne_nadliczbowe_50 = document.querySelector('.wynagrodzenie_normalne_nadliczbowe_50');
let wynagrodzenie_normalne_nadliczbowe_100 = document.querySelector('.wynagrodzenie_normalne_nadliczbowe_100');
let dodatki_nadliczbowe_50 = document.querySelector('.dodatki_nadliczbowe_50');
let dodatki_nadliczbowe_100 = document.querySelector('.dodatki_nadliczbowe_100');
let wynagrodzenie_za_czas_platny_ponad_plan = document.querySelector('.wynagrodzenie_za_czas_platny_ponad_plan');
let ryczalt_za_czas_pracy_w_nocy = document.querySelector('.ryczalt_za_czas_pracy_w_nocy');
let zaliczka_za_czas_dyzurow = document.querySelector('.zaliczka_za_czas_dyzurow');
let ryczalt_za_godziny_nadliczbowe = document.querySelector('.ryczalt_za_godziny_nadliczbowe');
let wyrownanie_za_ryczalty_za_czas_pracy_w_nocy = document.querySelector('.wyrownanie_za_ryczalty_za_czas_pracy_w_nocy');
let wyrownanie_za_zaliczki_za_czas_dyzurow = document.querySelector('.wyrownanie_za_zaliczki_za_czas_dyzurow');
let wyrownanie_za_ryczalty_za_godziny_nadliczbowe = document.querySelector('.wyrownanie_za_ryczalty_za_godziny_nadliczbowe');
let podstawowe_skladniki_wynagrodzenia_z_okresu_rozliczeniowego = document.querySelector('.podstawowe_skladniki_wynagordzenia_z_okresu_rozliczeniowego');
let wyrownanie_wynagrodzenia = document.querySelector('.wyrownanie_wynagrodzenia')
let informacje_kopiowane_do_podsumowania = document.querySelector('.czesc_druga .komorka:nth-child(1) span');
let wynagrodzenie_zasadnicze_dwa = document.querySelector('.czesc_druga .komorka:nth-child(2) span');
let ryczalt_za_nadgodziny = document.querySelector('.dane_4TRANS .czesc_druga .komorka:nth-child(3) span');
let ryczalt_za_godziny_nocne = document.querySelector('.dane_4TRANS .czesc_druga .komorka:nth-child(4) span');
let wynagrodzenie_za_dyzur = document.querySelector('.czesc_druga .komorka:nth-child(5) span');
let premie_inne = document.querySelector('.dane_4TRANS .czesc_druga .komorka:nth-child(6) span');
let wynagrodzenie_sektorowe_4trans= document.querySelector('.dane_4TRANS .czesc_druga .komorka:nth-child(7) span');
let wynik_na_ewidencji_czasu_pracy_4TRANS = document.querySelector('.czesc_druga .komorka:nth-child(8) span');
let dodatki = document.querySelector('.czesc_druga .komorka:nth-child(9) span');

const zapisy = document.querySelectorAll('.formularz');
const zapisy2 =document.querySelectorAll('.saved');
const testowanie = document.querySelectorAll('.testowanie');

if(zapisy2[1]){
    zapisy2[1].remove();
}

if(zapisy[1]){
zapisy[1].style.display='none';
}
if(testowanie[0].classList.contains("saved")){
  document.querySelector('.formularz').submit();
}
const inputElement = document.querySelector('.wynagrodzenie_brutto');




// Dodanie obsługi zdarzenia dla zmiany wartości
if(inputElement){
    inputElement.addEventListener('input', function() {
    // Aktualizacja wartości atrybutu value
    inputElement.setAttribute('value', inputElement.value);
});
}


let zmienna_emerytalna = document.querySelector('.zmienna_emerytalna');
let zmienna_rentowa = document.querySelector('.zmienna_rentowa');
let zmienna_chorobowa = document.querySelector('.zmienna_chorobowa');
let zmienna_zdrowotna = document.querySelector('.zmienna_zdrowotna');
let zmienna_fp = document.querySelector('.zmienna_fp');
let zmienna_fgsp = document.querySelector('.zmienna_fgsp');

const zapisywanie_strony_btn = document.querySelector('.zapisywanie_strony');
const PIT2wynagrodzenieZaDyzur = document.querySelector('.lad_i_pit2 .wynagrodzenie_za_dyzur');
const BEZ_PIT2wynagrodzenieZaDyzur = document.querySelector('.lad_bez_pit2 .wynagrodzenie_za_dyzur');


document.querySelector
class App{
    wynagrodzenie_za_dyzur = 0;
    constructor(){
        if(licz_brutto){
            licz_brutto.addEventListener('click', this.pal_wszystko.bind(this))
        }
        if(wynik_na_ewidencji_czasu_pracy_4TRANS){
    this.pal_wszystko();
        }
      

        if(opcje_selekta_firmowego)
        this.foldery_wykluczone();
        przyciski_strony1.forEach((el)=>{
            el.addEventListener('click',this.zmien_strone.bind(this))
        })
        if(wybor_pracownika_select){

            this.automat_sciezka_excel3(wybor_pracownika_select.value);
            wybor_pracownika_select.addEventListener('click', this.sciezka_excel3)

        }
        if(zapisywanie_strony_btn){
            zapisywanie_strony_btn.addEventListener('click', this.zapisywanie_strony)
        }
        if(komorki){
            this.koloruj_komorki();
        }
    }
    zapisywanie_strony(){
        let strona =document.querySelector('body').innerHTML;
        strona = strona.split('</nav>');


        document.querySelector('.zrodlostrony').value = strona[strona.length-1];

        document.querySelector('.syfon_do_wyslania').submit();
        
    }
    pal_wszystko(){
        this.znajdz_wynagrodzenie_za_dyzur()
        this.znajdz_wynik_na_ewidencji_czasu_pracy_4TRANS()
        this.znajdz_ryczalt_za_godziny_nocne()
        this.znajdz_ryczalt_za_nadgodziny()
        this.znajdz_wynagrodzenie_sektorowe_4TRANS()
        this.znajdz_dodatki()
        this.jaka_ulga_do_oddelegowania()
    }
    zmien_strone(e){
        strony_arkusza1.forEach((el)=>{
            el.style.display='none';
        })
        strony_arkusza1[e.target.value-1].style.display='flex';
        
    }
    foldery_wykluczone(){
        opcje_selekta_firmowego.forEach((el)=>{
            if(el.value.includes('_-_')){
                el.style.display='none';
            }
        })
    }
    sciezka_excel3(e) {
        app.transformuj_nazwe_pracownika(e.target.value);
   
    }
    automat_sciezka_excel3(sciezka) {
    
        this.transformuj_nazwe_pracownika(sciezka);
 
    }
    koloruj_komorki(){
    
        komorki.forEach(el=>{
            if(el.innerHTML==0||!el.innerHTML){
                el.closest('.komorka').classList.add('przyciemnij');
            }})
    }
    transformuj_nazwe_pracownika(sciezka) {



        
    
        arkusz3_sciezka.value = sciezka;
 

    }
    znajdz_wynagrodzenie_za_dyzur(){
        if(document.querySelector('.dane_4TRANS .wynagrodzenie_za_dyzur')){
           this.wynagrodzenie_za_dyzur =  wyrownanie_za_zaliczki_za_czas_dyzurow.innerHTML*1 + zaliczka_za_czas_dyzurow.innerHTML*1;
           document.querySelector('.dane_4TRANS .wynagrodzenie_za_dyzur').innerHTML = this.wynagrodzenie_za_dyzur.toFixed(2);



        }
    }

    znajdz_wynik_na_ewidencji_czasu_pracy_4TRANS(){
        let siano=0;
        [...document.querySelectorAll('.razem_siano')].forEach(value=>
          siano+=value.innerHTML*1
        )
        document.querySelectorAll('.zagraniczne').forEach(el=>{
            if(el.innerHTML!=''){
                siano+=el.innerHTML*1;

            }
        })
   
        wynik_na_ewidencji_czasu_pracy_4TRANS.innerHTML=siano.toFixed(2);
    }
    znajdz_ryczalt_za_godziny_nocne(){
        ryczalt_za_godziny_nocne.innerHTML = ryczalt_za_czas_pracy_w_nocy.innerHTML*1 +wyrownanie_za_ryczalty_za_czas_pracy_w_nocy.innerHTML*1
       
    }
    znajdz_ryczalt_za_nadgodziny(){
        ryczalt_za_nadgodziny.innerHTML =  ryczalt_za_godziny_nadliczbowe.innerHTML*1 + wyrownanie_za_ryczalty_za_godziny_nadliczbowe.innerHTML*1;
    }
    znajdz_wynagrodzenie_sektorowe_4TRANS(){
        const zagraniczne = document.querySelectorAll('.zagraniczne');
  
       let kwota =  0;
       zagraniczne.forEach((el)=>{
            kwota += el.innerHTML*1;
        })

        wynagrodzenie_sektorowe_4trans.innerHTML = kwota.toFixed(2);
    }  
    znajdz_dodatki(){
const dodatki_pit = document.querySelector('.lad_i_pit2 .dodatki');
const xd = (this.wynagrodzenie_za_dyzur)*1;
dodatki_pit.innerHTML =
        ((wynik_na_ewidencji_czasu_pracy_4TRANS.innerHTML*1)-
        (wynagrodzenie_sektorowe_4trans.innerHTML*1)-
        (premie_inne.innerHTML*1)-
        (ryczalt_za_nadgodziny.innerHTML*1)-
        ( ryczalt_za_godziny_nocne.innerHTML*1)-
        (wynagrodzenie_zasadnicze.innerHTML*1)
        -(document.querySelector('.dane_4TRANS .premia_zagraniczna_sektorowa ').innerHTML*1)).toFixed(2)-xd 

document.querySelector('.dane_4TRANS .dodatki').innerHTML =   ((wynik_na_ewidencji_czasu_pracy_4TRANS.innerHTML*1)-
(wynagrodzenie_sektorowe_4trans.innerHTML*1)-
(premie_inne.innerHTML*1)-
(ryczalt_za_nadgodziny.innerHTML*1)-
( ryczalt_za_godziny_nocne.innerHTML*1)-
(wynagrodzenie_zasadnicze.innerHTML*1)
-(document.querySelector('.dane_4TRANS .premia_zagraniczna_sektorowa ').innerHTML*1)).toFixed(2)-xd 

    }
    jaka_ulga_do_oddelegowania(){
        if(document.querySelector('.Jaka_ulga_do_oddelegowania').value==''){
            const pracownik = document.querySelector('.kierowca').innerHTML
            document.querySelectorAll('.pracownik').forEach(el=>{
                if(el.innerHTML.toUpperCase().includes(pracownik)){
             
                    document.querySelector('.Jaka_ulga_do_oddelegowania').value = el.querySelector('.dieta_zagraniczna').innerHTML;
               
                    document.querySelector('.lad_bez_pit2 .ulga_do_oddelegowania') .innerHTML = el.querySelector(' .dieta_zagraniczna').innerHTML;
                }
            })
        }else{
            document.querySelector('.lad_bez_pit2 .ulga_do_oddelegowania') .innerHTML = document.querySelector('.Jaka_ulga_do_oddelegowania').value 
        }
 
    }
  

}
const app = new App;

const dane4TRANSWynagrodzenieZasadnicze = document.querySelector('.dane_4TRANS .wynagrodzenie_zasadnicze');
const dane4TRANSPremiaRegulaminowa =  document.querySelector('.dane_4TRANS .premia_regulaminowa');

const PIT2jakiesgowno = document.querySelector('.jakies_gowno');
const PIT2jakiesgowno2 = document.querySelector('.jakies_gowno2');
const PIT2jakiesgowno3 = document.querySelector('.jakies_gowno3');


const PIT2wynagrodzenieBrutto = document.querySelector('.lad_i_pit2 .wynagrodzenie_brutto');
const PIT2wynagrodzenieBruttoDwa = document.querySelector('.lad_i_pit2  .brutto_dwa');
const PIT2wynagrodzenieBruttoDwa2 = document.querySelector('.lad_i_pit2  .brutto_dwa2');
const PIT2wynagrodzenieBruttoDwa3 = document.querySelector('.lad_i_pit2  .brutto_dwa3');

const PIT2ulgaDoOddelegowania = document.querySelector('.lad_i_pit2 .ulga_do_oddelegowania');
const PIT2wynagrodzenie_netto = document.querySelector('.lad_i_pit2 .wynagrodzenie_netto');
const PIT2wynagrodzenieZasadnicze = document.querySelector('.lad_i_pit2 .wynagrodzenie_zasadnicze');

const PIT2premieInne = document.querySelector('.lad_i_pit2 .premie_inne');
const PIT2ryczaltZaNadgodziny = document.querySelector('.lad_i_pit2 .ryczalt_za_nadgodziny');
const PIT2ryczaltZaGodzinyNocne = document.querySelector('.lad_i_pit2 .ryczalt_za_godziny_nocne');
const PIT2dodatki = document.querySelector('.lad_i_pit2 .dodatki');
const PIT2wynagrodzenieChorobowe = document.querySelector('.lad_i_pit2 .wynagrodzenie_chorobowe');
const PIT2wynagrodzenieUrlopowe = document.querySelector('.lad_i_pit2 .wynagrodzenie_urlopowe');
const PIT2suma = document.querySelector('.lad_i_pit2 .suma');
const PIT2ulgaDlaKlasySredniej = document.querySelector('.lad_i_pit2 .ulga_dla_klasy_sredniej');
const PIT2kosztUzyskaniaPrzychodu = document.querySelector('.lad_i_pit2 ._koszt_uzyskania_przychodu');
const PIT2placaZagranicznaDo5922 = document.querySelector('.lad_i_pit2 .placa_zagraniczna_do_5922');
const PIT2placaZagranicznaUlgazus = document.querySelector('.lad_i_pit2 .placa_zagraniczna_ulga_zus');
const PIT2placaZagranicznaUlgazusipit = document.querySelector('.lad_i_pit2 .placa_zagraniczna_ulga_zus_i_pit');
const PIT2ulgaDoLat26 = document.querySelector('.lad_i_pit2 .ulga_do_lat_26');




const LAD_I_PIT2_PodsumowanieI4_emerytalna = document.querySelector('.lad_i_pit2 .emerytalna');
const LAD_I_PIT2_PodsumowanieI4_rentowa = document.querySelector('.lad_i_pit2 .rentowa');
const LAD_I_PIT2_PodsumowanieI4_chorobowa = document.querySelector('.lad_i_pit2 .chorobowa');
const LAD_I_PIT2_PodsumowanieI4_podstawa_wymiaru_skladki_zdrowotnej = document.querySelector('.lad_i_pit2 .podstawa_wymiaru_skladki_zdrowotnej');
const LAD_I_PIT2_PodsumowanieI4_zdrowotna = document.querySelector('.lad_i_pit2 .zdrowotna');
const LAD_I_PIT2_PodsumowanieI4_koszt_uzyskania_przychodu = document.querySelector('.lad_i_pit2 .koszt_uzyskania_przychodu');
const LAD_I_PIT2_PodsumowanieI4_ulga_klasa_srednia = document.querySelector('.lad_i_pit2 .ulga_klasa_srednia');
const LAD_I_PIT2_PodsumowanieI4_podstawa_wymiaru_podatku = document.querySelector('.lad_i_pit2 .podstawa_wymiaru_podatku');
const LAD_I_PIT2_PodsumowanieI4_podstawa_wymiaru_podatku_po_zaokragleniu = document.querySelector('.lad_i_pit2 .podstawa_wymiaru_podatku_po_zaokragleniu');
const LAD_I_PIT2_PodsumowanieI4_kwota_zmniejszająca_podatek = document.querySelector('.lad_i_pit2 .Kwota_zmniejszajaca_podatek');
const LAD_I_PIT2_PodsumowanieI4_zaliczka_na_podatek = document.querySelector('.lad_i_pit2 .zaliczka_na_podatek');
const LAD_I_PIT2_PodsumowanieI4_zaliczka_na_podatek_po_zaokragleniu = document.querySelector('.lad_i_pit2 .zaliczka_na_podatek_po_zaokragleniu');
const LAD_I_PIT2_PodsumowanieI4_wynagrodzenie_netto = document.querySelector('.lad_i_pit2 .czesc_druga .wynagrodzenie_netto');
const LAD_I_PIT2_PodsumowanieI4_wynagrodzenie_netto_do_26_lat = document.querySelector('.lad_i_pit2 .wynagrodzenie_netto_do_26_lat');
const LAD_I_PIT2_PodsumowanieI4_emerytalne = document.querySelector('.lad_i_pit2 .emerytalne');
const LAD_I_PIT2_PodsumowanieI4_rentowe = document.querySelector('.lad_i_pit2 .rentowe');
const LAD_I_PIT2_PodsumowanieI4_wypadkowe = document.querySelector('.lad_i_pit2 .wypadkowe');
const LAD_I_PIT2_PodsumowanieI4_FP = document.querySelector('.lad_i_pit2 .FP');
const LAD_I_PIT2_PodsumowanieI4_FGSP = document.querySelector('.lad_i_pit2 .FGSP');
const LAD_I_PIT2_PodsumowanieI4_koszt_calkowity_pracodawcy = document.querySelector('.lad_i_pit2 .koszt_calkowity_pracodawcy');
const LAD_I_PIT2_PodsumowanieI4_Zastosowanie = document.querySelector('.lad_i_pit2 .zastosowanie');

const LAD_I_PIT2_DietaUS_emerytalna = document.querySelector('.lad_i_pit2 .dieta_do_us .emerytalna');
const LAD_I_PIT2_DietaUS_rentowa = document.querySelector('.lad_i_pit2 .dieta_do_us .rentowa');
const LAD_I_PIT2_DietaUS_chorobowa = document.querySelector('.lad_i_pit2 .dieta_do_us .chorobowa');
const LAD_I_PIT2_DietaUS_podstawa_wymiaru_skladki_zdrowotnej = document.querySelector('.lad_i_pit2 .dieta_do_us .podstawa_wymiaru_skladki_zdrowotnej');
const LAD_I_PIT2_DietaUS_zdrowotna = document.querySelector('.lad_i_pit2 .dieta_do_us .zdrowotna');
const LAD_I_PIT2_DietaUS_koszt_uzyskania_przychodu = document.querySelector('.lad_i_pit2 .dieta_do_us .koszt_uzyskania_przychodu');
const LAD_I_PIT2_DietaUS_ulga_klasa_srednia = document.querySelector('.lad_i_pit2 .dieta_do_us .ulga_klasa_srednia');
const LAD_I_PIT2_DietaUS_podstawa_wymiaru_podatku = document.querySelector('.lad_i_pit2 .dieta_do_us .podstawa_wymiaru_podatku');
const LAD_I_PIT2_DietaUS_podstawa_wymiaru_podatku_po_zaokragleniu = document.querySelector('.lad_i_pit2 .dieta_do_us .podstawa_wymiaru_podatku_po_zaokragleniu');
const LAD_I_PIT2_DietaUS_kwota_zmniejszająca_podatek = document.querySelector('.lad_i_pit2 .dieta_do_us .Kwota_zmniejszajaca_podatek');
const LAD_I_PIT2_DietaUS_zaliczka_na_podatek = document.querySelector('.lad_i_pit2 .dieta_do_us .zaliczka_na_podatek');
const LAD_I_PIT2_DietaUS_zaliczka_na_podatek_po_zaokragleniu = document.querySelector('.lad_i_pit2 .dieta_do_us .zaliczka_na_podatek_po_zaokragleniu');
const LAD_I_PIT2_DietaUS_wynagrodzenie_netto = document.querySelector('.lad_i_pit2 .dieta_do_us .wynagrodzenie_netto');
const LAD_I_PIT2_DietaUS_wynagrodzenie_netto_do_26_lat = document.querySelector('.lad_i_pit2 .dieta_do_us .wynagrodzenie_netto_do_26_lat');
const LAD_I_PIT2_DietaUS_emerytalne = document.querySelector('.lad_i_pit2 .dieta_do_us .emerytalne');
const LAD_I_PIT2_DietaUS_rentowe = document.querySelector('.lad_i_pit2 .dieta_do_us .rentowe');
const LAD_I_PIT2_DietaUS_wypadkowe = document.querySelector('.lad_i_pit2 .dieta_do_us .wypadkowe');
const LAD_I_PIT2_DietaUS_FP = document.querySelector('.lad_i_pit2 .dieta_do_us .FP');
const LAD_I_PIT2_DietaUS_FGSP = document.querySelector('.lad_i_pit2 .dieta_do_us .FGSP');
const LAD_I_PIT2_DietaUS_koszt_calkowity_pracodawcy = document.querySelector('.lad_i_pit2 .dieta_do_us .koszt_calkowity_pracodawcy');
const LAD_I_PIT2_DietaUS_Zastosowanie = document.querySelector('.lad_i_pit2 .dieta_do_us .zastosowanie');

const LAD_I_PIT2_DietaZUS_emerytalna = document.querySelector('.lad_i_pit2 .dieta_do_zus .emerytalna');
const LAD_I_PIT2_DietaZUS_rentowa = document.querySelector('.lad_i_pit2 .dieta_do_zus .rentowa');
const LAD_I_PIT2_DietaZUS_chorobowa = document.querySelector('.lad_i_pit2 .dieta_do_zus .chorobowa');
const LAD_I_PIT2_DietaZUS_podstawa_wymiaru_skladki_zdrowotnej = document.querySelector('.lad_i_pit2 .dieta_do_zus .podstawa_wymiaru_skladki_zdrowotnej');
const LAD_I_PIT2_DietaZUS_zdrowotna = document.querySelector('.lad_i_pit2 .dieta_do_zus .zdrowotna');
const LAD_I_PIT2_DietaZUS_koszt_uzyskania_przychodu = document.querySelector('.lad_i_pit2 .dieta_do_zus .koszt_uzyskania_przychodu');
const LAD_I_PIT2_DietaZUS_ulga_klasa_srednia = document.querySelector('.lad_i_pit2 .dieta_do_zus .ulga_klasa_srednia');
const LAD_I_PIT2_DietaZUS_podstawa_wymiaru_podatku = document.querySelector('.lad_i_pit2 .dieta_do_zus .podstawa_wymiaru_podatku');
const LAD_I_PIT2_DietaZUS_podstawa_wymiaru_podatku_po_zaokragleniu = document.querySelector('.lad_i_pit2 .dieta_do_zus .podstawa_wymiaru_podatku_po_zaokragleniu');
const LAD_I_PIT2_DietaZUS_kwota_zmniejszająca_podatek = document.querySelector('.lad_i_pit2 .dieta_do_zus .Kwota_zmniejszajaca_podatek');
const LAD_I_PIT2_DietaZUS_zaliczka_na_podatek = document.querySelector('.lad_i_pit2 .dieta_do_zus .zaliczka_na_podatek');
const LAD_I_PIT2_DietaZUS_zaliczka_na_podatek_po_zaokragleniu = document.querySelector('.lad_i_pit2 .dieta_do_zus .zaliczka_na_podatek_po_zaokragleniu');
const LAD_I_PIT2_DietaZUS_wynagrodzenie_netto = document.querySelector('.lad_i_pit2 .dieta_do_zus .wynagrodzenie_netto');
const LAD_I_PIT2_DietaZUS_wynagrodzenie_netto_do_26_lat = document.querySelector('.lad_i_pit2 .dieta_do_zus .wynagrodzenie_netto_do_26_lat');
const LAD_I_PIT2_DietaZUS_emerytalne = document.querySelector('.lad_i_pit2 .dieta_do_zus .emerytalne');
const LAD_I_PIT2_DietaZUS_rentowe = document.querySelector('.lad_i_pit2 .dieta_do_zus .rentowe');
const LAD_I_PIT2_DietaZUS_wypadkowe = document.querySelector('.lad_i_pit2 .dieta_do_zus .wypadkowe');
const LAD_I_PIT2_DietaZUS_FP = document.querySelector('.lad_i_pit2 .dieta_do_zus .FP');
const LAD_I_PIT2_DietaZUS_FGSP = document.querySelector('.lad_i_pit2 .dieta_do_zus .FGSP');
const LAD_I_PIT2_DietaZUS_koszt_calkowity_pracodawcy = document.querySelector('.lad_i_pit2 .dieta_do_zus .koszt_calkowity_pracodawcy');
const LAD_I_PIT2_DietaZUS_Zastosowanie = document.querySelector('.lad_i_pit2 .dieta_do_zus .zastosowanie');
const LAD_I_PIT2_jakies_sianko = document.querySelector('.lad_i_pit2 .dieta_do_us .jakies_sianko');
const LAD_I_PIT2_sanitariaty = document.querySelector('.lad_i_pit2 .sanitariaty');


const btn_szukaj_wyniku = document.querySelectorAll('.licz_netto');




class pit {
    wynagrodzenenie_brutto = 0;
    ulga_do_oddelegowania = 0;
    wynagrodzenie_netto = 0;
    wynagrodzenie_zasadnicze = 0;
    wynagrodzenie_za_dyzur = app.wynagrodzenie_za_dyzur;
    Premie_inne = 0;
    ryczalt_za_nadgodziny = 0;
    ryczalt_za_godziny_nocne = 0;
    dodatki = 0;
    // wynagrodzenie_chorobowe = 0;
    // wynagrodzenie_urlopowe = 0;
    // suma = 0;
    // ulga_dla_klasy_sredniej = 0;
    // koszt_uzyskania_przychodu = 0;
    // placa_zagraniczna_do_5922 = 0;
    // placa_zagraniczna_ulga_zus = 0;
    // placa_zagraniczna_ulga_zus_pit = 0;
    // ulga_do_lat_26 = 0;
    limit_ZUS = 0;
    jakies_gowno= 0;
    jakies_gowno2 = 0;
    jakies_gowno3 = 0;


    emerytalna_podsumowanie =0;
    emerytalna_US = 0;
    emerytalna_ZUS=0;

    rentowa_podsumowanie = 0;
    rentowa_us = 0;
    rentowa_zus=0;

    chorobowa_podsumowanie = 0;
    chorobowa_us = 0;
    chorobowa_zus=0;

    podstawa_wymiaru_skladki_zdrowotnej_podsumowanie = 0;
    podstawa_wymiaru_skladki_zdrowotnej_us = 0;
    podstawa_wymiaru_skladki_zdrowotnej_zus = 0;

    zdrowotna_podsumowanie = 0;
    zdrowotna_us = 0;
    zdrowotna_zus = 0;

    koszt_uzyskania_przychodu_podsumowanie = 0;
    koszt_uzyskania_przychodu_us = 0;
    koszt_uzyskania_przychodu_zus = 0;

    ulga_klasa_srednia_podsumowanie = 0;
    ulga_klasa_srednia_us = 0;
    ulga_klasa_srednia_zus = 0;

    podstawa_wymiaru_podatku_podsumowanie = 0;
    podstawa_wymiaru_podatku_us = 0;
    podstawa_wymiaru_podatku_zus = 0;

    podstawa_wymiaru_podatku_po_zaokragleniu_podsumowanie = 0;
    podstawa_wymiaru_podatku_po_zaokragleniu_us = 0;
    podstawa_wymiaru_podatku_po_zaokragleniu_zus = 0;

    kwota_zmniejszajaca_podatek_podsumowanie = 0;
    kwota_zmniejszajaca_podatek_us = 0;
    kwota_zmniejszajaca_podatek_zus = 0;

    zaliczka_na_podatek_podsumowanie = 0;
    zaliczka_na_podatek_us = 0;
    zaliczka_na_podatek_zus = 0;

    zaliczka_na_podatek_po_zaokragleniu_podsumowanie = 0;
    zaliczka_na_podatek_po_zaokragleniu_us = 0;
    zaliczka_na_podatek_po_zaokragleniu_zus = 0;

    wynagrodzenie_netto_podsumowanie = 0;
    wynagrodzenie_netto_us = 0;
    wynagrodzenie_netto_zus = 0;

    netto_do_26 = 0;

    zastosowanie = 0;

    emerytalne_podsumowanie = 0;
    emerytalne_us = 0;
    emerytalne_zus = 0;

    rentowe_podsumowanie = 0;
    rentowe_us = 0;
    rentowe_zus = 0;

    wypadkowe_podsumowanie = 0;
    wypadkowe_us = 0;
    wypadkowe_zus =0;

    fp_podsumowanie = 0;
    fp_us = 0;
    fp_zus = 0;

    fgsp_podsumownie = 0;
    fgsp_us = 0;
    fgsp_zus = 0;

    calkowity_koszt_pracodawcy_podsumowanie =0;
    calkowity_koszt_pracodawcy_us = 0;
    calkowity_koszt_pracodawcy_zus = 0;

    placa_zagraniczna = 0;

    suma_gora = 0;
    
    ulga_do_26_lat = 0;

    G11 = 0;

    praca_zagraniczna_ulga_zus_i_pit = 0;
    
    K36= 0;

    zusior1 = 0;
    zusior2 =0;
    zusior3 = 0;

    jakies_sianko = 0;


    constructor(){


        if(document.querySelector('.wynagrodzenie_brutto')){
            licz_brutto.addEventListener('click', this.pal_wszystko.bind(this))

        }
        if(btn_szukaj_wyniku){ btn_szukaj_wyniku.forEach(el=>{
            el.addEventListener('click', ()=>{
                
            const elementarzysta = el.previousElementSibling;
            document.querySelector('.wynagrodzenie_brutto').value =elementarzysta.value * 1.2
         

            this.szukaj_wyniku(elementarzysta.value, elementarzysta)
       
        })

        })}
       

        this.pal_wszystko();
    }
    szukaj_wyniku(szukany_wynik,elem){
     

        this.pal_wszystko();

        console.log(elem.value, szukany_wynik, document.querySelector('.wynagrodzenie_brutto').value);
        if((Math.floor(elem.value/10))!=Math.floor(szukany_wynik/10)){


            if((Math.floor(elem.value/10))<Math.floor(szukany_wynik/10))
             document.querySelector('.wynagrodzenie_brutto').value = document.querySelector('.wynagrodzenie_brutto').value*1 +10



            else if((Math.floor(elem.value/10))>Math.floor(szukany_wynik/10))
            document.querySelector('.wynagrodzenie_brutto').value = document.querySelector('.wynagrodzenie_brutto').value*1 -10




            this.szukaj_wyniku(szukany_wynik, elem);
        }
        else if((Math.floor(elem.value/10))==Math.floor(szukany_wynik/10)&&elem.value!=(szukany_wynik*1).toFixed(2)){

            //zlotowy


            document.querySelector('.wynagrodzenie_brutto').value = (document.querySelector('.wynagrodzenie_brutto').value*1).toFixed(2);

            if(Math.floor(elem)>Math.floor(szukany_wynik)){
                document.querySelector('.wynagrodzenie_brutto').value= ((document.querySelector('.wynagrodzenie_brutto').value*1) - 1).toFixed(2)
                this.szukaj_wyniku(szukany_wynik, elem);


            }else if(Math.floor(elem.value)<Math.floor(szukany_wynik)){
                document.querySelector('.wynagrodzenie_brutto').value= ((document.querySelector('.wynagrodzenie_brutto').value*1) + 1).toFixed(2)

                this.szukaj_wyniku(szukany_wynik, elem);
         }else{
       

            if(((elem.value)*1).toFixed(2)>(szukany_wynik*1).toFixed(2)){
       
                document.querySelector('.wynagrodzenie_brutto').value= ((document.querySelector('.wynagrodzenie_brutto').value*1) - 0.01).toFixed(2)
                this.szukaj_wyniku(szukany_wynik, elem);


            }else if((elem.value*1).toFixed(2)<(szukany_wynik*1).toFixed(2)){
         

                document.querySelector('.wynagrodzenie_brutto').value= ((document.querySelector('.wynagrodzenie_brutto').value*1) + 0.01).toFixed(2)

            this.szukaj_wyniku(szukany_wynik, elem);
         }
        }

        }

if((elem.value*1).toFixed(2)==(szukany_wynik*1).toFixed(2)){
    inputElement.setAttribute('value', inputElement.value);

    bruh.licz_wszystko()
    xd34.oblicz_wszystko_xd()
    xd34.licz_wszystko();

    return;
}


        
    }

    pal_wszystko(){
        this.znajdz_ulge_do_oddelegowania();

        this.oblicz_brutto(); 

        this.znajdz_wynagrodzenie_zasadnicze();

        this.znajdz_premie_regulaminowa();

        this.znajdz_ryczalt_za_nadgodziny();
        this.znajdz_ryczalt_za_godziny_nocne();

        this.znajdz_mnie_limit_zusa();
        this.znajdz_mnie_to_sianko();


        this.wyswietl_mnie_brutto();

        this.emerytalna()
        this.rentowa();
        this.chorobowa()
        this.podstawa_wymiaru_skladki_zdrowotnej();
        this.zdrowotna();
        this.koszt_uzyskania_przychodu();
        this.podstawa_wymiaru_podatku();
        this.podstawa_wymiaru_podatku_po_zaokragleniu();
        this.kwota_zmniejszajaca_podatek();
        this.zaliczka_na_podatek();
        this.zaliczka_na_podatek_po_zaokragleniu();
        this.oblicz_wynagrodzenie_netto();
        this.oblicz_wynagrodzenie_netto_do_26();
        this.licz_zastosowanie();
        this.emerytalne();
        this.rentowe();
        this.wypadkowe();
        this.fp();
        this.fgsp();
        this.calkowity_koszt_pracodawcy();
        this.wyswietl_mnie_chorobowe_i_urlopowe()
        this.wyswietl_mnie_sume()
        this.wyswietl_mnie_wynagrodzenie_za_dyzur()
        this.koszt_uzyskania_przychodu_gora();
        this.placa_zagraniczna_do_5922();
        this.znajdz_mnie_ulga_do_26_lat();
        this.licz_placa_zagraniczna_ulga_zus();
        this.znajdz_k36();
        this.placa_zagraniczna_ulga_zus_i_pit();
        this.policz_mnie_sanitariaty()
        this.poka_netto_z_sani()

        
    }
    poka_netto_z_sani(){
   





        let sianko=document.querySelector('.sanitariaty').innerHTML*1;
        
        
                if(!isNaN(sianko)){
                document.querySelector('.netto_z_sanitariatami').value = (((document.querySelector('.wynagrodzenie_netto').value*1)+ (sianko*1))*1).toFixed(2);
                document.querySelector('.netto_z_sani_bez_pit').value = ((document.querySelector('.wynagrodzenie_netto').value*1)+ (sianko*1)-300).toFixed(2);
                }else{
                document.querySelector('.netto_z_sanitariatami').value = 'Brak';
                document.querySelector('.netto_z_sani_bez_pit').value = 'Brak';

            }
            }
    znajdz_mnie_to_sianko(){
 
        this.jakies_sianko = (document.querySelector('.jakies_gowno2').innerHTML*1)-(document.querySelector('.wynagrodzenie_chorobowe').value*1);
        LAD_I_PIT2_jakies_sianko.innerHTML = this.jakies_sianko.toFixed(2);
    }
    oblicz_brutto(){
        this.wynagrodzenenie_brutto = document.querySelector(".wynagrodzenie_brutto").value;
        PIT2wynagrodzenieBrutto.innerHTML = (this.wynagrodzenenie_brutto*1).toFixed(2);


    }
    znajdz_ulge_do_oddelegowania(){
        const pracownicy = document.querySelectorAll('.pracownik');
        const poszukiwane_imie = (document.querySelector('.kierowca').innerHTML);
      
      
        pracownicy.forEach((el)=>{
            let text = el.textContent.toUpperCase();
            if(text.includes(poszukiwane_imie)){
            this.ulga_do_oddelegowania = el.querySelector('.dieta_zagraniczna').textContent;
            PIT2ulgaDoOddelegowania.innerHTML = (this.ulga_do_oddelegowania*1).toFixed(2);
            }
        })
    }
    znajdz_wynagrodzenie_zasadnicze(){
        this.wynagrodzenie_zasadnicze = dane4TRANSWynagrodzenieZasadnicze.innerHTML;
        PIT2wynagrodzenieZasadnicze.innerHTML= (this.wynagrodzenie_zasadnicze*1).toFixed(2);
    }
    znajdz_premie_regulaminowa(){
            this.Premie_inne = dane4TRANSPremiaRegulaminowa.innerHTML;
            PIT2premieInne.innerHTML = (this.Premie_inne*1).toFixed(2);
        
    }
    znajdz_ryczalt_za_nadgodziny(){
        this.ryczalt_za_nadgodziny = ryczalt_za_godziny_nadliczbowe.innerHTML*1 + wyrownanie_za_ryczalty_za_godziny_nadliczbowe.innerHTML*1;
        PIT2ryczaltZaNadgodziny.innerHTML= this.ryczalt_za_nadgodziny.toFixed(2);
    }
    znajdz_ryczalt_za_godziny_nocne(){
       this.ryczalt_za_godziny_nocne =  ryczalt_za_czas_pracy_w_nocy.innerHTML*1 +  wyrownanie_za_ryczalty_za_czas_pracy_w_nocy.innerHTML*1;
       PIT2ryczaltZaGodzinyNocne.innerHTML = (this.ryczalt_za_godziny_nocne*1).toFixed(2);

  

    }







    znajdz_mnie_limit_zusa(){
       this.limit_ZUS =  document.querySelector('.limit_zus').innerHTML;

       if(this.wynagrodzenenie_brutto*1<this.limit_ZUS*1){
        this.zusior1 = this.wynagrodzenenie_brutto;
        PIT2jakiesgowno.innerHTML=(this.wynagrodzenenie_brutto*1).toFixed(2)
 

       }else{
        this.zusior1 = this.limit_ZUS;
        PIT2jakiesgowno.innerHTML=(this.limit_ZUS*1).toFixed(2);



    }
    this.zusior2 = (this.wynagrodzenenie_brutto - this.ulga_do_oddelegowania)
    this.ulga_do_oddelegowania=document.querySelector('.Jaka_ulga_do_oddelegowania').value*1;
    PIT2jakiesgowno2.innerHTML = (this.wynagrodzenenie_brutto - this.ulga_do_oddelegowania).toFixed(2);
    this.zusior3 =this.wynagrodzenenie_brutto - this.ulga_do_oddelegowania/3
    PIT2jakiesgowno3.innerHTML =(this.wynagrodzenenie_brutto - this.ulga_do_oddelegowania/3).toFixed(2);
    


    }
    wyswietl_mnie_brutto(){


            this.jakies_sianko;
            this.limit_ZUS;
            console.log(this.jakies_sianko);
            let pierwsza_zmienna;
            if(this.jakies_sianko<this.limit_ZUS){
                pierwsza_zmienna = this.limit_ZUS;
            }else{
                pierwsza_zmienna = this.jakies_sianko;
            }
            let druga_zmienna = (this.wynagrodzenenie_brutto*1) - (document.querySelector('.wynagrodzenie_chorobowe').value*1);
            if(pierwsza_zmienna>druga_zmienna){
                this.jakies_gowno2= druga_zmienna;
            }else{
                this.jakies_gowno2 = pierwsza_zmienna;
            }

            // if(pierwsza_zmienna>)
       
        PIT2wynagrodzenieBruttoDwa2.innerHTML = (this.jakies_gowno2*1).toFixed(2);
        this.jakies_gowno = (this.wynagrodzenenie_brutto*1)
        PIT2wynagrodzenieBruttoDwa.innerHTML = (this.wynagrodzenenie_brutto*1).toFixed(2);


        let k25;
        const chorobowexd = document.querySelector('.strona_prawa .wynagrodzenie_chorobowe').value;

        let k26=(this.jakies_gowno - chorobowexd - this.limit_ZUS)<0?0:(this.jakies_gowno - chorobowexd - this.limit_ZUS).toFixed(2);

        const pracownik = document.querySelector('.kierowca').innerHTML;
        document.querySelectorAll('.pracownik').forEach(el=>{
            if(el.innerHTML.toUpperCase().includes(pracownik)){
         
                k25 = ((el.querySelector('.dieta_zagraniczna').textContent)/3).toFixed(2)
                
                
            }
        })
         const k12 = k25>k26?k25:0;

            const k13 = (k12-k26)<=0?0:(k12-k26).toFixed(2);
            const brutto_4 = this.jakies_gowno2 - k13;
            const emeryt = brutto_4 * 0.0976
            const rent = brutto_4* 0.015
            const choro = brutto_4 * 0.0245;
            const L24 = (emeryt + rent+choro).toFixed(2);

            const H25 = ((this.emerytalna_US + this.chorobowa_us + this.rentowa_us) - L24)<=0?0:((this.emerytalna_US + this.chorobowa_us + this.rentowa_us) - L24);


   


        this.jakies_gowno3 = ((this.wynagrodzenenie_brutto-this.ulga_do_oddelegowania/3)*1)+H25
        PIT2wynagrodzenieBruttoDwa3.innerHTML = ((this.wynagrodzenenie_brutto-this.ulga_do_oddelegowania/3)*1).toFixed(2);
    }
    policz_mnie_sanitariaty(){
        const driver = document.querySelector('.kierowca').innerHTML;
        document.querySelectorAll('.puzzle').forEach(el=>{
            
    


            if(el.innerHTML.toUpperCase().includes(driver)){
                const sklad = el.querySelector('.siano').innerHTML.split('&nbsp;');


                let skladowa;
                let sianko;

                if(sklad.length==1){
                    if(sklad[0].includes(',')){
                        skladowa = sklad[0].split(',');

                    }else if(sklad[0].includes('.')){
                        skladowa = sklad[0];
      

                    }else
                    skladowa = sklad

                }else{
                    skladowa = sklad[1].split(',');
                }

                    if(skladowa.length==2){
                        
                        sianko = (sklad[0]+skladowa[0]+'.'+skladowa[1]);

                    }else{
                        sianko = skladowa
                     
                        

                    }
 
   
             
                    LAD_I_PIT2_sanitariaty.innerHTML = (sianko*1).toFixed(2);
                    document.querySelector('.sanitariaty').innerHTML=(sianko*1).toFixed(2);
          

            }

        })
        if(document.querySelector('.sanitariaty').innerHTML==''){
            LAD_I_PIT2_sanitariaty.innerHTML = 'Brak ';
            document.querySelector('.sanitariaty').innerHTML='Brak ';
        }
    }
    emerytalna(){
        this.emerytalna_podsumowanie = (this.wynagrodzenenie_brutto * (zmienna_emerytalna.value*1));
        LAD_I_PIT2_PodsumowanieI4_emerytalna.innerHTML = (this.wynagrodzenenie_brutto *(zmienna_emerytalna.value*1)).toFixed(2);
        this.emerytalna_US = (this.jakies_gowno2* (zmienna_emerytalna.value*1));
        LAD_I_PIT2_DietaUS_emerytalna.innerHTML = (this.jakies_gowno2* (zmienna_emerytalna.value*1)).toFixed(2);
        this.emerytalna_ZUS =  (this.jakies_gowno3* (zmienna_emerytalna.value*1));
        LAD_I_PIT2_DietaZUS_emerytalna.innerHTML = (this.jakies_gowno3*(zmienna_emerytalna.value*1)).toFixed(2);

    }
    rentowa(){
        this.rentowa_podsumowanie =(this.jakies_gowno*(zmienna_rentowa.value*1));
        LAD_I_PIT2_PodsumowanieI4_rentowa.innerHTML=(this.jakies_gowno*(zmienna_rentowa.value*1)).toFixed(2);
        this.rentowa_us = (this.jakies_gowno2*(zmienna_rentowa.value*1));
        LAD_I_PIT2_DietaUS_rentowa.innerHTML=(this.jakies_gowno2*(zmienna_rentowa.value*1)).toFixed(2);
        this.rentowa_zus = (this.jakies_gowno3*(zmienna_rentowa.value*1));
        LAD_I_PIT2_DietaZUS_rentowa.innerHTML=(this.jakies_gowno3*(zmienna_rentowa.value*1)).toFixed(2);
    }
    chorobowa(){
        this.chorobowa_podsumowanie = (this.jakies_gowno*(zmienna_chorobowa.value*1));
        LAD_I_PIT2_PodsumowanieI4_chorobowa.innerHTML=(this.jakies_gowno*(zmienna_chorobowa.value*1)).toFixed(2);
        this.chorobowa_us = (this.jakies_gowno2*(zmienna_chorobowa.value*1));
        LAD_I_PIT2_DietaUS_chorobowa.innerHTML=(this.jakies_gowno2*(zmienna_chorobowa.value*1)).toFixed(2);
        this.chorobowa_zus = (this.jakies_gowno3*(zmienna_chorobowa.value*1));
        LAD_I_PIT2_DietaZUS_chorobowa.innerHTML=(this.jakies_gowno3*(zmienna_chorobowa.value*1)).toFixed(2);
    }
    podstawa_wymiaru_skladki_zdrowotnej(){
        this.podstawa_wymiaru_skladki_zdrowotnej_podsumowanie = (this.jakies_gowno - this.emerytalna_podsumowanie - this.rentowa_podsumowanie - this.chorobowa_podsumowanie);
        LAD_I_PIT2_PodsumowanieI4_podstawa_wymiaru_skladki_zdrowotnej.innerHTML=(this.jakies_gowno - this.emerytalna_podsumowanie - this.rentowa_podsumowanie - this.chorobowa_podsumowanie).toFixed(2);




        this.podstawa_wymiaru_skladki_zdrowotnej_us = (this.jakies_gowno2 - this.emerytalna_US - this.rentowa_us - this.chorobowa_us + (document.querySelector('.wynagrodzenie_chorobowe').value*1));
        LAD_I_PIT2_DietaUS_podstawa_wymiaru_skladki_zdrowotnej.innerHTML=(this.jakies_gowno2 - this.emerytalna_US - this.rentowa_us - this.chorobowa_us + (document.querySelector('.wynagrodzenie_chorobowe').value*1)).toFixed(2);
        // let suma_skladowych = this.emerytalna_US + this.rentowa_us+ this.chorobowa_us;


        let k25;
        const chorobowexd = document.querySelector('.strona_prawa .wynagrodzenie_chorobowe').value;

        let k26=(this.jakies_gowno - chorobowexd - this.limit_ZUS)<0?0:(this.jakies_gowno - chorobowexd - this.limit_ZUS).toFixed(2);

        const pracownik = document.querySelector('.kierowca').innerHTML;
        document.querySelectorAll('.pracownik').forEach(el=>{
            if(el.innerHTML.toUpperCase().includes(pracownik)){
         
                k25 = ((el.querySelector('.dieta_zagraniczna').textContent)/3).toFixed(2)
                
                
            }
        })
        const k12 = k25>k26?k25:0;

        const k13 = (k12-k26)<=0?0:(k12-k26).toFixed(2);
        const brutto_4 = this.jakies_gowno2 - k13;
        const emeryt = brutto_4 * 0.0976
        const rent = brutto_4* 0.015
        const choro = brutto_4 * 0.0245;
        const L24 = (emeryt + rent+choro).toFixed(2);

        const H24 = ((this.jakies_gowno3 * 0.0976)+ (this.jakies_gowno3* 0.015) + (this.jakies_gowno3 * 0.0245)).toFixed(2);
   

        
        if(L24*1<H24*1){
            this.podstawa_wymiaru_skladki_zdrowotnej_zus = this.jakies_gowno3 - (this.jakies_gowno2 * 0.0976 + this.jakies_gowno2 * 0.015 + this.jakies_gowno2 * 0.0245)

        }else{
            this.podstawa_wymiaru_skladki_zdrowotnej_zus=this.jakies_gowno3-(this.jakies_gowno3*0.0976 + this.jakies_gowno3*0.015 + this.jakies_gowno3 * 0.0245 );
        }

        LAD_I_PIT2_DietaZUS_podstawa_wymiaru_skladki_zdrowotnej.innerHTML =  this.podstawa_wymiaru_skladki_zdrowotnej_zus.toFixed(2);

        // const czwarte_brutto = this.jakies_gowno2 - 
    }
    zdrowotna(){
        this.zdrowotna_podsumowanie = (this.podstawa_wymiaru_skladki_zdrowotnej_podsumowanie*(zmienna_zdrowotna.value*1));
        LAD_I_PIT2_PodsumowanieI4_zdrowotna.innerHTML = (this.podstawa_wymiaru_skladki_zdrowotnej_podsumowanie*(zmienna_zdrowotna.value*1)).toFixed(2);
        this.zdrowotna_us = (this.podstawa_wymiaru_skladki_zdrowotnej_us*(zmienna_zdrowotna.value*1));
        LAD_I_PIT2_DietaUS_zdrowotna.innerHTML = (this.zdrowotna_us).toFixed(2);
        this.zdrowotna_zus = (this.podstawa_wymiaru_skladki_zdrowotnej_zus*(zmienna_zdrowotna.value*1))
        LAD_I_PIT2_DietaZUS_zdrowotna.innerHTML = this.zdrowotna_zus.toFixed(2)

    }
    koszt_uzyskania_przychodu(){
        const przychod = document.querySelector('.Koszt_uzyskania_przychodu').value;
        this.koszt_uzyskania_przychodu_podsumowanie = przychod;
        LAD_I_PIT2_PodsumowanieI4_koszt_uzyskania_przychodu.innerHTML = przychod;
        this.koszt_uzyskania_przychodu_us = przychod;
        LAD_I_PIT2_DietaUS_koszt_uzyskania_przychodu.innerHTML = przychod;
        this.koszt_uzyskania_przychodu_zus = przychod;
        LAD_I_PIT2_DietaZUS_koszt_uzyskania_przychodu.innerHTML = przychod;
    }
    podstawa_wymiaru_podatku(){
        this.podstawa_wymiaru_podatku_podsumowanie = (this.podstawa_wymiaru_skladki_zdrowotnej_podsumowanie-this.koszt_uzyskania_przychodu_podsumowanie-this.ulga_klasa_srednia_podsumowanie)
        LAD_I_PIT2_PodsumowanieI4_podstawa_wymiaru_podatku.innerHTML = this.podstawa_wymiaru_podatku_podsumowanie.toFixed(2);
        this.podstawa_wymiaru_podatku_us = (this.podstawa_wymiaru_skladki_zdrowotnej_us-this.koszt_uzyskania_przychodu_us-this.ulga_klasa_srednia_us);
        LAD_I_PIT2_DietaUS_podstawa_wymiaru_podatku.innerHTML = this.podstawa_wymiaru_podatku_us.toFixed(2);
        this.podstawa_wymiaru_podatku_zus= (this.podstawa_wymiaru_skladki_zdrowotnej_zus - this.koszt_uzyskania_przychodu_zus - this.ulga_klasa_srednia_zus);
        LAD_I_PIT2_DietaZUS_podstawa_wymiaru_podatku.innerHTML = this.podstawa_wymiaru_podatku_zus.toFixed(2);

    }
    podstawa_wymiaru_podatku_po_zaokragleniu(){
        this.podstawa_wymiaru_podatku_po_zaokragleniu_podsumowanie = Math.round(this.podstawa_wymiaru_podatku_podsumowanie).toFixed(2);
        LAD_I_PIT2_PodsumowanieI4_podstawa_wymiaru_podatku_po_zaokragleniu.innerHTML = Math.round(this.podstawa_wymiaru_podatku_podsumowanie).toFixed(2);
        this.podstawa_wymiaru_podatku_po_zaokragleniu_us = Math.round(this.podstawa_wymiaru_podatku_us).toFixed(2);
        LAD_I_PIT2_DietaUS_podstawa_wymiaru_podatku_po_zaokragleniu.innerHTML = Math.round(this.podstawa_wymiaru_podatku_us).toFixed(2);
        this.podstawa_wymiaru_podatku_po_zaokragleniu_zus = Math.round(this.podstawa_wymiaru_podatku_zus).toFixed(2);
        LAD_I_PIT2_DietaZUS_podstawa_wymiaru_podatku_po_zaokragleniu.innerHTML = Math.round(this.podstawa_wymiaru_podatku_zus).toFixed(2);

    }
    kwota_zmniejszajaca_podatek(){
        this.kwota_zmniejszajaca_podatek_podsumowanie = LAD_I_PIT2_PodsumowanieI4_kwota_zmniejszająca_podatek.innerHTML;
        this.kwota_zmniejszajaca_podatek_us = LAD_I_PIT2_DietaUS_kwota_zmniejszająca_podatek.innerHTML;
        this.kwota_zmniejszajaca_podatek_zus = LAD_I_PIT2_DietaZUS_kwota_zmniejszająca_podatek.innerHTML;
    }
    zaliczka_na_podatek(){
       this.zaliczka_na_podatek_podsumowanie =  (this.podstawa_wymiaru_podatku_po_zaokragleniu_podsumowanie * 0.17 - this.kwota_zmniejszajaca_podatek_podsumowanie);
        LAD_I_PIT2_PodsumowanieI4_zaliczka_na_podatek.innerHTML = this.zaliczka_na_podatek_podsumowanie.toFixed(2);
        this.zaliczka_na_podatek_us =  (this.podstawa_wymiaru_podatku_po_zaokragleniu_us * 0.17 - this.kwota_zmniejszajaca_podatek_us);
        LAD_I_PIT2_DietaUS_zaliczka_na_podatek.innerHTML = this.zaliczka_na_podatek_us.toFixed(2);

        this.zaliczka_na_podatek_zus =  (this.podstawa_wymiaru_podatku_po_zaokragleniu_zus * 0.12 - this.kwota_zmniejszajaca_podatek_zus);
        LAD_I_PIT2_DietaZUS_zaliczka_na_podatek.innerHTML = this.zaliczka_na_podatek_zus.toFixed(2);
    }
    zaliczka_na_podatek_po_zaokragleniu(){
        this.zaliczka_na_podatek_po_zaokragleniu_podsumowanie = Math.round(this.zaliczka_na_podatek_podsumowanie);
        LAD_I_PIT2_PodsumowanieI4_zaliczka_na_podatek_po_zaokragleniu.innerHTML= (this.zaliczka_na_podatek_po_zaokragleniu_podsumowanie).toFixed(2);
        this.zaliczka_na_podatek_po_zaokragleniu_us = Math.round(this.zaliczka_na_podatek_us);
        LAD_I_PIT2_DietaUS_zaliczka_na_podatek_po_zaokragleniu.innerHTML= (this.zaliczka_na_podatek_po_zaokragleniu_us).toFixed(2);

        this.zaliczka_na_podatek_po_zaokragleniu_zus = Math.round(this.zaliczka_na_podatek_zus);
                if(this.zaliczka_na_podatek_po_zaokragleniu_zus<0){
            this.zaliczka_na_podatek_po_zaokragleniu_zus = 0;
        }
        LAD_I_PIT2_DietaZUS_zaliczka_na_podatek_po_zaokragleniu.innerHTML= (this.zaliczka_na_podatek_po_zaokragleniu_zus).toFixed(2);

    }
    oblicz_wynagrodzenie_netto(){
        this.wynagrodzenie_netto_podsumowanie = (this.jakies_gowno-this.emerytalna_US - this.rentowa_us - this.chorobowa_us - this.zdrowotna_us - this.zaliczka_na_podatek_po_zaokragleniu_zus);
        LAD_I_PIT2_PodsumowanieI4_wynagrodzenie_netto.innerHTML =this.wynagrodzenie_netto_podsumowanie.toFixed(2)+" "; 
        this.wynagrodzenie_netto_us = (this.jakies_gowno2 - this.emerytalna_US - this.rentowa_us - this.chorobowa_us - this.zdrowotna_us - this.zaliczka_na_podatek_po_zaokragleniu_us)
        LAD_I_PIT2_DietaUS_wynagrodzenie_netto.innerHTML=(this.wynagrodzenie_netto_us).toFixed(2) +" ";
        let syfon = 0;
        if(this.podstawa_wymiaru_skladki_zdrowotnej_zus>this.podstawa_wymiaru_skladki_zdrowotnej_us){
            syfon = this.zaliczka_na_podatek_po_zaokragleniu_zus
        }else{
            syfon = Math.round(((this.podstawa_wymiaru_skladki_zdrowotnej_us - this.koszt_uzyskania_przychodu_zus)*0.12)-this.kwota_zmniejszajaca_podatek_zus);
        }
        this.wynagrodzenie_netto_zus = (this.jakies_gowno3 - this.emerytalna_ZUS - this.rentowa_zus - this.chorobowa_zus - this.zdrowotna_zus - syfon).toFixed(2);
        LAD_I_PIT2_DietaZUS_wynagrodzenie_netto.innerHTML = this.wynagrodzenie_netto_zus;
    }
    oblicz_wynagrodzenie_netto_do_26(){
       this.netto_do_26= this.jakies_gowno- this.emerytalna_US - this.rentowa_us - this.chorobowa_us - this.zdrowotna_us;
       LAD_I_PIT2_PodsumowanieI4_wynagrodzenie_netto_do_26_lat.innerHTML = this.netto_do_26.toFixed(2) + " ";
    }
    licz_zastosowanie(){
        this.zastosowanie = document.querySelector('.Wiek').innerHTML>25?this.wynagrodzenie_netto_podsumowanie:this.netto_do_26;
        LAD_I_PIT2_PodsumowanieI4_Zastosowanie.innerHTML = this.zastosowanie.toFixed(2);
        document.querySelector('.wynagrodzenie_netto').value=this.zastosowanie.toFixed(2)
        document.querySelector('.netto_z_pit').value=(this.zastosowanie-300).toFixed(2)
        // document.querySelector('.strona_arkusz1 .wynagrodzenie_netto').innerHTML = this.zastosowanie.toFixed(2);
    }
    emerytalne(){
        this.emerytalne_podsumowanie = (this.jakies_gowno * (zmienna_emerytalna.value*1));
        LAD_I_PIT2_PodsumowanieI4_emerytalne.innerHTML = this.emerytalne_podsumowanie.toFixed(2);
        this.emerytalne_us = (this.jakies_gowno2 * (zmienna_emerytalna.value*1));
        LAD_I_PIT2_DietaUS_emerytalne.innerHTML = this.emerytalne_us.toFixed(2);
        this.emerytalne_zus = (this.jakies_gowno3 * (zmienna_emerytalna.value*1));
        LAD_I_PIT2_DietaZUS_emerytalne.innerHTML = this.emerytalne_zus.toFixed(2);


    }
    rentowe(){
        this.rentowe_podsumowanie = (this.jakies_gowno *(0.065));
        LAD_I_PIT2_PodsumowanieI4_rentowe.innerHTML = this.rentowe_podsumowanie.toFixed(2);
        this.rentowe_us = (this.jakies_gowno2 *(0.065));
        LAD_I_PIT2_DietaUS_rentowe.innerHTML = this.rentowe_us.toFixed(2);
        this.rentowe_zus = (this.jakies_gowno3 *(0.065));
        LAD_I_PIT2_DietaZUS_rentowe.innerHTML = this.rentowe_zus.toFixed(2);

    }
    wypadkowe(){
        let wypadkowe = document.querySelector('.wypadkowe').innerHTML;
        this.wypadkowe_podsumowanie = this.jakies_gowno * wypadkowe;
        this.wypadkowe_us = this.jakies_gowno2*wypadkowe;
        this.wypadkowe_zus = this.jakies_gowno3*wypadkowe;
        LAD_I_PIT2_PodsumowanieI4_wypadkowe.innerHTML = this.wypadkowe_podsumowanie.toFixed(2);
        LAD_I_PIT2_DietaUS_wypadkowe.innerHTML = this.wypadkowe_us.toFixed(2);
        LAD_I_PIT2_DietaZUS_wypadkowe.innerHTML = this.wypadkowe_zus.toFixed(2);
    }
    fp(){
        this.fp_podsumowanie = this.jakies_gowno * (zmienna_fp.value*1);
        this.fp_us = this.jakies_gowno2 *  (zmienna_fp.value*1);
        this.fp_zus = this.jakies_gowno3 *  (zmienna_fp.value*1);
        LAD_I_PIT2_PodsumowanieI4_FP.innerHTML = this.fp_podsumowanie.toFixed(2);
        LAD_I_PIT2_DietaUS_FP.innerHTML = this.fp_us.toFixed(2);
        LAD_I_PIT2_DietaZUS_FP.innerHTML = this.fp_zus.toFixed(2);
    }
    fgsp(){
        this.fgsp_podsumownie = this.jakies_gowno* (zmienna_fgsp.value*1);
        this.fgsp_us = this.jakies_gowno2*(zmienna_fgsp.value*1);
        this.fgsp_zus = this.jakies_gowno3*(zmienna_fgsp.value*1);
        LAD_I_PIT2_PodsumowanieI4_FGSP.innerHTML = this.fgsp_podsumownie.toFixed(2);
        LAD_I_PIT2_DietaUS_FGSP.innerHTML = this.fgsp_us.toFixed(2);
        LAD_I_PIT2_DietaZUS_FGSP.innerHTML = this.fgsp_zus.toFixed(2);

    }
    calkowity_koszt_pracodawcy(){
        this.calkowity_koszt_pracodawcy_podsumowanie = this.jakies_gowno*1 + this.emerytalne_podsumowanie*1 + this.rentowe_podsumowanie*1 + this.wypadkowe_podsumowanie*1 + this.fp_podsumowanie*1 + this.fgsp_podsumownie;
        LAD_I_PIT2_PodsumowanieI4_koszt_calkowity_pracodawcy.innerHTML = ((Math.round(this.calkowity_koszt_pracodawcy_podsumowanie*100))/100).toFixed(2);

        this.calkowity_koszt_pracodawcy_us =this.jakies_gowno2*1 + this.emerytalne_us*1 + this.rentowe_us*1 + this.wypadkowe_us*1 + this.fp_us*1 + this.fgsp_us*1;
        LAD_I_PIT2_DietaUS_koszt_calkowity_pracodawcy.innerHTML = ((Math.round(this.calkowity_koszt_pracodawcy_us*100))/100).toFixed(2);

        this.calkowity_koszt_pracodawcy_zus = this.emerytalna_US + this.rentowa_us + this.chorobowa_us + this.zdrowotna_us + 
        this.zaliczka_na_podatek_po_zaokragleniu_zus + this.wynagrodzenie_netto_podsumowanie
         + this.emerytalne_us +this.rentowe_us + this.wypadkowe_us + this.fp_us+ this.fgsp_us
         LAD_I_PIT2_DietaZUS_koszt_calkowity_pracodawcy.innerHTML=  ((Math.round(this.calkowity_koszt_pracodawcy_zus*100))/100).toFixed(2);
        
     
    }
    placa_zagraniczna(){
        this.placa_zagraniczna = this.jakies_gowno2
    }
    wyswietl_mnie_chorobowe_i_urlopowe(){
        const chorobowexd = document.querySelector('.strona_prawa .wynagrodzenie_chorobowe').value;
        const urlopowexd= document.querySelector('.strona_prawa .wynagrodzenie_urlopowe').value;

        document.querySelector('.lad_i_pit2 .wynagrodzenie_chorobowe').innerHTML = chorobowexd;
        document.querySelector('.lad_i_pit2 .wynagrodzenie_urlopowe').innerHTML = urlopowexd;

    }
    wyswietl_mnie_sume(){
        let suma = (document.querySelector('.lad_i_pit2 .wynagrodzenie_chorobowe').innerHTML*1)+(document.querySelector('.lad_i_pit2 .wynagrodzenie_urlopowe').innerHTML*1)+this.dodatki+this.ryczalt_za_godziny_nocne+this.ryczalt_za_nadgodziny + this.Premie_inne*1 + this.wynagrodzenie_za_dyzur + this.wynagrodzenie_zasadnicze*1
        PIT2suma.innerHTML = (Math.round(suma*100))/100
        this.suma_gora =suma; 
    }
    wyswietl_mnie_wynagrodzenie_za_dyzur(){
        PIT2wynagrodzenieZaDyzur.innerHTML = this.wynagrodzenie_za_dyzur
    }
    koszt_uzyskania_przychodu_gora(){
        const przychod = document.querySelector('.Koszt_uzyskania_przychodu').value;
        PIT2kosztUzyskaniaPrzychodu.innerHTML = przychod;
        
    }
    placa_zagraniczna_do_5922(){
        let podlicz = this.jakies_gowno2-this.suma_gora
        PIT2placaZagranicznaDo5922.innerHTML = (Math.round(podlicz*100))/100 + ' '
    } 
    znajdz_mnie_ulga_do_26_lat(){
        const wiek = document.querySelector('.Wiek').innerHTML;

        let I37;
        if(this.podstawa_wymiaru_skladki_zdrowotnej_zus>this.podstawa_wymiaru_skladki_zdrowotnej_us){
           I37 = this.zaliczka_na_podatek_po_zaokragleniu_zus
                 }else{
            I37 = Math.round((Math.round(this.podstawa_wymiaru_skladki_zdrowotnej_us -this.koszt_uzyskania_przychodu_zus))*0.17)
         }
  
        if(wiek<26){
            this.ulga_do_26_lat = this.jakies_gowno3-this.jakies_gowno2-I37
        }else{
            this.ulga_do_26_lat = 0;
        
        }
        PIT2ulgaDoLat26.innerHTML = this.ulga_do_26_lat.toFixed(2);

    }
    licz_placa_zagraniczna_ulga_zus(){
        this.G11 = this.jakies_gowno3-this.jakies_gowno2;
        if(document.querySelector('.Wiek').innerHTML<26){
            this.placa_zagraniczna_ulga_zus = this.ulga_do_26_lat;
        }else{
            if(this.G11<0){
                this.placa_zagraniczna_ulga_zus=0;
            }else{
                this.placa_zagraniczna_ulga_zus= this.G11
            }
        }
    PIT2placaZagranicznaUlgazus.innerHTML = (this.placa_zagraniczna_ulga_zus).toFixed(2)+ " ";

    }
    znajdz_k36(){
 
    this.K36 =  ((Math.round( Math.round((Math.round(this.podstawa_wymiaru_skladki_zdrowotnej_us -this.koszt_uzyskania_przychodu_zus)))*0.12)-this.kwota_zmniejszajaca_podatek_zus)-this.zaliczka_na_podatek_po_zaokragleniu_zus);
    }
    placa_zagraniczna_ulga_zus_i_pit(){
        if(this.G11<0){
            this.praca_zagraniczna_ulga_zus_i_pit = this.K36;
           
        }else{
            this.praca_zagraniczna_ulga_zus_i_pit = this.jakies_gowno - this.jakies_gowno3
        }
        PIT2placaZagranicznaUlgazusipit.innerHTML = (this.praca_zagraniczna_ulga_zus_i_pit).toFixed(2)+" ";

    }

    
}
const xd2 = new pit;




//gorne okienko

const BEZ_PIT2wynagrodzenieBrutto = document.querySelector('.lad_bez_pit2 .wynagrodzenie_brutto');
const BEZ_PIT2wynagrodzenieBruttoDwa = document.querySelector('.lad_bez_pit2  .brutto_dwa');
const BEZ_PIT2wynagrodzenieBruttoDwa2 = document.querySelector('.lad_bez_pit2  .brutto_dwa2');
const BEZ_PIT2wynagrodzenieBruttoDwa3 = document.querySelector('.lad_bez_pit2  .brutto_dwa3');

const BEZ_PIT2ulgaDoOddelegowania = document.querySelector('.lad_bez_pit2 .ulga_do_oddelegowania');
const BEZ_PIT2wynagrodzenie_netto = document.querySelector('.lad_bez_pit2 .wynagrodzenie_netto');
const BEZ_PIT2wynagrodzenieZasadnicze = document.querySelector('.lad_bez_pit2 .wynagrodzenie_zasadnicze');

const BEZ_PIT2premieInne = document.querySelector('.lad_bez_pit2 .premie_inne');
const BEZ_PIT2ryczaltZaNadgodziny = document.querySelector('.lad_bez_pit2 .ryczalt_za_nadgodziny');
const BEZ_PIT2ryczaltZaGodzinyNocne = document.querySelector('.lad_bez_pit2 .ryczalt_za_godziny_nocne');
const BEZ_PIT2dodatki = document.querySelector('.lad_bez_pit2 .dodatki');
const BEZ_PIT2wynagrodzenieChorobowe = document.querySelector('.lad_bez_pit2 .wynagrodzenie_chorobowe');
const BEZ_PIT2wynagrodzenieUrlopowe = document.querySelector('.lad_bez_pit2 .wynagrodzenie_urlopowe');
const BEZ_PIT2suma = document.querySelector('.lad_bez_pit2 .suma');
const BEZ_PIT2ulgaDlaKlasySredniej = document.querySelector('.lad_bez_pit2 .ulga_dla_klasy_sredniej');
const BEZ_PIT2kosztUzyskaniaPrzychodu = document.querySelector('.lad_bez_pit2 ._koszt_uzyskania_przychodu');
const BEZ_PIT2placaZagranicznaDo5922 = document.querySelector('.lad_bez_pit2 .placa_zagraniczna_do_5922');
const BEZ_PIT2placaZagranicznaUlgazus = document.querySelector('.lad_bez_pit2 .placa_zagraniczna_ulga_zus');
const BEZ_PIT2placaZagranicznaUlgazusipit = document.querySelector('.lad_bez_pit2 .placa_zagraniczna_ulga_zus_i_pit');
const BEZ_PIT2ulgaDoLat26 = document.querySelector('.lad_bez_pit2 .ulga_do_lat_26');

//dolne okenko
const LAD_BEZ_PIT2_PodsumowanieI4_emerytalna = document.querySelector(".lad_bez_pit2 .emerytalna");
const LAD_BEZ_PIT2_PodsumowanieI4_rentowa = document.querySelector(".lad_bez_pit2 .rentowa");
const LAD_BEZ_PIT2_PodsumowanieI4_chorobowa = document.querySelector(".lad_bez_pit2 .chorobowa");
const LAD_BEZ_PIT2_PodsumowanieI4_podstawa_wymiaru_skladki_zdrowotnej = document.querySelector(".lad_bez_pit2 .podstawa_wymiaru_skladki_zdrowotnej");
const LAD_BEZ_PIT2_PodsumowanieI4_zdrowotna = document.querySelector(".lad_bez_pit2 .zdrowotna");
const LAD_BEZ_PIT2_PodsumowanieI4_koszt_uzyskania_przychodu = document.querySelector(".lad_bez_pit2 .koszt_uzyskania_przychodu");
const LAD_BEZ_PIT2_PodsumowanieI4_ulga_klasa_srednia = document.querySelector(".lad_bez_pit2 .ulga_klasa_srednia");
const LAD_BEZ_PIT2_PodsumowanieI4_podstawa_wymiaru_podatku = document.querySelector(".lad_bez_pit2 .podstawa_wymiaru_podatku");
const LAD_BEZ_PIT2_PodsumowanieI4_podstawa_wymiaru_podatku_po_zaokragleniu = document.querySelector(".lad_bez_pit2 .podstawa_wymiaru_podatku_po_zaokragleniu");
const LAD_BEZ_PIT2_PodsumowanieI4_kwota_zmniejszająca_podatek = document.querySelector(".lad_bez_pit2 .Kwota_zmniejszajaca_podatek");
const LAD_BEZ_PIT2_PodsumowanieI4_zaliczka_na_podatek = document.querySelector(".lad_bez_pit2 .zaliczka_na_podatek");
const LAD_BEZ_PIT2_PodsumowanieI4_zaliczka_na_podatek_po_zaokragleniu = document.querySelector(".lad_bez_pit2 .zaliczka_na_podatek_po_zaokragleniu");
const LAD_BEZ_PIT2_PodsumowanieI4_wynagrodzenie_netto = document.querySelector(".lad_bez_pit2 .wynagrodzenie_netto");
const LAD_BEZ_PIT2_PodsumowanieI4_wynagrodzenie_netto_do_26_lat = document.querySelector(".lad_bez_pit2 .wynagrodzenie_netto_do_26_lat");
const LAD_BEZ_PIT2_PodsumowanieI4_emerytalne = document.querySelector(".lad_bez_pit2 .emerytalne");
const LAD_BEZ_PIT2_PodsumowanieI4_rentowe = document.querySelector(".lad_bez_pit2 .rentowe");
const LAD_BEZ_PIT2_PodsumowanieI4_wypadkowe = document.querySelector(".lad_bez_pit2 .wypadkowe");
const LAD_BEZ_PIT2_PodsumowanieI4_FP = document.querySelector(".lad_bez_pit2 .FP");
const LAD_BEZ_PIT2_PodsumowanieI4_FGSP = document.querySelector(".lad_bez_pit2 .FGSP");
const LAD_BEZ_PIT2_PodsumowanieI4_koszt_calkowity_pracodawcy = document.querySelector(".lad_bez_pit2 .koszt_calkowity_pracodawcy");
const LAD_BEZ_PIT2_PodsumowanieI4_Zastosowanie = document.querySelector(".lad_bez_pit2 .zastosowanie");

const LAD_BEZ_PIT2_DietaUS_emerytalna = document.querySelector(".lad_bez_pit2 .dieta_do_us .emerytalna");
const LAD_BEZ_PIT2_DietaUS_rentowa = document.querySelector(".lad_bez_pit2 .dieta_do_us .rentowa");
const LAD_BEZ_PIT2_DietaUS_chorobowa = document.querySelector(".lad_bez_pit2 .dieta_do_us .chorobowa");
const LAD_BEZ_PIT2_DietaUS_podstawa_wymiaru_skladki_zdrowotnej = document.querySelector(".lad_bez_pit2 .dieta_do_us .podstawa_wymiaru_skladki_zdrowotnej");
const LAD_BEZ_PIT2_DietaUS_zdrowotna = document.querySelector(".lad_bez_pit2 .dieta_do_us .zdrowotna");
const LAD_BEZ_PIT2_DietaUS_koszt_uzyskania_przychodu = document.querySelector(".lad_bez_pit2 .dieta_do_us .koszt_uzyskania_przychodu");
const LAD_BEZ_PIT2_DietaUS_ulga_klasa_srednia = document.querySelector(".lad_bez_pit2 .dieta_do_us .ulga_klasa_srednia");
const LAD_BEZ_PIT2_DietaUS_podstawa_wymiaru_podatku = document.querySelector(".lad_bez_pit2 .dieta_do_us .podstawa_wymiaru_podatku");
const LAD_BEZ_PIT2_DietaUS_podstawa_wymiaru_podatku_po_zaokragleniu = document.querySelector(".lad_bez_pit2 .dieta_do_us .podstawa_wymiaru_podatku_po_zaokragleniu");
const LAD_BEZ_PIT2_DietaUS_kwota_zmniejszająca_podatek = document.querySelector(".lad_bez_pit2 .dieta_do_us .Kwota_zmniejszajaca_podatek");
const LAD_BEZ_PIT2_DietaUS_zaliczka_na_podatek = document.querySelector(".lad_bez_pit2 .dieta_do_us .zaliczka_na_podatek");
const LAD_BEZ_PIT2_DietaUS_zaliczka_na_podatek_po_zaokragleniu = document.querySelector(".lad_bez_pit2 .dieta_do_us .zaliczka_na_podatek_po_zaokragleniu");
const LAD_BEZ_PIT2_DietaUS_wynagrodzenie_netto = document.querySelector(".lad_bez_pit2 .dieta_do_us .wynagrodzenie_netto");
const LAD_BEZ_PIT2_DietaUS_wynagrodzenie_netto_do_26_lat = document.querySelector(".lad_bez_pit2 .dieta_do_us .wynagrodzenie_netto_do_26_lat");
const LAD_BEZ_PIT2_DietaUS_emerytalne = document.querySelector(".lad_bez_pit2 .dieta_do_us .emerytalne");
const LAD_BEZ_PIT2_DietaUS_rentowe = document.querySelector(".lad_bez_pit2 .dieta_do_us .rentowe");
const LAD_BEZ_PIT2_DietaUS_wypadkowe = document.querySelector(".lad_bez_pit2 .dieta_do_us .wypadkowe");
const LAD_BEZ_PIT2_DietaUS_FP = document.querySelector(".lad_bez_pit2 .dieta_do_us .FP");
const LAD_BEZ_PIT2_DietaUS_FGSP = document.querySelector(".lad_bez_pit2 .dieta_do_us .FGSP");
const LAD_BEZ_PIT2_DietaUS_koszt_calkowity_pracodawcy = document.querySelector(".lad_bez_pit2 .dieta_do_us .koszt_calkowity_pracodawcy");
const LAD_BEZ_PIT2_DietaUS_Zastosowanie = document.querySelector(".lad_bez_pit2 .dieta_do_us .zastosowanie");

const LAD_BEZ_PIT2_DietaZUS_emerytalna = document.querySelector(".lad_bez_pit2 .dieta_do_zus .emerytalna");
const LAD_BEZ_PIT2_DietaZUS_rentowa = document.querySelector(".lad_bez_pit2 .dieta_do_zus .rentowa");
const LAD_BEZ_PIT2_DietaZUS_chorobowa = document.querySelector(".lad_bez_pit2 .dieta_do_zus .chorobowa");
const LAD_BEZ_PIT2_DietaZUS_podstawa_wymiaru_skladki_zdrowotnej = document.querySelector(".lad_bez_pit2 .dieta_do_zus .podstawa_wymiaru_skladki_zdrowotnej");
const LAD_BEZ_PIT2_DietaZUS_zdrowotna = document.querySelector(".lad_bez_pit2 .dieta_do_zus .zdrowotna");
const LAD_BEZ_PIT2_DietaZUS_koszt_uzyskania_przychodu = document.querySelector(".lad_bez_pit2 .dieta_do_zus .koszt_uzyskania_przychodu");
const LAD_BEZ_PIT2_DietaZUS_ulga_klasa_srednia = document.querySelector(".lad_bez_pit2 .dieta_do_zus .ulga_klasa_srednia");
const LAD_BEZ_PIT2_DietaZUS_podstawa_wymiaru_podatku = document.querySelector(".lad_bez_pit2 .dieta_do_zus .podstawa_wymiaru_podatku");
const LAD_BEZ_PIT2_DietaZUS_podstawa_wymiaru_podatku_po_zaokragleniu = document.querySelector(".lad_bez_pit2 .dieta_do_zus .podstawa_wymiaru_podatku_po_zaokragleniu");
const LAD_BEZ_PIT2_DietaZUS_kwota_zmniejszająca_podatek = document.querySelector(".lad_bez_pit2 .dieta_do_zus .Kwota_zmniejszajaca_podatek");
const LAD_BEZ_PIT2_DietaZUS_zaliczka_na_podatek = document.querySelector(".lad_bez_pit2 .dieta_do_zus .zaliczka_na_podatek");
const LAD_BEZ_PIT2_DietaZUS_zaliczka_na_podatek_po_zaokragleniu = document.querySelector(".lad_bez_pit2 .dieta_do_zus .zaliczka_na_podatek_po_zaokragleniu");
const LAD_BEZ_PIT2_DietaZUS_wynagrodzenie_netto = document.querySelector(".lad_bez_pit2 .dieta_do_zus .wynagrodzenie_netto");
const LAD_BEZ_PIT2_DietaZUS_wynagrodzenie_netto_do_26_lat = document.querySelector(".lad_bez_pit2 .dieta_do_zus .wynagrodzenie_netto_do_26_lat");
const LAD_BEZ_PIT2_DietaZUS_emerytalne = document.querySelector(".lad_bez_pit2 .dieta_do_zus .emerytalne");
const LAD_BEZ_PIT2_DietaZUS_rentowe = document.querySelector(".lad_bez_pit2 .dieta_do_zus .rentowe");
const LAD_BEZ_PIT2_DietaZUS_wypadkowe = document.querySelector(".lad_bez_pit2 .dieta_do_zus .wypadkowe");
const LAD_BEZ_PIT2_DietaZUS_FP = document.querySelector(".lad_bez_pit2 .dieta_do_zus .FP");
const LAD_BEZ_PIT2_DietaZUS_FGSP = document.querySelector(".lad_bez_pit2 .dieta_do_zus .FGSP");
const LAD_BEZ_PIT2_DietaZUS_koszt_calkowity_pracodawcy = document.querySelector(".lad_bez_pit2 .dieta_do_zus .koszt_calkowity_pracodawcy");
const LAD_BEZ_PIT2_DietaZUS_Zastosowanie = document.querySelector(".lad_bez_pit2 .dieta_do_zus .zastosowanie");

class bez_pit2{
    wynagrodzenenie_brutto = 0;
    ulga_do_oddelegowania = 0;
    brutto_zus = 0;
    limit_zus = 0;
    brutto_us = 0;



    
    constructor(){
        this.licz_wszystko();
        if(licz_brutto)
       licz_brutto.addEventListener('click', this.licz_wszystko.bind(this))

    }


    licz_wszystko(){

        this.oblicz_kwota_zmniejszająca_podatek();



        if( document.querySelector(".wynagrodzenie_brutto"))
        this.wynagrodzenenie_brutto =  document.querySelector(".wynagrodzenie_brutto").value
if(document.querySelector(".ulga_do_oddelegowania"))
this.ulga_do_oddelegowania = document.querySelector(".Jaka_ulga_do_oddelegowania").value*1



if(document.querySelector('.limit_zus'))
this.limit_zus = document.querySelector('.limit_zus').innerHTML;


  
        this.oblicz_wszystko_xd();
        this.poka_wynagrodzenie_brutto();
        this.licz_syfony()  
        this.licz_jedynaka();    
        this.oblicz_brutto_us();
        // this.poka_ulga_do_oddelegowania();
        this.poka_wynagrodzenie_zasadnicze();
        this.poka_wynagrodzenie_za_dyzur();
        this.poka_premie_regulaminowa()
        this.poka_ryczalt_za_nadgodziny();
        this.poka_ryczalt_za_godziny_nocne();
        this.poka_dodatki();
        this.poka_chorobowe_i_urlopowe();
        this.poka_sume();

        
        this.oblicz_emerytalna();
        this.oblicz_rentowa();
        this.oblicz_chorobowa();
        this.oblicz_podstawa_wymiaru_skladki_zdrowotnej();
        this.oblicz_zdrowotna();
        this.oblicz_koszt_uzyskania_przychodu();
        this.oblicz_ulga_klasa_srednia();
        this.oblicz_podstawa_wymiaru_podatku();
        this.oblicz_podstawa_wymiaru_podatku_po_zaokragleniu();
        this.oblicz_zaliczka_na_podatek();
        this.oblicz_zaliczka_na_podatek_po_zaokragleniu();
        this.oblicz_wynagrodzenie_netto();
        this.oblicz_wynagrodzenie_netto_do_26_lat();
        this.oblicz_koniec();
        this.oblicz_zastosowanie();
        this.poka_placa_zagraniczna_do_5922();
        this.poka_ulga_do_26_lat()
        this.poka_placa_zagraniczna_ulga_zus();
        this.poka_placa_zagraniczna_ulga_zus_i_pit();
     
    }
    oblicz_brutto_us(){








    //     this.jakies_sianko;
    //     this.limit_ZUS;
    //     let pierwsza_zmienna;
    //     if(this.jakies_sianko<this.limit_ZUS){
    //         pierwsza_zmienna = this.limit_ZUS;
    //     }else{
    //         pierwsza_zmienna = this.jakies_sianko;
    //     }
    //     let druga_zmienna = (this.wynagrodzenenie_brutto*1) - (document.querySelector('.wynagrodzenie_chorobowe').value*1);
    //     if(pierwsza_zmienna>druga_zmienna){
    //         this.jakies_gowno2= druga_zmienna;
    //     }else{
    //         this.jakies_gowno2 = pierwsza_zmienna;
    //     }

    //     // if(pierwsza_zmienna>)
   
    // PIT2wynagrodzenieBruttoDwa2.innerHTML = (this.jakies_gowno2*1).toFixed(2);





        const f19 = document.querySelector('.jedynak').innerHTML
        const zus = document.querySelector('.limit_zus').innerHTML
   
        let e19;
        if(f19<zus){
            e19 = zus;
        }else{
            e19=f19;
        }
        const g19 = this.wynagrodzenenie_brutto - document.querySelector('.wynagrodzenie_chorobowe').innerHTML*1
  
        if(e19>g19){
            this.brutto_us = g19;
        }else
        {
            this.brutto_us = e19;
        }
        document.querySelector('.brutto_us').innerHTML=this.brutto_us;
    
        console.log(this.brutto_us);

        let c20 = 0;
        if(this.wynagrodzenenie_brutto*1<this.limit_zus*1){
            c20 = this.wynagrodzenenie_brutto;
        }else{
            c20 = this.limit_zus;
        }   
    


        // if(this.limit_zus>=c20){
        //     this.brutto_us = c20;
        // }else if(this.limit_zus>=(this.wynagrodzenenie_brutto-this.ulga_do_oddelegowania)){
        //     this.brutto_us = this.limit_zus;
        // }else if(this.limit_zus<(this.wynagrodzenenie_brutto-this.ulga_do_oddelegowania)){
        //     this.brutto_us = (this.wynagrodzenenie_brutto-this.ulga_do_oddelegowania);
        // }
        let G24 = (this.brutto_us*0.0976 + this.brutto_us * 0.015 + this.brutto_us * 0.0245).toFixed(2);


        
        let k25;
        const chorobowexd = document.querySelector('.strona_prawa .wynagrodzenie_chorobowe').value;

        let k26=(this.wynagrodzenenie_brutto - chorobowexd - this.limit_zus)<0?0:(this.wynagrodzenenie_brutto - chorobowexd - this.limit_zus).toFixed(2);

        const pracownik = document.querySelector('.kierowca').innerHTML;
        document.querySelectorAll('.pracownik').forEach(el=>{
            if(el.innerHTML.toUpperCase().includes(pracownik)){
         
                k25 = ((el.querySelector('.dieta_zagraniczna').textContent)/3).toFixed(2)
                
                
            }
        })
         const k12 = k25>k26?k25:0;

            const k13 = (k12-k26)<=0?0:(k12-k26).toFixed(2);
            const brutto_4 = this.brutto_us - k13;
            const emeryt = brutto_4 * (zmienna_emerytalna.value*1)
            const rent = brutto_4* (zmienna_rentowa.value*1)
            const choro = brutto_4 * (zmienna_chorobowa.value*1);
            const L24 = (emeryt + rent+choro).toFixed(2);

            const H25 = ((this.dietaUS_emerytalna + this.dietaUS_chorobowa + this.dietaUS_rentowa) - L24)<=0?0:((this.dietaUS_emerytalna + this.dietaUS_chorobowa + this.dietaUS_rentowa) - L24);



       this.brutto_zus = (this.wynagrodzenenie_brutto - (this.ulga_do_oddelegowania/3)+H25).toFixed(2);
        document.querySelector('.brutto_zus').innerHTML  = this.brutto_zus      


    }
    oblicz_wszystko_xd(){
    this.podsumowanieI4_emerytalna = this.wynagrodzenenie_brutto*(zmienna_emerytalna.value*1);
    this.podsumowanieI4_rentowa = this.wynagrodzenenie_brutto*(zmienna_rentowa.value*1);
    this.podsumowanieI4_chorobowa = this.wynagrodzenenie_brutto*(zmienna_chorobowa.value*1);
    this.podsumowanieI4_podstawa_wymiaru_skladki_zdrowotnej = this.wynagrodzenenie_brutto - this.podsumowanieI4_emerytalna - this.podsumowanieI4_rentowa - this.podsumowanieI4_chorobowa;
    this.podsumowanieI4_koszt_uzyskania_przychodu = document.querySelector('.Koszt_uzyskania_przychodu').value;
    this.podsumowanieI4_ulga_klasa_srednia = 0;
    this.podsumowanieI4_podstawa_wymiaru_podatku = this.podsumowanieI4_podstawa_wymiaru_skladki_zdrowotnej-this.podsumowanieI4_koszt_uzyskania_przychodu-this.podsumowanieI4_ulga_klasa_srednia;
    this.podsumowanieI4_kwota_zmniejszająca_podatek = document.querySelector('.lad_bez_pit2 .Kwota_zmniejszajaca_podatek').innerHTML*1;
    this.podsumowanieI4_zaliczka_na_podatek = Math.round(this.podsumowanieI4_podstawa_wymiaru_podatku)*0.17-this.podsumowanieI4_kwota_zmniejszająca_podatek;
    
    this.brutto_us=document.querySelector('.brutto_us').innerHTML*1;
    console.log(this.brutto_us);

    this.dietaUS_emerytalna = this.brutto_us*(zmienna_emerytalna.value*1);

    this.dietaUS_rentowa = this.brutto_us*(zmienna_rentowa.value*1);
    this.dietaUS_chorobowa = this.brutto_us*(zmienna_chorobowa.value*1);
    this.dietaUS_podstawa_wymiaru_skladki_zdrowotnej = this.brutto_us - this.dietaUS_emerytalna - this.dietaUS_rentowa - this.dietaUS_chorobowa;
    this.dietaUS_koszt_uzyskania_przychodu =  document.querySelector('.Koszt_uzyskania_przychodu').value;
    this.dietaUS_ulga_klasa_srednia = 0;
    this.dietaUS_podstawa_wymiaru_podatku = this.dietaUS_podstawa_wymiaru_skladki_zdrowotnej-this.dietaUS_koszt_uzyskania_przychodu-this.dietaUS_ulga_klasa_srednia;
    this.dietaUS_kwota_zmniejszająca_podatek = document.querySelector('.lad_bez_pit2 .Kwota_zmniejszajaca_podatek').innerHTML*1;
    this.dietaUS_zaliczka_na_podatek = Math.round(this.dietaUS_podstawa_wymiaru_podatku)*0.17-this.dietaUS_kwota_zmniejszająca_podatek;
    
    
    this.dietaZUS_emerytalna = this.brutto_zus*(zmienna_emerytalna.value*1);
    this.dietaZUS_rentowa = this.brutto_zus*(zmienna_rentowa.value*1);
    this.dietaZUS_chorobowa = this.brutto_zus*(zmienna_chorobowa.value*1);
    this.dietaZUS_podstawa_wymiaru_skladki_zdrowotnej = 0;//obliczane nizej
    this.dietaZUS_koszt_uzyskania_przychodu =  document.querySelector('.Koszt_uzyskania_przychodu').value;
    this.dietaZUS_ulga_klasa_srednia = 0;
       //dietaZUS_podstawa_wymiaru_podatku = this.dietaZUS_podstawa_wymiaru_skladki_zdrowotnej-this.dietaZUS_koszt_uzyskania_przychodu-this.dietaZUS_ulga_klasa_srednia;  useless
       this.dietaZUS_kwota_zmniejszająca_podatek = 0;
       //dietaZUS_zaliczka_na_podatek = Math.round(this.dietaZUS_podstawa_wymiaru_podatku)*0.12; useless
    
    }

//gorne okienko

    poka_wynagrodzenie_brutto(){
        BEZ_PIT2wynagrodzenieBrutto.innerHTML = (this.wynagrodzenenie_brutto*1).toFixed(2);
        document.querySelector('.brutto_podsumowanie').innerHTML = this.wynagrodzenenie_brutto;
    }
    licz_syfony(){
       if(this.wynagrodzenenie_brutto*1<this.limit_zus*1){
        document.querySelector('.syfon_podsumowanie').innerHTML = this.wynagrodzenenie_brutto;

       }else{
        document.querySelector('.syfon_podsumowanie').innerHTML = this.limit_zus;
       }

       document.querySelector('.syfon_us').innerHTML= (this.wynagrodzenenie_brutto*1 - document.querySelector(".Jaka_ulga_do_oddelegowania").value*1).toFixed(2);

   



       document.querySelector('.syfon_zus').innerHTML = (this.wynagrodzenenie_brutto - (this.ulga_do_oddelegowania/3)).toFixed(2);
    }
    licz_jedynaka(){
        document.querySelector('.jedynak').innerHTML = (document.querySelector('.syfon_us').innerHTML*1) - (document.querySelector('.wynagrodzenie_chorobowe').value*1);
       
    }
    // poka_ulga_do_oddelegowania(){
    //     const pracownicy = document.querySelectorAll('.pracownik');
    //     const poszukiwane_imie = document.querySelector('.kierowca').innerHTML;
      
    //     pracownicy.forEach((el)=>{
    //         let text = el.innerHTML;
    //    
    //         if((text.toUpperCase()).includes(poszukiwane_imie)){
    //         this.ulga_do_oddelegowania = el.querySelector('.dieta_zagraniczna').textContent;
    //    
    //         BEZ_PIT2ulgaDoOddelegowania.innerHTML = this.ulga_do_oddelegowania;
    //         }
    //     }) 
    // }
    poka_wynagrodzenie_zasadnicze(){
        BEZ_PIT2wynagrodzenieZasadnicze.innerHTML= dane4TRANSWynagrodzenieZasadnicze.innerHTML;
    }
    poka_wynagrodzenie_za_dyzur(){
        BEZ_PIT2wynagrodzenieZaDyzur.innerHTML= app.wynagrodzenie_za_dyzur;
    }
    poka_premie_regulaminowa(){
        BEZ_PIT2premieInne.innerHTML = dane4TRANSPremiaRegulaminowa.innerHTML;
    }
    poka_ryczalt_za_nadgodziny(){
        BEZ_PIT2ryczaltZaNadgodziny.innerHTML= (ryczalt_za_godziny_nadliczbowe.innerHTML*1 + wyrownanie_za_ryczalty_za_godziny_nadliczbowe.innerHTML*1).toFixed(2);
    }
    poka_ryczalt_za_godziny_nocne(){
       BEZ_PIT2ryczaltZaGodzinyNocne.innerHTML = ryczalt_za_czas_pracy_w_nocy.innerHTML*1 +  wyrownanie_za_ryczalty_za_czas_pracy_w_nocy.innerHTML*1;
    }
    poka_dodatki(){
        BEZ_PIT2dodatki.innerHTML = (dodatki.innerHTML*1).toFixed(2);
       PIT2dodatki.innerHTML = (dodatki.innerHTML*1).toFixed(2);
    }
    poka_chorobowe_i_urlopowe(){
        const chorobowexd = document.querySelector('.strona_prawa .wynagrodzenie_chorobowe').value;
        const urlopowexd= document.querySelector('.strona_prawa .wynagrodzenie_urlopowe').value;

        BEZ_PIT2wynagrodzenieChorobowe.innerHTML = chorobowexd;
        BEZ_PIT2wynagrodzenieUrlopowe.innerHTML = urlopowexd;
    }
    poka_sume(){
        let suma = BEZ_PIT2wynagrodzenieChorobowe.innerHTML*1 +BEZ_PIT2wynagrodzenieUrlopowe.innerHTML*1+ dodatki.innerHTML*1+ BEZ_PIT2ryczaltZaGodzinyNocne.innerHTML*1 + BEZ_PIT2ryczaltZaNadgodziny.innerHTML*1 + dane4TRANSPremiaRegulaminowa.innerHTML*1 +  app.wynagrodzenie_za_dyzur*1 + dane4TRANSWynagrodzenieZasadnicze.innerHTML*1;
        BEZ_PIT2suma.innerHTML = (Math.round(suma*100))/100;

    }
    poka_placa_zagraniczna_do_5922(){
        BEZ_PIT2placaZagranicznaDo5922.innerHTML = (this.brutto_us - BEZ_PIT2suma.innerHTML).toFixed(2);
    }
    poka_ulga_do_26_lat(){
        let J36 = Math.round(Math.round(this.dietaUS_podstawa_wymiaru_skladki_zdrowotnej-this.dietaZUS_koszt_uzyskania_przychodu-this.dietaZUS_ulga_klasa_srednia)*.17);
        let I37 = 0;

        if(LAD_BEZ_PIT2_DietaZUS_podstawa_wymiaru_skladki_zdrowotnej.innerHTML>LAD_BEZ_PIT2_DietaUS_podstawa_wymiaru_skladki_zdrowotnej.innerHTML){
            I37 = LAD_I_PIT2_DietaZUS_zaliczka_na_podatek_po_zaokragleniu.innerHTML;
        }else{
            I37 = J36;
        }

        if(document.querySelector(".Wiek").innerHTML <= 25){
           BEZ_PIT2ulgaDoLat26.innerHTML = (this.brutto_zus - this.brutto_us)- I37;
        }else{
            BEZ_PIT2ulgaDoLat26.innerHTML = 0;
        }
    }

    poka_placa_zagraniczna_ulga_zus(){

        if(document.querySelector(".Wiek").innerHTML <= 25){
            BEZ_PIT2placaZagranicznaUlgazus.innerHTML = (BEZ_PIT2ulgaDoLat26*1).toFixed(2);
        }else if((this.brutto_zus - this.brutto_us)<0){
            BEZ_PIT2placaZagranicznaUlgazus.innerHTML = 0;
        }else{
            BEZ_PIT2placaZagranicznaUlgazus.innerHTML = (this.brutto_zus - this.brutto_us).toFixed(2);
        }



        //BEZ_PIT2placaZagranicznaUlgazus.innerHTML
    }




    poka_placa_zagraniczna_ulga_zus_i_pit(){
        let J36 = Math.round(Math.round(this.dietaUS_podstawa_wymiaru_skladki_zdrowotnej-this.dietaZUS_koszt_uzyskania_przychodu-this.dietaZUS_ulga_klasa_srednia)*.17);

        if((this.brutto_zus-this.brutto_us)<0){
            BEZ_PIT2placaZagranicznaUlgazusipit.innerHTML = (J36 - LAD_BEZ_PIT2_DietaZUS_zaliczka_na_podatek_po_zaokragleniu.innerHTML).toFixed(2);
        }else{
            BEZ_PIT2placaZagranicznaUlgazusipit.innerHTML = (this.wynagrodzenenie_brutto - this.brutto_zus).toFixed(2);
        }
    }
    

















    //dolne okienko



    
    oblicz_emerytalna(){
        LAD_BEZ_PIT2_PodsumowanieI4_emerytalna.innerHTML = this.podsumowanieI4_emerytalna.toFixed(2);
        LAD_BEZ_PIT2_DietaUS_emerytalna.innerHTML = this.dietaUS_emerytalna.toFixed(2);
        LAD_BEZ_PIT2_DietaZUS_emerytalna.innerHTML = this.dietaZUS_emerytalna.toFixed(2);
    }
    oblicz_rentowa(){
        LAD_BEZ_PIT2_PodsumowanieI4_rentowa.innerHTML = this.podsumowanieI4_rentowa.toFixed(2);
        LAD_BEZ_PIT2_DietaUS_rentowa.innerHTML = this.dietaUS_rentowa.toFixed(2);
        LAD_BEZ_PIT2_DietaZUS_rentowa.innerHTML = this.dietaZUS_rentowa.toFixed(2);
    }
    oblicz_chorobowa(){
        LAD_BEZ_PIT2_PodsumowanieI4_chorobowa.innerHTML = this.podsumowanieI4_chorobowa.toFixed(2);
        LAD_BEZ_PIT2_DietaUS_chorobowa.innerHTML = this.dietaUS_chorobowa.toFixed(2);
        LAD_BEZ_PIT2_DietaZUS_chorobowa.innerHTML = this.dietaZUS_chorobowa.toFixed(2);
    }
    oblicz_podstawa_wymiaru_skladki_zdrowotnej(){
        LAD_BEZ_PIT2_PodsumowanieI4_podstawa_wymiaru_skladki_zdrowotnej.innerHTML = this.podsumowanieI4_podstawa_wymiaru_skladki_zdrowotnej.toFixed(2);
        LAD_BEZ_PIT2_DietaUS_podstawa_wymiaru_skladki_zdrowotnej.innerHTML = (this.dietaUS_podstawa_wymiaru_skladki_zdrowotnej+ document.querySelector(' .wynagrodzenie_chorobowe').value*1).toFixed(2);
        let G24 = (this.brutto_us*0.0976 + this.brutto_us * 0.015 + this.brutto_us * 0.0245).toFixed(2);


        
        let k25;
        const chorobowexd = document.querySelector('.strona_prawa .wynagrodzenie_chorobowe').value;

        let k26=(this.wynagrodzenenie_brutto - chorobowexd - this.limit_zus)<0?0:(this.wynagrodzenenie_brutto - chorobowexd - this.limit_zus).toFixed(2);

        const pracownik = document.querySelector('.kierowca').innerHTML;
        document.querySelectorAll('.pracownik').forEach(el=>{
            if(el.innerHTML.toUpperCase().includes(pracownik)){
         
                k25 = ((el.querySelector('.dieta_zagraniczna').textContent)/3).toFixed(2)
                
                
            }
        })
         const k12 = k25>k26?k25:0;

            const k13 = (k12-k26)<=0?0:(k12-k26).toFixed(2);
            const brutto_4 = this.brutto_us - k13;
            const emeryt = brutto_4 * 0.0976
            const rent = brutto_4* 0.015
            const choro = brutto_4 * 0.0245;
            const L24 = (emeryt + rent+choro).toFixed(2);

            const H25 = ((this.dietaUS_emerytalna + this.dietaUS_chorobowa + this.dietaUS_rentowa) - L24)<=0?0:((this.dietaUS_emerytalna + this.dietaUS_chorobowa + this.dietaUS_rentowa) - L24);
            const J24 = (this.brutto_zus - G24).toFixed(2);
            const J23 = (this.brutto_zus - (this.brutto_zus*0.0976 + this.brutto_zus * 0.015 + this.brutto_zus * 0.0245)).toFixed(2)
            const H24 = (this.brutto_zus*0.0976 + this.brutto_zus * 0.015 + this.brutto_zus * 0.0245);
            
   
            if(L24<H24){
                this.dietaZUS_podstawa_wymiaru_skladki_zdrowotnej = J24
            }else{
                this.dietaZUS_podstawa_wymiaru_skladki_zdrowotnej = J23

            }
            LAD_BEZ_PIT2_DietaZUS_podstawa_wymiaru_skladki_zdrowotnej.innerHTML =  (this.dietaZUS_podstawa_wymiaru_skladki_zdrowotnej*1).toFixed(2);


            LAD_BEZ_PIT2_DietaZUS_podstawa_wymiaru_skladki_zdrowotnej.innerHTML = this.dietaZUS_podstawa_wymiaru_skladki_zdrowotnej 
    }
    oblicz_zdrowotna(){
        LAD_BEZ_PIT2_PodsumowanieI4_zdrowotna.innerHTML = (this.podsumowanieI4_podstawa_wymiaru_skladki_zdrowotnej * 0.09).toFixed(2);
        LAD_BEZ_PIT2_DietaUS_zdrowotna.innerHTML = (this.dietaUS_podstawa_wymiaru_skladki_zdrowotnej * 0.09).toFixed(2);
        LAD_BEZ_PIT2_DietaZUS_zdrowotna.innerHTML = (this.dietaZUS_podstawa_wymiaru_skladki_zdrowotnej * 0.09).toFixed(2); 
    }
    oblicz_koszt_uzyskania_przychodu(){
        this.dietaZUS_koszt_uzyskania_przychodu=  this.dietaUS_koszt_uzyskania_przychodu= this.podsumowanieI4_koszt_uzyskania_przychodu = document.querySelector('.Koszt_uzyskania_przychodu').value*1
        LAD_BEZ_PIT2_PodsumowanieI4_koszt_uzyskania_przychodu.innerHTML = this.podsumowanieI4_koszt_uzyskania_przychodu.toFixed(2);;
        LAD_BEZ_PIT2_DietaUS_koszt_uzyskania_przychodu.innerHTML = this.dietaUS_koszt_uzyskania_przychodu.toFixed(2);;
        LAD_BEZ_PIT2_DietaZUS_koszt_uzyskania_przychodu.innerHTML = this.dietaZUS_koszt_uzyskania_przychodu.toFixed(2);;
    }
    oblicz_ulga_klasa_srednia(){
        LAD_BEZ_PIT2_PodsumowanieI4_ulga_klasa_srednia.innerHTML = this.podsumowanieI4_ulga_klasa_srednia.toFixed(2);;
        LAD_BEZ_PIT2_DietaUS_ulga_klasa_srednia.innerHTML = this.dietaUS_ulga_klasa_srednia.toFixed(2);;
        LAD_BEZ_PIT2_DietaZUS_ulga_klasa_srednia.innerHTML = this.dietaZUS_ulga_klasa_srednia.toFixed(2);;
    }
    oblicz_podstawa_wymiaru_podatku(){
        LAD_BEZ_PIT2_PodsumowanieI4_podstawa_wymiaru_podatku.innerHTML=this.podsumowanieI4_podstawa_wymiaru_podatku.toFixed(2);
        LAD_BEZ_PIT2_DietaUS_podstawa_wymiaru_podatku.innerHTML=this.dietaUS_podstawa_wymiaru_podatku.toFixed(2);
        LAD_BEZ_PIT2_DietaZUS_podstawa_wymiaru_podatku.innerHTML=(this.dietaZUS_podstawa_wymiaru_skladki_zdrowotnej-this.dietaZUS_koszt_uzyskania_przychodu-this.dietaZUS_ulga_klasa_srednia).toFixed(2);
    }
    oblicz_podstawa_wymiaru_podatku_po_zaokragleniu(){
        LAD_BEZ_PIT2_PodsumowanieI4_podstawa_wymiaru_podatku_po_zaokragleniu.innerHTML = Math.round(LAD_BEZ_PIT2_PodsumowanieI4_podstawa_wymiaru_podatku.innerHTML).toFixed(2);
        LAD_BEZ_PIT2_DietaUS_podstawa_wymiaru_podatku_po_zaokragleniu.innerHTML = Math.round(LAD_BEZ_PIT2_DietaUS_podstawa_wymiaru_podatku.innerHTML).toFixed(2);
        LAD_BEZ_PIT2_DietaZUS_podstawa_wymiaru_podatku_po_zaokragleniu.innerHTML = Math.round(LAD_BEZ_PIT2_DietaZUS_podstawa_wymiaru_podatku.innerHTML).toFixed(2);
    }
    oblicz_kwota_zmniejszająca_podatek(){
        this.podsumowanieI4_kwota_zmniejszająca_podatek = LAD_BEZ_PIT2_PodsumowanieI4_kwota_zmniejszająca_podatek.innerHTML;
        this.dietaUS_kwota_zmniejszająca_podatek = LAD_BEZ_PIT2_DietaUS_kwota_zmniejszająca_podatek.innerHTML;
        this.dietaZUS_kwota_zmniejszająca_podatek = LAD_BEZ_PIT2_DietaZUS_kwota_zmniejszająca_podatek.innerHTML;
    }
    oblicz_zaliczka_na_podatek(){
        LAD_BEZ_PIT2_PodsumowanieI4_zaliczka_na_podatek.innerHTML=this.podsumowanieI4_zaliczka_na_podatek.toFixed(2);
        LAD_BEZ_PIT2_DietaUS_zaliczka_na_podatek.innerHTML=this.dietaUS_zaliczka_na_podatek.toFixed(2);
        this.dietaZUS_zaliczka_na_podatek =(LAD_I_PIT2_DietaZUS_podstawa_wymiaru_podatku_po_zaokragleniu.innerHTML*0.12) 
        LAD_BEZ_PIT2_DietaZUS_zaliczka_na_podatek.innerHTML= (LAD_I_PIT2_DietaZUS_podstawa_wymiaru_podatku_po_zaokragleniu.innerHTML*0.12)  
    

    }
    oblicz_zaliczka_na_podatek_po_zaokragleniu(){
        LAD_BEZ_PIT2_PodsumowanieI4_zaliczka_na_podatek_po_zaokragleniu.innerHTML=Math.round(this.podsumowanieI4_zaliczka_na_podatek).toFixed(2);
        LAD_BEZ_PIT2_DietaUS_zaliczka_na_podatek_po_zaokragleniu.innerHTML=Math.round(this.dietaUS_zaliczka_na_podatek).toFixed(2);
        LAD_BEZ_PIT2_DietaZUS_zaliczka_na_podatek_po_zaokragleniu.innerHTML= Math.round(LAD_BEZ_PIT2_DietaZUS_zaliczka_na_podatek.innerHTML*1).toFixed(2);
  
    }
    oblicz_wynagrodzenie_netto(){
       
     

       LAD_BEZ_PIT2_PodsumowanieI4_wynagrodzenie_netto.innerHTML = (this.wynagrodzenenie_brutto*1 - this.dietaUS_chorobowa*1
         - this.dietaUS_emerytalna*1 - this.dietaUS_rentowa*1 - (document.querySelector('.lad_bez_pit2 .dieta_do_us .zdrowotna').innerHTML*1)- (document.querySelector('.lad_bez_pit2 .dieta_do_zus .zaliczka_na_podatek_po_zaokragleniu').innerHTML*1)).toFixed(2);
  
        // if(LAD_BEZ_PIT2_DietaZUS_podstawa_wymiaru_skladki_zdrowotnej.innerHTML<LAD_BEZ_PIT2_PodsumowanieI4_podstawa_wymiaru_skladki_zdrowotnej.innerHTML){
        //     LAD_BEZ_PIT2_PodsumowanieI4_wynagrodzenie_netto.innerHTML = (this.wynagrodzenenie_brutto - this.dietaUS_emerytalna - this.dietaUS_rentowa - this.dietaUS_chorobowa - LAD_BEZ_PIT2_DietaUS_zdrowotna.innerHTML - J36).toFixed(2);
        // }else{
        //     LAD_BEZ_PIT2_PodsumowanieI4_wynagrodzenie_netto.innerHTML = (this.wynagrodzenenie_brutto - this.dietaUS_emerytalna - this.dietaUS_rentowa - this.dietaUS_chorobowa - LAD_BEZ_PIT2_DietaUS_zdrowotna.innerHTML - LAD_BEZ_PIT2_DietaZUS_zaliczka_na_podatek_po_zaokragleniu.innerHTML).toFixed(2);
        // }

        LAD_BEZ_PIT2_DietaUS_wynagrodzenie_netto.innerHTML = (this.brutto_us - this.dietaUS_emerytalna - this.dietaUS_rentowa -this.dietaUS_chorobowa -LAD_BEZ_PIT2_DietaUS_zdrowotna.innerHTML - LAD_BEZ_PIT2_DietaUS_zaliczka_na_podatek_po_zaokragleniu.innerHTML).toFixed(2);
        let I37;
      
        let J31 = Math.round(this.dietaUS_podstawa_wymiaru_skladki_zdrowotnej - this.dietaUS_koszt_uzyskania_przychodu);
        let J35 = (J31 * 0.12 - (document.querySelector('.lad_bez_pit2 .dieta_do_zus .Kwota_zmniejszajaca_podatek').innerHTML*1)).toFixed(2);
        let Je36 = Math.round(J35);

   

        if(this.dietaZUS_podstawa_wymiaru_skladki_zdrowotnej>this.dietaUS_podstawa_wymiaru_skladki_zdrowotnej){
            I37 = (document.querySelector('.lad_bez_pit2 .dieta_do_zus .zaliczka_na_podatek_po_zaokragleniu').innerHTML*1)
        }else{
            I37 =Je36;
        }
        




        LAD_BEZ_PIT2_DietaZUS_wynagrodzenie_netto.innerHTML = (this.brutto_zus - this.dietaZUS_chorobowa - this.dietaZUS_emerytalna - this.dietaZUS_rentowa -(document.querySelector('.lad_bez_pit2 .dieta_do_zus .zdrowotna').innerHTML*1)- I37).toFixed(2)
    
    }
    oblicz_wynagrodzenie_netto_do_26_lat(){

        // c39 w excelu zjebane potem obczajic

        LAD_BEZ_PIT2_DietaUS_wynagrodzenie_netto_do_26_lat.innerHTML = 0;
        LAD_BEZ_PIT2_DietaZUS_wynagrodzenie_netto_do_26_lat.innerHTML = 0;
    }
    oblicz_koniec(){
        LAD_BEZ_PIT2_PodsumowanieI4_emerytalne.innerHTML = (this.wynagrodzenenie_brutto*(zmienna_emerytalna.value*1)).toFixed(2);
        LAD_BEZ_PIT2_PodsumowanieI4_rentowe.innerHTML = (this.wynagrodzenenie_brutto*0.065).toFixed(2);
        LAD_BEZ_PIT2_PodsumowanieI4_wypadkowe.innerHTML = (this.wynagrodzenenie_brutto*document.querySelector('.wypadkowe').innerHTML*1).toFixed(2);
        LAD_BEZ_PIT2_PodsumowanieI4_FP.innerHTML = (this.wynagrodzenenie_brutto*(zmienna_fp.value*1)).toFixed(2);
        LAD_BEZ_PIT2_PodsumowanieI4_FGSP.innerHTML = (this.wynagrodzenenie_brutto*(zmienna_fgsp.value*1)).toFixed(2);
        LAD_BEZ_PIT2_PodsumowanieI4_koszt_calkowity_pracodawcy.innerHTML = ((this.wynagrodzenenie_brutto*1)+(LAD_BEZ_PIT2_PodsumowanieI4_emerytalne.innerHTML*1)+(LAD_BEZ_PIT2_PodsumowanieI4_rentowe.innerHTML*1)+(LAD_BEZ_PIT2_PodsumowanieI4_wypadkowe.innerHTML*1)+(LAD_BEZ_PIT2_PodsumowanieI4_FP.innerHTML*1)+(LAD_BEZ_PIT2_PodsumowanieI4_FGSP.innerHTML*1)).toFixed(2);

        LAD_BEZ_PIT2_DietaUS_emerytalne.innerHTML = (this.brutto_us*(zmienna_emerytalna.value*1)).toFixed(2);
        LAD_BEZ_PIT2_DietaUS_rentowe.innerHTML = (this.brutto_us*0.065).toFixed(2);
        LAD_BEZ_PIT2_DietaUS_wypadkowe.innerHTML = (this.brutto_us*document.querySelector('.wypadkowe').innerHTML*1).toFixed(2);
        LAD_BEZ_PIT2_DietaUS_FP.innerHTML = (this.brutto_us*(zmienna_fp.value*1)).toFixed(2);
        LAD_BEZ_PIT2_DietaUS_FGSP.innerHTML = (this.brutto_us*(zmienna_fgsp.value*1)).toFixed(2);
        LAD_BEZ_PIT2_DietaUS_koszt_calkowity_pracodawcy.innerHTML = 
        (this.brutto_us*1 +LAD_BEZ_PIT2_DietaUS_emerytalne.innerHTML*1 +  LAD_BEZ_PIT2_DietaUS_rentowe.innerHTML*1 + LAD_BEZ_PIT2_DietaUS_wypadkowe.innerHTML*1 +  LAD_BEZ_PIT2_DietaUS_FP.innerHTML*1 +  LAD_BEZ_PIT2_DietaUS_FGSP.innerHTML*1).toFixed(2)

        LAD_BEZ_PIT2_DietaZUS_emerytalne.innerHTML = (this.brutto_zus*(zmienna_emerytalna.value*1)).toFixed(2);
        LAD_BEZ_PIT2_DietaZUS_rentowe.innerHTML = (this.brutto_zus*0.065).toFixed(2);
        LAD_BEZ_PIT2_DietaZUS_wypadkowe.innerHTML = (this.brutto_zus*0.012).toFixed(2);
        LAD_BEZ_PIT2_DietaZUS_FP.innerHTML = (this.brutto_zus*(zmienna_fp.value*1)).toFixed(2);
        LAD_BEZ_PIT2_DietaZUS_FGSP.innerHTML = (this.brutto_zus*(zmienna_fgsp.value*1)).toFixed(2);
        LAD_BEZ_PIT2_DietaZUS_koszt_calkowity_pracodawcy.innerHTML =(((this.dietaUS_emerytalna*1)+(this.dietaUS_rentowa*1))+(this.dietaUS_chorobowa*1)+(this.dietaUS_podstawa_wymiaru_skladki_zdrowotnej * 0.09)+(LAD_BEZ_PIT2_DietaZUS_zaliczka_na_podatek_po_zaokragleniu.innerHTML*1)+(LAD_BEZ_PIT2_PodsumowanieI4_wynagrodzenie_netto.innerHTML*1)+(LAD_BEZ_PIT2_DietaUS_emerytalne.innerHTML*1)+(LAD_BEZ_PIT2_DietaUS_rentowe.innerHTML*1)+(LAD_BEZ_PIT2_DietaUS_wypadkowe.innerHTML*1)+(LAD_BEZ_PIT2_DietaUS_FP.innerHTML*1)+(LAD_BEZ_PIT2_DietaUS_FGSP.innerHTML*1)).toFixed(2);
    }
    oblicz_zastosowanie(){

        if(document.querySelector(".Wiek").innerHTML <= 25){
            LAD_BEZ_PIT2_PodsumowanieI4_Zastosowanie.innerHTML = LAD_BEZ_PIT2_PodsumowanieI4_wynagrodzenie_netto_do_26_lat.innerHTML;
        }else{
            LAD_BEZ_PIT2_PodsumowanieI4_Zastosowanie.innerHTML = LAD_BEZ_PIT2_PodsumowanieI4_wynagrodzenie_netto.innerHTML;
        }
     


        LAD_BEZ_PIT2_DietaUS_Zastosowanie.innerHTML = 0;
        LAD_BEZ_PIT2_DietaZUS_Zastosowanie.innerHTML = 0;
    }

}

const xd34= new bez_pit2;
xd34.licz_wszystko();


const STR1_praca_zagraniczna = document.querySelector(".strona_arkusz1 .praca_zagraniczna");
const STR1_praca_zagraniczna_ulga_zus = document.querySelector(".strona_arkusz1 .praca_zagraniczna_ulga_zus");
const STR1_praca_zagraniczna_ulga_zus_i_pit = document.querySelector(".strona_arkusz1 .praca_zagraniczna_ulga_zus_i_pit");
const STR1_max_brutto = document.querySelector(".strona_arkusz1 .max_brutto");
const STR1_zestawienie_nieobecnosci = document.querySelector(".strona_arkusz1 .zestawienie_nieobecnosci");
const STR1_urlop_bezplatny = document.querySelector(".strona_arkusz1 .urlop_bezplatny");
const STR1_urlop_wypoczynkowy = document.querySelector(".strona_arkusz1 .urlop_wypoczynkowy");
const STR1_zasilek_chorobowy = document.querySelector(".strona_arkusz1 .zasilek_chorobowy");
const STR1_nieobecnosc_usprawiedliwiona_nieplatna = document.querySelector(".strona_arkusz1 .nieobecnosc_usprawiedliwiona_nieplatna");
const STR1_wynagrodzenie_zasadnicze= document.querySelector(".strona_arkusz1 .wynagrodzenie_zasadnicze");
const STR1_ryczalt_za_nadgodziny= document.querySelector(".strona_arkusz1 .ryczalt_za_nadgodziny");
const STR1_ryczalt_za_godziny_nocne= document.querySelector(".strona_arkusz1 .ryczalt_za_godziny_nocne");
const STR1_wynagrodzenie_za_dyzur= document.querySelector(".strona_arkusz1 .wynagrodzenie_za_dyzur");
const STR1_premie_inne= document.querySelector(".strona_arkusz1 .premie_inne");
const STR1_dodatki= document.querySelector(".strona_arkusz1 .dodatki");
const STR1_suma= document.querySelector(".strona_arkusz1 .suma");
const STR1_wynagrodzenie_sektorowe_4trans= document.querySelector(".strona_arkusz1 .wynagrodzenie_sektorowe_4trans");
const STR1_wynik_ewidencji_czasu_4trans= document.querySelector(".strona_arkusz1 .wynik_ewidencji_czasu_4trans");
const STR1_premia_zagraniczna_sektorowa= document.querySelector(".strona_arkusz1 .premia_zagraniczna_sektorowa");
const STR1_kwota_zwolnienia_pit= document.querySelector(".strona_arkusz1 .kwota_zwolnienia_pit");
const STR1_kwota_wylaczenia_zus= document.querySelector(".strona_arkusz1 .kwota_wylaczenia_zus");
const STR1_suma_4trans= document.querySelector(".strona_arkusz1 .suma_4trans");


class str1{
    constructor(){
        this.licz_wszystko()
        if(licz_brutto)
        licz_brutto.addEventListener('click', this.licz_wszystko.bind(this));
    }
    licz_wszystko(){
        // this.poka_praca_zagraniczna();
        // this.poka_praca_zagraniczna_ulga_zus();
        // this.poka_praca_zagraniczna_ulga_zus_i_pit();
        this.poka_max_brutto();
        // this.poka_zestawienie_nieobecnosci();
        this.poka_urlop_bezplatny();
        this.poka_urlop_wypoczynkowy();
        this.poka_zasilek_chorobowy();
        this.poka_nieobecnosc_usprawiedliwiona_nieplatna();
        this.poka_wynagrodzenie_zasadnicze();
        this.poka_ryczalt_za_nadgodziny();
        this.poka_ryczalt_za_godziny_nocne();
        this.poka_wynagrodzenie_za_dyzur();
        this.poka_premie_inne();
        this.poka_dodatki();
        // this.poka_suma();
        this.poka_wynagrodzenie_sektorowe_4trans();

        this.poka_premia_zagraniczna_sektorowa();   
        this.poka_wynik_ewidencji_czasu_4trans();
        this.poka_kwota_zwolnienia_pit();
        this.poka_kwota_wylaczenia_zus();
   
        this.poka_netto();
        this.poka_netto_z_sani();
        this.sprawdz_czy_graje();
    
        
    }
    // poka_praca_zagraniczna(){
    //     STR1_praca_zagraniczna.innerHTML = PIT2placaZagranicznaDo5922.innerHTML;
    // }
    // poka_praca_zagraniczna_ulga_zus(){
    //     STR1_praca_zagraniczna_ulga_zus.innerHTML = PIT2placaZagranicznaUlgazus.innerHTML;
    // }
    // poka_praca_zagraniczna_ulga_zus_i_pit(){
    //     STR1_praca_zagraniczna_ulga_zus_i_pit.innerHTML =  PIT2placaZagranicznaUlgazusipit.innerHTML;
    // }
    poka_max_brutto(){
        STR1_max_brutto.innerHTML = (document.querySelector('.strona_arkusz1 .limit_zus').innerHTML*1 + document.querySelector('.strona_arkusz1 .Jaka_ulga_do_oddelegowania').value*1).toFixed(2);
    }
    // poka_zestawienie_nieobecnosci(){
    //     STR1_zestawienie_nieobecnosci.innerHTML = "ile dni";
    // }
    poka_urlop_bezplatny(){
        STR1_urlop_bezplatny.innerHTML = document.querySelector(".dane_4TRANS .urlop_bezplatny").innerHTML;
    }
    poka_urlop_wypoczynkowy(){
        STR1_urlop_wypoczynkowy.innerHTML = document.querySelector(".dane_4TRANS .urlop_wypoczynkowy").innerHTML;
    }
    poka_zasilek_chorobowy(){
        STR1_zasilek_chorobowy.innerHTML = document.querySelector(".dane_4TRANS .zasilek_chorobowy").innerHTML;
    }
    poka_nieobecnosc_usprawiedliwiona_nieplatna(){
        STR1_nieobecnosc_usprawiedliwiona_nieplatna.innerHTML =  document.querySelector(".dane_4TRANS .nieobecnosc_usprawiedliwiona_nieplatna").innerHTML;
    }
    poka_wynagrodzenie_zasadnicze(){
        STR1_wynagrodzenie_zasadnicze.innerHTML =  (document.querySelector(".dane_4TRANS .wynagrodzenie_zasadnicze").innerHTML*1).toFixed(2);
    }
    poka_ryczalt_za_nadgodziny(){
        STR1_ryczalt_za_nadgodziny.innerHTML =  (document.querySelector(".dane_4TRANS .ryczalt_za_nadgodziny").innerHTML*1).toFixed(2);
    }
    poka_ryczalt_za_godziny_nocne(){
        STR1_ryczalt_za_godziny_nocne.innerHTML =  (document.querySelector(".dane_4TRANS .ryczalt_za_godziny_nocne").innerHTML*1).toFixed(2);
    }
    poka_wynagrodzenie_za_dyzur(){
        STR1_wynagrodzenie_za_dyzur.innerHTML =  document.querySelector(".dane_4TRANS .wynagrodzenie_za_dyzur").innerHTML;
    }
    poka_premie_inne(){
        STR1_premie_inne.innerHTML =  (document.querySelector(".dane_4TRANS .premie_inne").innerHTML*1).toFixed(2);
    }
    poka_dodatki(){
        const xw =  document.querySelector('.dane_4TRANS .dodatki ').innerHTML*1
  

        STR1_dodatki.innerHTML = xw<0?0:(xw*1).toFixed(2);
      
    }
    // poka_suma(){
    //     STR1_suma.innerHTML =  STR1_wynagrodzenie_zasadnicze.innerHTML*1 + STR1_ryczalt_za_nadgodziny.innerHTML*1 + STR1_ryczalt_za_godziny_nocne.innerHTML*1 + STR1_wynagrodzenie_za_dyzur.innerHTML*1 + STR1_premie_inne.innerHTML*1 +STR1_dodatki.innerHTML*1   + document.querySelector(".strona_arkusz1 .wynagrodzenie_chorobowe").value*1 +document.querySelector(".strona_arkusz1 .wynagrodzenie_urlopowe").value*1;
    // }
    poka_wynagrodzenie_sektorowe_4trans(){
        let licznik=0;
        document.querySelectorAll('.zagraniczne').forEach((el)=>{
            licznik+=el.innerHTML*1;
        })
        STR1_wynagrodzenie_sektorowe_4trans.innerHTML = licznik.toFixed(2);
    }
    poka_wynik_ewidencji_czasu_4trans(){
        STR1_wynik_ewidencji_czasu_4trans.innerHTML =  0
        
        // (document.querySelector(".dane_4TRANS .wynik_na_ewidencji_czasu_pracy_4TRANS").innerHTML*1)+

    
    }
    poka_premia_zagraniczna_sektorowa(){
        const suma =   (
            (document.querySelector('.premie_inne').innerHTML*1)
            +(document.querySelector('.wynagrodzenie_za_dyzur').innerHTML*1) 
            + (document.querySelector('.ryczalt_za_godziny_nocne').innerHTML*1)
            +(document.querySelector('.ryczalt_za_nadgodziny').innerHTML*1)
            +(document.querySelector('.wynagrodzenie_zasadnicze').innerHTML*1)
            +(document.querySelector('.wynagrodzenie_chorobowe').value*1)
            +(document.querySelector('.wynagrodzenie_urlopowe').value*1)
            +(document.querySelector('.dodatki').innerHTML*1)).toFixed(2);


        STR1_premia_zagraniczna_sektorowa.innerHTML =( (document.querySelector('.wynagrodzenie_brutto').value*1)-suma*1 -  STR1_wynagrodzenie_sektorowe_4trans.innerHTML*1).toFixed(2)




    }
    poka_kwota_zwolnienia_pit(){
        STR1_kwota_zwolnienia_pit.innerHTML =((  ((document.querySelector(".Jaka_ulga_do_oddelegowania").value/3)))).toFixed(2);
  
       
    }
    poka_kwota_wylaczenia_zus(){

        let pierwsza_zmienna = (document.querySelector('.wynagrodzenie_brutto').value *1)-(document.querySelector('.wynagrodzenie_chorobowe').value *1)- (document.querySelector('.limit_zus').innerHTML*1);
        let druga_zmienna =  (document.querySelector('.Jaka_ulga_do_oddelegowania').value*1)
 
        STR1_kwota_wylaczenia_zus.innerHTML = (pierwsza_zmienna<0?0:(pierwsza_zmienna>druga_zmienna?druga_zmienna:pierwsza_zmienna)).toFixed(2);
    }

    poka_netto(){
        document.querySelector('.wynagrodzenie_netto').value= LAD_I_PIT2_PodsumowanieI4_Zastosowanie.innerHTML*1;
    }
    poka_netto_z_sani(){
   





let sianko=document.querySelector('.sanitariaty').innerHTML*1;

        // const driver = document.querySelector('.kierowca').innerHTML;
        // document.querySelectorAll('.puzzle').forEach(el=>{

        //     if(el.innerHTML.toUpperCase().includes(driver)){
        //         const sklad = el.querySelector('.siano').innerHTML.split('&nbsp;');
               
        //         let skladowa;
        //         if(sklad.length==1){
        //             if(sklad[0].includes(',')){
        //                 skladowa = sklad[0].split(',');

        //             }else if(sklad[0].includes('.')){
        //                 skladowa = sklad[0];
        //             }
        //         }else{
        //             skladowa = sklad[1].split(',');
        //         }

        //            sianko;
        //             if(!skladowa[1]){
  
        //                 sianko = (sklad[0]+skladowa[0]+'.'+skladowa[1]);
        //             }else{
        //                 sianko = skladowa
                        
        //             }
 



        //     }

        // })



        if(!isNaN(sianko))
        document.querySelector('.netto_z_sanitariatami').value = ((document.querySelector('.wynagrodzenie_netto').value*1)+ (sianko*1)*1).toFixed(2);
    else
    document.querySelector('.netto_z_sanitariatami').value = 'Brak';
    }
    sprawdz_czy_graje(){
        let licznik = 0;
        document.querySelectorAll('.dane_4TRANS .strona_lewa .czesc_pierwsza .komorka').forEach((el,i)=>{
            
            if(i<=14){
               
                licznik+=el.querySelector('.razem_siano').innerHTML*1
            }
           })
           licznik+=document.querySelector('.dane_4TRANS .strona_lewa .czesc_pierwsza .premia_regulaminowa').innerHTML*1
           document.querySelectorAll('.zagraniczne').forEach(el=>{
            if(el.innerHTML!=''){
                licznik+=el.innerHTML*1;

            }

        })
        licznik+=(document.querySelector('.dane_4TRANS .strona_lewa .czesc_pierwsza .premia_zagraniczna_sektorowa').innerHTML*1)
        document.querySelector('.wynik_ewidencji_czasu_4trans').innerHTML = (licznik*1+(        (document.querySelector('.wynagrodzenie_chorobowe').value*1)+
        (document.querySelector('.wynagrodzenie_urlopowe').value*1))).toFixed(2);

     

    }

}

const bruh = new str1;


