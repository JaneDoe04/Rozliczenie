<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>
    <?php

require 'vendor/autoload.php'; // Zaimportuj bibliotekę

use PhpOffice\PhpSpreadsheet\IOFactory;

$folderPath = __DIR__; // Użyj ścieżki do katalogu, w którym znajduje się bieżący plik PHP
var_dump($_POST);
if (isset($_POST['do_bazy']) && !empty($_POST['do_bazy'])) {
    $polaczenie = new PDO('mysql:host=localhost;dbname=rozliczenia', 'root', '');
    $wartosc = $_POST['do_bazy'];

    $id_pracownika = $_POST['robus'];
    $wrzuc_dane = $polaczenie->query("UPDATE pracownicy set notatka = '$wartosc' where id=$id_pracownika");

}
// Uzyskaj listę elementów w folderze
$items = scandir($folderPath);
echo "    <form action='index.php' display='none' class='syfon_do_wyslania' method='post'>";
if (isset($_POST['sciezka_pracownika'])) {
    $sciezka_pracownika = $_POST['sciezka_pracownika'];
    $sciezka_pracownika = explode('\\', $sciezka_pracownika);
    $sciezka_pracownika = $sciezka_pracownika[count($sciezka_pracownika) - 1];
    $sciezka_pracownika = explode('.', $sciezka_pracownika);
    $sciezka_pracownika = $sciezka_pracownika[0];
    echo "<input type='hidden' name='sciezka_pracownika' value='$sciezka_pracownika'>";
    $idios = $_POST['firmowe_id'];
    echo "<input type='hidden' name='firmowe_id' value='$idios'>";
    $rok = $_POST['rok'];
    $miesiac = $_POST['miesiac'];
    echo "<input type='hidden' name='rok' value='$rok'>";
    echo "<input type='hidden' name='miesiac' value='$miesiac'>";

    if (isset($_POST['ciezki_syf'])) {
        $sciezka_pracownika = $_POST['sciezka_pracownika'];
        $sciezka_pracownika = (explode('_-_', $sciezka_pracownika))[0];
        $sciezka_pracownika = strtoupper($sciezka_pracownika);
        $sciezka_pracownika = (explode('_', $sciezka_pracownika));
        $sciezka_pracownika = implode(' ', $sciezka_pracownika);

        $polaczenie = new PDO('mysql:host=localhost;dbname=rozliczenia', 'root', '');
        $znajdz_robola = $polaczenie->query("SELECT * from pracownicy WHERE firma_id ='$idios' AND pracownik ='$sciezka_pracownika'");
        $dane_robola = 0;
        $idios = $_POST['firmowe_id'];

        if ($dane_robola = $znajdz_robola->fetch()) {

            $id_robola = $dane_robola[0];
        }
        $rok = $_POST['rok'];
        $miesiac = $_POST['miesiac'];
        $data_sql = $rok . '-' . $miesiac;
        $cala_strona = $_POST['ciezki_syf'];
        $znajdz_dane = $polaczenie->query("SELECT * from rozliczenia where data = '$data_sql' and id_pracownika = $id_robola ");
        $sprawdzajnik = $znajdz_dane->fetch();
        if ($sprawdzajnik) {
            $wrzuc_dane = $polaczenie->query("UPDATE rozliczenia set zawartosc ='$cala_strona' where data = '$data_sql' and id_pracownika = $id_robola;");

        } else {

            $wrzuc_dane = $polaczenie->query("INSERT into rozliczenia VALUES(null, '$id_robola', '$data_sql','$cala_strona' )");

        }

        // $fetchowanie = $znajdz_firme->fetch();
    }
}
echo "
<textarea display='none'name='ciezki_syf' class='zrodlostrony'></textarea>
</form>";
// Przejdź przez listę elementów
echo "<nav><img src='dose.png' class='logo'>";
if (isset($_POST['firma']) && !empty($_POST['firma']) && isset($_POST['rok']) && !empty($_POST['rok']) && isset($_POST['miesiac']) && !empty($_POST['miesiac'])) {

    $firma = $_POST['firma'];
    $rok = $_POST['rok'];
    $miesiac = $_POST['miesiac'];
    $firma = explode("\\", $firma);
    $firma = $firma[count($firma) - 1];
    $polaczenie = new PDO('mysql:host=localhost;dbname=rozliczenia', 'root', '');
    $znajdz_firme = $polaczenie->query("SELECT id from firmy where firma = '$firma'");
    $miesiace = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    $miesiac--;

    // echo $firma;
    echo "<div class='ukladanie_daty'><div class='div_firma xd'>Bieżąca firma: $firma</div> <div class='div_rok xd'>Rok: $rok</div> <div class='div_miesiac xd'>Miesiąc: $miesiace[$miesiac]</div></div>";
}

echo "<form action='index.php' method='POST' class='selekciory'><select name='firma' class='select_firmowy'>";

// if(isset($_POST['firma'])&&!empty($_POST['firma'])&&isset($_POST['rok'])&&!empty($_POST['rok'])&&isset($_POST['miesiac'])&&!empty($_POST['miesiac'])){
//     $firma = $_POST['firma'];
//     $rok = $_POST['rok'];
//     $miesiac = $_POST['miesiac'];

//jd
// }

foreach ($items as $item) {
    // Pomijaj kropki (aktualny i nadrzędny katalog)
    if ($item == '.' || $item == '..') {
        continue;
    }

    // Pełna ścieżka do aktualnego elementu
    $itemPath = $folderPath . DIRECTORY_SEPARATOR . $item;
    // Wyodrębnij samą nazwę folderu bez ścieżki

    $folderName = basename($itemPath);

    // Sprawdź, czy element jest folderem
    if (is_dir($itemPath)) {
        // Wyświetl nazwę folderu

        if ($folderName != 'vendor' && isset($_POST['firma'])) {
            if ($_POST['firma'] == $folderName) {
                echo "<option class='opcja' selected value='$folderName'>";

                echo "$folderName</option>";
            } else {
                echo "<option class='opcja' value='$folderName'>";

                echo "$folderName</option>";
            }

        } else if ($folderName != 'vendor') {
            echo "<option class='opcja' value='$folderName'>";

            echo "$folderName</option>";
        }

    }
}
echo "</select> ";

echo "<select name='rok'>";
for ($i = 2023; $i < 2030; $i++) {
    if (isset($_POST['rok'])) {
        if ($_POST['rok'] == $i) {
            echo "<option value='$i' selected>$i</option>";
        } else {
            echo "<option value='$i' >$i</option>";
        }

    } else {
        echo "<option value='$i' >$i</option>";
    }
}
echo '</select>';

echo "<select name='miesiac'>";
for ($i = 1; $i <= 12; $i++) {
    if (isset($_POST['miesiac'])) {
        if ($_POST['miesiac'] == $i) {
            echo "<option value='$i' selected>$i</option>";
        } else {
            echo "<option value='$i' >$i</option>";
        }

    } else {
        echo "<option value='$i' >$i</option>";
    }
}
echo '</select>';

?>






<?php
echo "
<input type='submit' class='submiter' value='Zatwierdź'></form></nav>";

if (isset($_POST['firma']) && !empty($_POST['firma']) && isset($_POST['rok']) && !empty($_POST['rok']) && isset($_POST['miesiac']) && !empty($_POST['miesiac'])) {

    $firma = $_POST['firma'];
    $rok = $_POST['rok'];
    $miesiac = $_POST['miesiac'];

    $path = "$firma\\$rok\\$miesiac";

    $folder_docelowy = scandir($path);

    // echo "$firma, $rok, $miesiac.";

    echo "<form action='index.php' method='POST' class='formularz testowanie'>
    <input type='hidden' name='arkusz3_sciezka' class='arkusz3_sciezka'>";
    echo "<input type='hidden' value='$firma' name='firma'>";
    $rok = $_POST['rok'];
    echo "<input type='hidden' value='$rok' name='rok'>";
    echo "<input type='hidden' value='$miesiac' name='miesiac'>";

    if (isset($_POST['firma']) && !empty($_POST['firma'])) {
        $firma = $_POST['firma'];
        $polaczenie = new PDO('mysql:host=localhost;dbname=rozliczenia', 'root', '');
        $znajdz_firme = $polaczenie->query("SELECT id from firmy where firma = '$firma'");
        $fetchowanie = $znajdz_firme->fetch();

        echo "<input type='hidden' value='$fetchowanie[0]' name='firmowe_id'>";

    }

    echo "
    <select name='sciezka_pracownika' class='wybor_pracownika'>";
    $firmoweczka = $_POST['firma'];
    $tworzenie_selecta = $polaczenie->query("SELECT * FROM `pracownicy`, `firmy` where firmy.id = (SELECT id from firmy where firmy.firma = '$firmoweczka' ) and firmy.id = pracownicy.firma_id order by pracownicy.pracownik");
    while ($robotaju = $tworzenie_selecta->fetch()) {
        $robotnik = $robotaju[1];
        $robotnik = strtolower($robotnik);
        $robotnik = explode(" ", $robotnik);
        $tablica = [];
        foreach ($robotnik as $value => $key) {

            array_push($tablica, ucfirst($robotnik[$value]));

        }

        $tablica = implode('_', $tablica);

        foreach ($folder_docelowy as $item) {

            if ($item == '.' || $item == '..') {
                continue;
            }

            $filePath = $path . DIRECTORY_SEPARATOR . $item;

            if (is_file($filePath)) {
                if (strpos($item, "DL_RZZUD") !== false) {
                    continue;
                }
                if (strpos($item, "DL_SANIT") !== false) {
                    continue;

                }
                var_dump($tablica, $filePath);

                if (stripos($filePath, strtolower($tablica)) !== false) {
                    global $sciecha;
                    if (isset($_POST['sciezka_pracownika'])) {
                        $sciecha = $_POST['sciezka_pracownika'];
                    }
                    if ($sciecha == $filePath) {
                        echo "<option class='wybor_pracownika' selected value='$filePath'>$robotaju[1]</option> ";
                    } else {
                        echo "<option class='wybor_pracownika'  value='$filePath'>$robotaju[1]</option> ";
                    }

                }

            }

        }
    }

    echo "</select>";
    $licznik_firmowy = 0;
    $licznik_sanitarny = 0;
    $licznik_pracownikow = 0;
    foreach ($folder_docelowy as $item) {

        if ($item == '.' || $item == '..') {
            continue;
        }

        $filePath = $path . DIRECTORY_SEPARATOR . $item;

        if (is_file($filePath)) {
            if (strpos($item, "DL_RZZUD") !== false) {

                $sciezka_excela_firmowego = $filePath;
                $licznik_firmowy++;
                continue;
            }
            if (strpos($item, "DL_SANIT") !== false) {
                $licznik_sanitarny++;
                $sciezka_excela_sanitarnego = $filePath;
                continue;

            }
            $licznik_pracownikow++;

        }

    }
    if ($licznik_firmowy != 1) {
        echo "<script type='text/javascript'>alert('W folderze znajduje się nieprawidłowa ilość plikow DL_RZZUD!');</script>";
    }
    if ($licznik_sanitarny != 1) {
        echo "<script type='text/javascript'>alert('W folderze znajduje się nieprawidłowa ilość plikow DL_SANIT!');</script>";

    }
    echo "<input type='hidden' class='liczba_roboli' name='licznik_pracownikow' value='$licznik_pracownikow'>";
    echo "
  <input type='submit' value='Zatwierdź' class='submiter'>
 <input type='hidden' name='sciezka_excela_firmowego' value='$sciezka_excela_firmowego'>
<input type='hidden' name='sciezka_excela_sanitarnego' value='$sciezka_excela_sanitarnego'>
</form>
";

}
if (isset($_POST['comeback'])) {
    $polaczenie = new PDO('mysql:host=localhost;dbname=rozliczenia', 'root', '');

    $id = $_POST['comeback'];
    $czas = $_POST['czas'];
    $usun_rozliczenie = $polaczenie->query("DELETE FROM rozliczenia WHERE id_pracownika = $id AND `data` = '$czas'");
}

if (isset($_POST['sciezka_pracownika']) && !empty($_POST['sciezka_pracownika'])) {

    $rok = $_POST['rok'];
    $miesiac = $_POST['miesiac'];
    $sciezka_pracownika = $_POST['sciezka_pracownika'];
    $sciezka_pracownika = explode('\\', $sciezka_pracownika);
    $sciezka_pracownika = $sciezka_pracownika[count($sciezka_pracownika) - 1];
    $sciezka_pracownika = explode('.', $sciezka_pracownika);
    $sciezka_pracownika = $sciezka_pracownika[0];
    $sciezka_pracownika = (explode('_-_', $sciezka_pracownika))[0];
    $sciezka_pracownika = strtoupper($sciezka_pracownika);
    $sciezka_pracownika = (explode('_', $sciezka_pracownika));
    $sciezka_pracownika = implode(' ', $sciezka_pracownika);

    $polaczenie = new PDO('mysql:host=localhost;dbname=rozliczenia', 'root', '');
    $znajdz_robola = $polaczenie->query("SELECT * from pracownicy WHERE firma_id ='$idios' AND pracownik ='$sciezka_pracownika'");
    $dane_robola = 0;

    $idios = $_POST['firmowe_id'];
    $data = $rok . '-' . $miesiac;

    if ($dane_robola = $znajdz_robola->fetch()) {

        $id_robola = $dane_robola[0];
        $znajdz_robola = $polaczenie->query("SELECT * from rozliczenia WHERE id_pracownika =$id_robola AND `data` ='$data'");
        if ($strona = $znajdz_robola->fetch()) {
            $data = $_POST['rok'] . '-' . $_POST['miesiac'];
            echo "<div class='saved testowanie'>pracownik zapisany</div>";
            echo "<form action='index.php' method='post'>
            <input type='submit' value='cofnij zapis' ><input type='hidden'  name='comeback' value='$id_robola'>
            <input type='hidden'  name='czas' value='$data'>
            </form> ";

            echo $strona[3];
        } else {

            $ilosc_wyrownan_sektorowych = 0;
            $main_array = array();
            function ZnajdzKomorke()
            {
                global $ilosc_wyrownan_sektorowych;

                global $main_array;
                $sciezka_do_arkusza3 = $_POST['arkusz3_sciezka'];

                $spreadsheet = IOFactory::load($sciezka_do_arkusza3); // Wczytaj plik Excel
                $worksheet = $spreadsheet->getActiveSheet();

                for ($row = 40; $row <= 300; $row++) {
                    $cellValue = $worksheet->getCell("A$row")->getValue();

                    if (strpos($cellValue, "Wyrównanie do wynagrodzenia za czas pracy") !== false) {
                        // echo $row . "<br>";
                        $ilosc_wyrownan_sektorowych++;
                        $wartosc = $worksheet->getCell("V" . $row)->getValue();
                        $main_array['wyrownanie_za_czas_pracy_zagranicznej']["$cellValue"] = $wartosc;
                    }
                    if ($cellValue == 'Urlop wypoczynkowy') {
                        $wartosc = $worksheet->getCell("L" . $row + 1)->getValue();

                        $main_array["$cellValue"] = $wartosc;

                    }
                    if ($cellValue == 'Urlop bezpłatny (na pisemny wniosek)') {
                        $wartosc = $worksheet->getCell("L" . $row + 1)->getValue();

                        $main_array["$cellValue"] = $wartosc;

                    }
                    if ($cellValue == 'Urlop wypoczynkowy') {
                        $wartosc = $worksheet->getCell("L" . $row + 1)->getValue();

                        $main_array["$cellValue"] = $wartosc;

                    }
                    if ($cellValue == 'Razem:') {
                        $wartosc = $worksheet->getCell("T" . $row)->getValue();
                        if ($wartosc == null) {
                            $wartosc = $worksheet->getCell("P" . $row)->getValue();
                        }

                        $main_array["$cellValue"] = $wartosc;

                    }if ($cellValue == 'Urlop') {
                        $wartosc = $worksheet->getCell("U" . $row)->getValue();
                        $main_array["$cellValue"] = $wartosc;

                    }
                    if ($cellValue == 'Chorobowe') {
                        $wartosc = $worksheet->getCell("U" . $row)->getValue();
                        $main_array["$cellValue"] = $wartosc;

                    }

                    if ($cellValue == 'Zasiłek chorobowy 80% (po 33 dniach)') {
                        if (!empty($worksheet->getCell("L" . $row + 1)->getValue())) {
                            $wartosc = $worksheet->getCell("L" . $row + 1)->getValue();
                        } else {
                            $wartosc = $worksheet->getCell("L" . $row + 2)->getValue();

                        }

                        $main_array["$cellValue"] = $wartosc;

                    }
                    if ($cellValue == 'Chorobowe 80% (k. zakład.)') {

                        $wartosc = $worksheet->getCell("L" . $row + 1)->getValue();

                        $main_array["$cellValue"] = $wartosc;

                    }
                    if ($cellValue == 'Nieobecność usprawiedliwiona niepłatna') {
                        $wartosc = $worksheet->getCell("L" . $row + 1)->getValue();

                        $main_array["$cellValue"] = $wartosc;

                    }
                    if ($cellValue == 'Premia regulaminowa') {
                        $wartosc = $worksheet->getCell("U" . $row)->getValue();

                        $main_array["$cellValue"] = $wartosc;

                    }if ($cellValue == 'Premia zagraniczna sektorowa') {
                        $wartosc = $worksheet->getCell("U" . $row)->getValue();

                        $main_array["$cellValue"] = $wartosc;

                    }

                    if ($cellValue == 'Podstawowe składniki wynagrodzenia z okresu rozliczeniowego') {
                        $i = $row;

                        while (true) {
                            $wartosc = $worksheet->getCell("A" . $i)->getValue();
                            if (empty($wartosc)) {

                                $wartosc = $worksheet->getCell("T" . $i)->getValue();
                                // echo $wartosc . "<br>" . $cellValue . "<br>";
                                $main_array["$cellValue"] = $wartosc;

                                break;
                            }
                            $i++;
                        }

                    }
                    if ($cellValue == 'Wyrównanie wynagrodzenia') {
                        $i = $row;

                        while (true) {
                            $wartosc = $worksheet->getCell("A" . $i)->getValue();
                            if (empty($wartosc)) {

                                $wartosc = $worksheet->getCell("T" . $i)->getValue();
                                // echo $wartosc . "<br>" . $cellValue . "<br>";
                                $main_array["$cellValue"] = $wartosc;

                                break;
                            }
                            $i++;
                        }

                    }

                    if ($cellValue === 'Podstawowe składniki wynagrodzenia') {
                        $i = $row + 1;
                        while (!empty($cellValue = $worksheet->getCell("A$i")->getValue())) {
                            if (!empty($wartosc = $worksheet->getCell("V$i")->getValue())) {
                                // echo "$cellValue: $wartosc <br>";
                                $main_array["$cellValue"] = $wartosc;
                            }
                            if (!empty($wartosc = $worksheet->getCell("U$i")->getValue())) {
                                // echo "$cellValue: $wartosc <br>";
                                $main_array["$cellValue"] = $wartosc;
                            }
                            $i++;

                        }
                        $wartosc = $worksheet->getCell("T" . $row - 1)->getValue();
                        $main_array["stawka_miesieczna_przeliczona"] = $wartosc;
                        if (strtok($worksheet->getCell("A" . $row + 1)->getValue(), " ") === "Ryczałt") {

                            $x = $row - 1;

                            $wynagrodzenie = $worksheet->getCell("T$x")->getValue();

                            // Znaleziono wartość, zwróć informacje o komórce
                            // return [
                            //     'Arkusz' => $worksheet->getTitle(),
                            //     'Komórka' => "A$row",
                            //     'Wartość' => $wynagrodzenie,
                            // ];
                        } else {

                        }
                    }

                }

            }

            ZnajdzKomorke();

            $id_firmy = $_POST['firmowe_id'];
            $firmo = $polaczenie->query("SELECT firma from firmy where id = '$id_firmy'");
            $firma = $firmo->fetch();
            $rok = $_POST['rok'];
            $miesiac = $_POST['miesiac'];
            echo "<div class='design'>Rok: $rok <br>
            Miesiąc: $miesiac <br>
            Firma: $firma[0]</div>";

            // $wybor_firmy = $polaczenie -> query('')
            $sciezka_excela_firmowego = $_POST['sciezka_excela_firmowego'];
            $sciezka_excela_sanitarnego = $_POST['sciezka_excela_sanitarnego'];

            $sciezka_pracownika = $_POST['sciezka_pracownika'];
            $sciezka_pracownika = explode('\\', $sciezka_pracownika);
            $sciezka_pracownika = $sciezka_pracownika[count($sciezka_pracownika) - 1];
            $sciezka_pracownika = explode('.', $sciezka_pracownika);
            $sciezka_pracownika = $sciezka_pracownika[0];
            $sciezka_pracownika = (explode('_-_', $sciezka_pracownika))[0];
            $sciezka_pracownika = strtoupper($sciezka_pracownika);
            $sciezka_pracownika = (explode('_', $sciezka_pracownika));
            $sciezka_pracownika = implode(' ', $sciezka_pracownika);
            $idios = $_POST['firmowe_id'];
            $polaczenie = new PDO('mysql:host=localhost;dbname=rozliczenia', 'root', '');
            $znajdz_robola = $polaczenie->query("SELECT * from pracownicy WHERE firma_id ='$idios' AND pracownik ='$sciezka_pracownika'");
            $dane_robola = 0;
            if ($dane_robola = $znajdz_robola->fetch()) {

                //dane dla diva lewego
                $kierowca = $dane_robola[1];
                $phpDate = $dane_robola[2];
                $id_robola = $dane_robola[0];

                $znajdz_wypadkowe = $polaczenie->query("SELECT wypadkowe FROM firmy WHERE id='$idios'");
                $wypadkowe = ($znajdz_wypadkowe->fetch())[0];

                // Aktualna data
                $data_dzisiejsza = new DateTime();

                // Data urodzenia jako obiekt DateTime
                $data_urodzenia = new DateTime($phpDate);

                // Obliczenie różnicy w latach
                $wiek = $data_urodzenia->diff($data_dzisiejsza);

                $koszt_uzyskania_przychodu = $dane_robola[3];
            } else {
                echo "<script type='text/javascript'>alert('Podanego pracownika nie dodano do bazy danych lub został dodany nieprawidłowo!');</script>";

            }

            // zmienne dla 4 strony arkusza 1
            $brutto = $main_array['Razem:'] ? $main_array['Razem:'] : 0;
            //dane dla diva lewego
            echo "<div class='ulozenie_przyciskow'> ";
            echo "<input class='btn_arkusz1' type='button' value='1'>";
            echo "<input class='btn_arkusz1' type='button' value='2'>";
            echo "<input class='btn_arkusz1' type='button' value='3'>";
            echo "<input class='btn_arkusz1' type='button' value='4'>";
            echo '</div>';
            echo "<section class='strona_arkusz1 flexowy'>"; //sekcja 1
            echo "<div class='strona_lewa'>"; //div odpowiadajacy za stylizacje
            echo "<div class='komorka'>Kierowca: <span class='kierowca'>$kierowca</span> </div>";
            echo "<div class='komorka'>Wypadkowe: <span class='wypadkowe'>$wypadkowe </span></div>";
            echo "<div class='komorka'>Data urodzenia:<span class='Data_urodzenia'>" . $phpDate . "</span></div>"; // Wyświetli 1971-10-27
            echo "<div class='komorka'>Wiek:<span class='Wiek'> $wiek->y</span></div>";

            echo "<div class='komorka ulga_do_oddelegowania'>Jaka ulga do oddelegowania:<input class='Jaka_ulga_do_oddelegowania'> </div>";
            echo "<div class='komorka'>Koszt uzyskania przychodu: <input class='Koszt_uzyskania_przychodu' value='$koszt_uzyskania_przychodu'>zł</div>";
            echo "<div class='komorka brt'>Wynagrodzenie brutto: <input type='number' class='wynagrodzenie_brutto bruttoxdd'  value='$brutto'><input type='button' class='licz_brutto' value='oblicz!'></div>";
            echo "<div class='komorka gorny'>Netto z pit:<input type='number' class='wynagrodzenie_netto'><input type='button' class='licz_netto' value='szukaj wyniku!'></div>";
            echo "<div class='komorka dolny'>Netto z sanitariatami: <input class='netto_z_sanitariatami '><input type='button' class='licz_netto' value='szukaj wyniku!'></div>";

            echo "<div class='komorka'>Netto bez pit: <input class='netto_z_pit'><input type='button' class='licz_netto' value='szukaj wyniku!'></div>";
            echo "<div class='komorka'>Netto z sanitariatami bez pit: <input class='netto_z_sani_bez_pit'><input type='button' class='licz_netto' value='szukaj wyniku!'></div>";

            // echo "<div class='komorka'>Praca zagraniczna: <span class='praca_zagraniczna'></span></div>";
            // echo "<div class='komorka'>Praca zagraniczna ulga ZUS: <span class='praca_zagraniczna_ulga_zus'></span></div>";
            // echo "<div class='komorka'>Praca zagraniczna ulga ZUS i PIT <span class='praca_zagraniczna_ulga_zus_i_pit'></span></div>";
            echo "<div class='komorka brutto_max'> Do obliczenia pensji max brutto: <span class='max_brutto'></span>zł</div>";
            echo "<div class='komorka nieobecnosc'> Zestawienie nieobecności (ile dni)</div>";
            echo "<div class='komorka'> Urlop bezpłatny (na pisemny wniosek) : <span class='urlop_bezplatny'></span></div>";
            echo "<div class='komorka'> Urlop wypoczynkowy: <span class='urlop_wypoczynkowy'></span></div>";
            echo "<div class='komorka'> Zasiłek chorobowy 80% (po 33 dniach):<span class='zasilek_chorobowy'></span></div>";
            echo "<div class='komorka'> Nieobecność usprawiedliwiona niepłatna:<span class='nieobecnosc_usprawiedliwiona_nieplatna'></span></div>";
            echo "</div>"; //zamknięcie diva odpowiadającego za stylizacje
            $firmowe_id = $_POST['firma'];

            $pobierz_notke = $polaczenie->query("SELECT notatka from pracownicy where id=$dane_robola[0]");
            $notka = $pobierz_notke->fetch();
            $notka = $notka[0] ? $notka[0] : '';
            $robo = $dane_robola[0];
            $miesiac = $_POST['miesiac'];
            $rok = $_POST['rok'];
            echo "<div class='gora_dol'>

            <input type='hidden' class='przechowywacz' value=''>
            <form class='uloz_notke'action='index.php' method='post'>

            Notatka stała
            <input type='hidden' name='robus' value='$robo'>
<textarea class='notatka2' name='do_bazy'>$notka</textarea>


<input type='hidden' name='firma' value='$firmowe_id'>
<input type='hidden' name='miesiac' value='$miesiac'>
<input type='hidden' name='rok' value='$rok'>
<input type='submit' class='zapisywanie_notatki' value='zapisz'>
           </form>
           Notatka na dany miesiąc
<textarea class='notatka'></textarea>

            <input type='button' class='zapisywanie_strony' value='zapisz'>";

            // echo "<div class='komorka'>Sprawdzenie wyniku: <span class='sprawdzenie_wyniku'></span></div>";
            echo "</div>";
            echo "<div class='strona_prawa'>"; //div odpowiadajacy za stylizacje

            $rok = $_POST['rok'];
            $firmemka = $_POST['firmowe_id'];

            $znajdz_zus = $polaczenie->query("SELECT limit_zus FROM firmy where id = $firmemka");
            $zus_rok = $znajdz_zus->fetch();

            echo "<div class='komorka'";
            if ($zus_rok[0] == 0) {
                echo "style='color:red;'";
            }
            echo ">Limit ZUS: <span class='limit_zus'>$zus_rok[0]</span>zł</div>";

            // echo "<div class='komorka'>Ubezpieczenie grupowe: <span class='ubezpieczenie_grupowe'></span>zł</div>";
            echo "<div class='komorka'>Wynagrodzenie zasadnicze: <span class='wynagrodzenie_zasadnicze'></span>zł</div>";
            echo "<div class='komorka'>Ryczałt za nadgodziny: <span class='ryczalt_za_nadgodziny'></span>zł</div>";
            echo "<div class='komorka'>Ryczałt za godziny nocne:<span class='ryczalt_za_godziny_nocne'></span>zł</div>";
            echo "<div class='komorka'>Wynagrodzenie za dyżur: <span class='wynagrodzenie_za_dyzur'></span>zł</div>";
            echo "<div class='komorka'>Premie, inne: <span class='premie_inne'></span>zł</div>";
            echo "<div class='komorka'>Dodatki: <span class='dodatki'></span>zł</div>";
            echo "<div class='komorka'>Wynagrodzenie sektorowe: <span class='wynagrodzenie_sektorowe_4trans'></span>zł</div>";
            echo "<div class='komorka'>Premia zagraniczna sektorowa: <span class='premia_zagraniczna_sektorowa'></span>zł</div>";
            $Chorobowe = isset($main_array["Chorobowe"]) ? $main_array["Chorobowe"] : 0;
            echo "<div class='komorka'>Wynagrodzenie chorobowe: <input type='number' value='$Chorobowe' class='wynagrodzenie_chorobowe'></div>";
            $urlopowe = isset($main_array["Urlop"]) ? $main_array["Urlop"] : 0;
            echo "<div class='komorka'>Wynagrodzenie urlopowe: <input type='number' value='$urlopowe' class='wynagrodzenie_urlopowe'></div>";
            echo "<div class='komorka'>Kwota zwolnienia PIT: <span class='kwota_zwolnienia_pit'></span>zł</div>";
            echo "<div class='komorka'>Kwota wyłączenia ZUS: <span class='kwota_wylaczenia_zus'></span>zł</div>";
            echo "<div class='komorka'>Sanitariaty: <span class='sanitariaty'></span>zł</div>";
            echo "<div class='komorka'>Wynik na ewidencji czasu : <span class='wynik_ewidencji_czasu_4trans'></span>zł</div>";

            echo "</div>"; //zamknięcie diva odpowiadającego za stylizacje
            echo "</section>"; //zamkniecie sekcji 1

            echo "<section class='strona_arkusz1 lad_i_pit2'>"; //druga strona arkusza 1 !!!!
            $wyciagnij_zmienne = $polaczenie->query("SELECT * FROM `zmienne`");
            $zmienne = $wyciagnij_zmienne->fetch();
            echo "<input type='hidden' class='zmienna_emerytalna' value='$zmienne[0]'>";
            echo "<input type='hidden' class='zmienna_rentowa' value='$zmienne[1]'>";
            echo "<input type='hidden' class='zmienna_chorobowa' value='$zmienne[2]'>";
            echo "<input type='hidden' class='zmienna_zdrowotna' value='$zmienne[3]'>";
            echo "<input type='hidden' class='zmienna_fp' value='$zmienne[4]'>";
            echo "<input type='hidden' class='zmienna_fgsp' value='$zmienne[5]'>";

            echo "<h2>Ład i PIT2</h2>";
            echo "<div class='calosc'> ";
            echo "<div class='czesc_pierwsza'>";
            echo "<div class='strona_lewa'>";
            echo "<div class='komorka'>Jakie wynagrodzenie brutto: <span class='wynagrodzenie_brutto'></span></div>";
            echo "<div class='komorka'>Jaka ulga do oddelegowania: <span class='ulga_do_oddelegowania'></span></div>";
            echo "<div class='komorka'>Jakie ma wyjść netto: <span class='wynagrodzenie_netto'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie zasadnicze: <span class='wynagrodzenie_zasadnicze'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie za dyżur: <span class='wynagrodzenie_za_dyzur'></span></div>";
            echo "<div class='komorka'>Premie, inne: <span class='premie_inne'></span></div>";
            echo "<div class='komorka'>Ryczałt za nadgodziny: <span class='ryczalt_za_nadgodziny'></span></div>";
            echo "<div class='komorka'>Ryczałt za godziny nocne: <span class='ryczalt_za_godziny_nocne'></span></div>";
            echo "<div class='komorka'>Dodatki: <span class='dodatki'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie Chorobowe:  <span class='wynagrodzenie_chorobowe'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie urlopowe: <span class='wynagrodzenie_urlopowe'></span></div>";
            echo "<div class='komorka'>Suma: <span class='suma'></span></div>";
            echo "</div>";
            echo "<div class='strona_prawa flexing'>";
            echo "<div class='komorka'>Ulga dla klasy średniej: <span class='ulga_dla_klasy_sredniej'></span> ";
            echo "<div class='komorka'>Koszt uzyskania przychodu: <span class='_koszt_uzyskania_przychodu'></span> </div><br>";
            echo "Dodatki zagraniczne na listę płac";
            echo "<div class='komorka'>Płaca zagraniczna do 5922: <span class='placa_zagraniczna_do_5922'></span>Kwota zawierająca ZUS i podatek</div></div>";
            echo "<div class='komorka'>Płaca zagraniczna ulga ZUS: <span class='placa_zagraniczna_ulga_zus'></span>Kwota zwolniona z ZUS zawierająca PIT</div>";
            echo "<div class='komorka'>Płaca zagraniczna ulga ZUS i PIT: <span class='placa_zagraniczna_ulga_zus_i_pit'></span>Kwota zwolniona z ZUS i PIT</div>";
            echo "<div class='komorka'>Ulga do lat 26 <span class='ulga_do_lat_26'></span></div>";
            echo "<div class='komorka'>Sanitariaty: <span class='sanitariaty'></span></div>";

            echo "</div>";
            echo "</div>";

            echo "<div class='czesc_druga'>";

            echo "<div class='strona_lewa'>";
            echo "<div class='komorka'>Podsumowanie I4 <span class=''></span></div>";
            echo "<div class='komorka'> <span class='jakies_gowno'></span></div>";
            echo "<div class='komorka'><span class='brutto_dwa'></span> brutto</div>";
            echo "<div class='komorka'>Emerytalna: <span class='emerytalna'></span></div>";
            echo "<div class='komorka'>Rentowa: <span class='rentowa'></span></div>";
            echo "<div class='komorka'>Chorobowa:  <span class='chorobowa'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru składki zdrowotnej: <span class='podstawa_wymiaru_skladki_zdrowotnej'></span></div>";
            echo "<div class='komorka'>Zdrowotna: <span class='zdrowotna'></span></div><br>";
            echo "<div class='komorka'>Koszt uzyskania przychodu: <span class='koszt_uzyskania_przychodu'></span></div>";
            echo "<div class='komorka'>Ulga klasa średnia: <span class='ulga_klasa_srednia'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru podatku: <span class='podstawa_wymiaru_podatku'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru podatku po zaokrągleniu: <span class='podstawa_wymiaru_podatku_po_zaokragleniu'></span></div>";

            $znajdz_kwote_zmniejszajaca_podatek = $polaczenie->query("SELECT wartosc FROM `kwota zmniejszajaca podatek` WHERE rok=$rok");
            $kwota_zmniejszajaca_podatek = ($znajdz_kwote_zmniejszajaca_podatek->fetch())[0];

            echo "<div class='komorka'>Kwota zmniejszająca podatek: <span class='Kwota_zmniejszajaca_podatek'>$kwota_zmniejszajaca_podatek</span></div><br>";
            echo "<div class='komorka'>Zaliczka na podatek: <span class='zaliczka_na_podatek'></span></div>";
            echo "<div class='komorka'>Zaliczka na podatek po zaokrągleniu: <span class='zaliczka_na_podatek_po_zaokragleniu'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie netto: <span class='wynagrodzenie_netto'></span>Netto</div>";
            echo "<div class='komorka'>Wynagrodzenie netto do 26 lat: <span class='wynagrodzenie_netto_do_26_lat'></span>Netto</div>";
            echo "<div class='komorka'>Zastosowanie: <span class='zastosowanie'></span></div><br>";
            echo "<div class='komorka'>Emerytalne: <span class='emerytalne'></span></div>";
            echo "<div class='komorka'>Rentowe: <span class='rentowe'></span></div>";
            echo "<div class='komorka'>Wypadkowe:  <span class='wypadkowe'></span></div>";
            echo "<div class='komorka'>FP: <span class='FP'></span></div>";
            echo "<div class='komorka'>FGŚP: <span class='FGSP'></span></div>";
            echo "<div class='komorka'>Koszt całkowity pracodawcy: <span class='koszt_calkowity_pracodawcy'></span></div>";
            echo "</div>";

            echo "<div class='srodek dieta_do_us'>Dieta do US";
            echo "<div class='komorka'> <span class='jakies_sianko'></span></div>";
            echo "<div class='komorka'><span class='jakies_gowno2'></span></div>";
            echo "<div class='komorka'>C1 <span class='brutto_dwa2'></span> brutto</div>";
            echo "<div class='komorka'>Emerytalna: <span class='emerytalna'></span></div>";
            echo "<div class='komorka'>Rentowa: <span class='rentowa'></span></div>";
            echo "<div class='komorka'>Chorobowa:  <span class='chorobowa'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru składki zdrowotnej: <span class='podstawa_wymiaru_skladki_zdrowotnej'></span></div>";
            echo "<div class='komorka'>Zdrowotna: <span class='zdrowotna'></span></div><br>";
            echo "<div class='komorka'>Koszt uzyskania przychodu: <span class='koszt_uzyskania_przychodu'></span></div>";
            echo "<div class='komorka'>Ulga klasa średnia: <span class='ulga_klasa_srednia'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru podatku: <span class='podstawa_wymiaru_podatku'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru podatku po zaokrągleniu: <span class='podstawa_wymiaru_podatku_po_zaokragleniu'></span></div>";
            echo "<div class='komorka'>Kwota zmniejszająca podatek: <span class='Kwota_zmniejszajaca_podatek'>$kwota_zmniejszajaca_podatek</span></div><br>";
            echo "<div class='komorka'>Zaliczka na podatek: <span class='zaliczka_na_podatek'></span></div>";
            echo "<div class='komorka'>Zaliczka na podatek po zaokrągleniu: <span class='zaliczka_na_podatek_po_zaokragleniu'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie netto: <span class='wynagrodzenie_netto'></span>Netto</div>";
            echo "<div class='komorka'>Wynagrodzenie netto do 26 lat: <span class='wynagrodzenie_netto_do_26_lat'></span>Netto</div>";
            echo "<div class='komorka'>Zastosowanie: <span class='zastosowanie'></span></div><br>";
            echo "<div class='komorka'>Emerytalne: <span class='emerytalne'></span></div>";
            echo "<div class='komorka'>Rentowe: <span class='rentowe'></span></div>";
            echo "<div class='komorka'>Wypadkowe:  <span class='wypadkowe'></span></div>";
            echo "<div class='komorka'>FP: <span class='FP'></span></div>";
            echo "<div class='komorka'>FGŚP: <span class='FGSP'></span></div>";
            echo "<div class='komorka'>Koszt całkowity pracodawcy: <span class='koszt_calkowity_pracodawcy'></span></div>";
            echo "</div>";

            echo "<div class='strona_prawa dieta_do_zus'>Dieta do ZUS";
            echo "<div class='komorka'>Podsumowanie I4 <span class=''></span></div>";
            echo "<div class='komorka'><span class='jakies_gowno3'></span></div>";
            echo "<div class='komorka'>C1 <span class='brutto_dwa3'></span> brutto</div>";
            echo "<div class='komorka'>Emerytalna: <span class='emerytalna'></span></div>";
            echo "<div class='komorka'>Rentowa: <span class='rentowa'></span></div>";
            echo "<div class='komorka'>Chorobowa:  <span class='chorobowa'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru składki zdrowotnej: <span class='podstawa_wymiaru_skladki_zdrowotnej'></span></div>";
            echo "<div class='komorka'>Zdrowotna: <span class='zdrowotna'></span></div><br>";
            echo "<div class='komorka'>Koszt uzyskania przychodu: <span class='koszt_uzyskania_przychodu'></span></div>";
            echo "<div class='komorka'>Ulga klasa średnia: <span class='ulga_klasa_srednia'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru podatku: <span class='podstawa_wymiaru_podatku'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru podatku po zaokrągleniu: <span class='podstawa_wymiaru_podatku_po_zaokragleniu'></span></div>";
            echo "<div class='komorka'>Kwota zmniejszająca podatek: <span class='Kwota_zmniejszajaca_podatek'>$kwota_zmniejszajaca_podatek</span></div><br>";
            echo "<div class='komorka'>Zaliczka na podatek: <span class='zaliczka_na_podatek'></span></div>";
            echo "<div class='komorka'>Zaliczka na podatek po zaokrągleniu: <span class='zaliczka_na_podatek_po_zaokragleniu'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie netto: <span class='wynagrodzenie_netto'></span> Netto</div>";
            echo "<div class='komorka'>Wynagrodzenie netto do 26 lat: <span class='wynagrodzenie_netto_do_26_lat'></span> Netto</div>";
            echo "<div class='komorka'>Zastosowanie: <span class='zastosowanie'></span></div><br>";
            echo "<div class='komorka'>Emerytalne: <span class='emerytalne'></span></div>";
            echo "<div class='komorka'>Rentowe: <span class='rentowe'></span></div>";
            echo "<div class='komorka'>Wypadkowe:  <span class='wypadkowe'></span></div>";
            echo "<div class='komorka'>FP: <span class='FP'></span></div>";
            echo "<div class='komorka'>FGŚP: <span class='FGSP'></span></div>";
            echo "<div class='komorka'>Koszt całkowity pracodawcy: <span class='koszt_calkowity_pracodawcy'></span></div>";

            echo "</div>";
            echo "</div>";
            echo "</section>";
            echo "<section class='strona_arkusz1 lad_bez_pit2'>"; // trzecia strona arkusza 1
            echo "<h2>Lad bez PIT2</h2>";
            echo "<div class='calosc'> ";
            echo "<div class='czesc_pierwsza'>";
            echo "<div class='strona_lewa'>";
            echo "<div class='komorka'>Jakie wynagrodzenie brutto: <span class='wynagrodzenie_brutto'></span></div>";
            echo "<div class='komorka'>Jaka ulga do oddelegowania: <span class='ulga_do_oddelegowania'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie zasadnicze: <span class='wynagrodzenie_zasadnicze'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie za dyżur: <span class='wynagrodzenie_za_dyzur'></span></div>";
            echo "<div class='komorka'>Premie, inne: <span class='premie_inne'></span></div>";
            echo "<div class='komorka'>Ryczałt za nadgodziny: <span class='ryczalt_za_nadgodziny'></span></div>";
            echo "<div class='komorka'>Ryczałt za godziny nocne: <span class='ryczalt_za_godziny_nocne'></span></div>";
            echo "<div class='komorka'>Dodatki: <span class='dodatki'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie Chorobowe:  <span class='wynagrodzenie_chorobowe'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie urlopowe: <span class='wynagrodzenie_urlopowe'></span></div>";
            echo "<div class='komorka'>Suma: <span class='suma'></span></div>";
            echo "</div>";
            echo "<div class='strona_prawa flexing'>";
            echo "<div class='komorka'>Ulga dla klasy średniej: <span class='ulga_dla_klasy_sredniej'></span> ";
            echo "<div class='komorka'>Koszt uzyskania przychodu: <span class='_koszt_uzyskania_przychodu'></span> </div><br>";
            echo "Dodatki zagraniczne na listę płac";
            echo "<div class='komorka'>Płaca zagraniczna do 5922: <span class='placa_zagraniczna_do_5922'></span>Kwota zawierająca ZUS i podatek</div></div>";
            echo "<div class='komorka'>Płaca zagraniczna ulga ZUS: <span class='placa_zagraniczna_ulga_zus'></span>Kwota zwolniona z ZUS zawierająca PIT</div>";
            echo "<div class='komorka'>Płaca zagraniczna ulga ZUS i PIT: <span class='placa_zagraniczna_ulga_zus_i_pit'></span>Kwota zwolniona z ZUS i PIT</div>";
            echo "<div class='komorka'>Ulga do lat 26 <span class='ulga_do_lat_26'></span></div>";
            echo "</div>";
            echo "</div>";

            echo "<div class='czesc_druga'>";

            echo "<div class='strona_lewa'>";
            echo "<div class='komorka'>Podsumowanie I4 <span class=''></span></div>";
            echo "<div class='komorka'><span class='syfon_podsumowanie'></span></div>";
            echo "<div class='komorka'>C1 <span class='brutto_podsumowanie'></span>brutto</div>";
            echo "<div class='komorka'>Emerytalna: <span class='emerytalna'></span></div>";
            echo "<div class='komorka'>Rentowa: <span class='rentowa'></span></div>";
            echo "<div class='komorka'>Chorobowa:  <span class='chorobowa'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru składki zdrowotnej: <span class='podstawa_wymiaru_skladki_zdrowotnej'></span></div>";
            echo "<div class='komorka'>Zdrowotna: <span class='zdrowotna'></span></div><br>";
            echo "<div class='komorka'>Koszt uzyskania przychodu: <span class='koszt_uzyskania_przychodu'></span></div>";
            echo "<div class='komorka'>Ulga klasa średnia: <span class='ulga_klasa_srednia'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru podatku: <span class='podstawa_wymiaru_podatku'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru podatku po zaokrągleniu: <span class='podstawa_wymiaru_podatku_po_zaokragleniu'></span></div>";
            echo "<div class='komorka'>Kwota zmniejszająca podatek: <span class='Kwota_zmniejszajaca_podatek'>$kwota_zmniejszajaca_podatek</span></div><br>";
            echo "<div class='komorka'>Zaliczka na podatek: <span class='zaliczka_na_podatek'></span></div>";
            echo "<div class='komorka'>Zaliczka na podatek po zaokrągleniu: <span class='zaliczka_na_podatek_po_zaokragleniu'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie netto: <span class='wynagrodzenie_netto'></span> Netto</div>";
            echo "<div class='komorka'>Wynagrodzenie netto do 26 lat: <span class='wynagrodzenie_netto_do_26_lat'></span> Netto</div>";
            echo "<div class='komorka'>Zastosowanie: <span class='zastosowanie'></span></div><br>";
            echo "<div class='komorka'>Emerytalne: <span class='emerytalne'></span></div>";
            echo "<div class='komorka'>Rentowe: <span class='rentowe'></span></div>";
            echo "<div class='komorka'>Wypadkowe:  <span class='wypadkowe'></span></div>";
            echo "<div class='komorka'>FP: <span class='FP'></span></div>";
            echo "<div class='komorka'>FGŚP: <span class='FGSP'></span></div>";
            echo "<div class='komorka'>Koszt całkowity pracodawcy: <span class='koszt_calkowity_pracodawcy'></span></div>";
            echo "</div>";

            echo "<div class='srodek dieta_do_us'>Dieta do US";
            echo "<div class='komorka'><span class='jedynak'></span></div>";
            echo "<div class='komorka'> <span class='syfon_us'></span></div>";
            echo "<div class='komorka'>C1 <span class='brutto_us'></span>brutto</div>";
            echo "<div class='komorka'>Emerytalna: <span class='emerytalna'></span></div>";
            echo "<div class='komorka'>Rentowa: <span class='rentowa'></span></div>";
            echo "<div class='komorka'>Chorobowa:  <span class='chorobowa'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru składki zdrowotnej: <span class='podstawa_wymiaru_skladki_zdrowotnej'></span></div>";
            echo "<div class='komorka'>Zdrowotna: <span class='zdrowotna'></span></div><br>";
            echo "<div class='komorka'>Koszt uzyskania przychodu: <span class='koszt_uzyskania_przychodu'></span></div>";
            echo "<div class='komorka'>Ulga klasa średnia: <span class='ulga_klasa_srednia'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru podatku: <span class='podstawa_wymiaru_podatku'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru podatku po zaokrągleniu: <span class='podstawa_wymiaru_podatku_po_zaokragleniu'></span></div>";
            echo "<div class='komorka'>Kwota zmniejszająca podatek: <span class='Kwota_zmniejszajaca_podatek'>$kwota_zmniejszajaca_podatek</span></div><br>";
            echo "<div class='komorka'>Zaliczka na podatek: <span class='zaliczka_na_podatek'></span></div>";
            echo "<div class='komorka'>Zaliczka na podatek po zaokrągleniu: <span class='zaliczka_na_podatek_po_zaokragleniu'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie netto: <span class='wynagrodzenie_netto'></span> Netto</div>";
            echo "<div class='komorka'>Wynagrodzenie netto do 26 lat: <span class='wynagrodzenie_netto_do_26_lat'></span> Netto</div>";
            echo "<div class='komorka'>Zastosowanie: <span class='zastosowanie'></span></div><br>";
            echo "<div class='komorka'>Emerytalne: <span class='emerytalne'></span></div>";
            echo "<div class='komorka'>Rentowe: <span class='rentowe'></span></div>";
            echo "<div class='komorka'>Wypadkowe:  <span class='wypadkowe'></span></div>";
            echo "<div class='komorka'>FP: <span class='FP'></span></div>";
            echo "<div class='komorka'>FGŚP: <span class='FGSP'></span></div>";
            echo "<div class='komorka'>Koszt całkowity pracodawcy: <span class='koszt_calkowity_pracodawcy'></span></div>";
            echo "</div>";

            echo "<div class='strona_prawa dieta_do_zus'>Dieta do ZUS";
            echo "<div class='komorka'><span class='syfon_zus'></span></div>";
            echo "<div class='komorka'>C1 <span class='brutto_zus'></span>brutto</div>";
            echo "<div class='komorka'>Emerytalna: <span class='emerytalna'></span></div>";
            echo "<div class='komorka'>Rentowa: <span class='rentowa'></span></div>";
            echo "<div class='komorka'>Chorobowa:  <span class='chorobowa'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru składki zdrowotnej: <span class='podstawa_wymiaru_skladki_zdrowotnej'></span></div>";
            echo "<div class='komorka'>Zdrowotna: <span class='zdrowotna'></span></div><br>";
            echo "<div class='komorka'>Koszt uzyskania przychodu: <span class='koszt_uzyskania_przychodu'></span></div>";
            echo "<div class='komorka'>Ulga klasa średnia: <span class='ulga_klasa_srednia'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru podatku: <span class='podstawa_wymiaru_podatku'></span></div>";
            echo "<div class='komorka'>Podstawa wymiaru podatku po zaokrągleniu: <span class='podstawa_wymiaru_podatku_po_zaokragleniu'></span></div>";
            echo "<div class='komorka'>Kwota zmniejszająca podatek: <span class='Kwota_zmniejszajaca_podatek'>$kwota_zmniejszajaca_podatek</span></div><br>";
            echo "<div class='komorka'>Zaliczka na podatek: <span class='zaliczka_na_podatek'></span></div>";
            echo "<div class='komorka'>Zaliczka na podatek po zaokrągleniu: <span class='zaliczka_na_podatek_po_zaokragleniu'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie netto: <span class='wynagrodzenie_netto'></span> Netto</div>";
            echo "<div class='komorka'>Wynagrodzenie netto do 26 lat: <span class='wynagrodzenie_netto_do_26_lat'></span> Netto</div>";
            echo "<div class='komorka'>Zastosowanie: <span class='zastosowanie'></span></div><br>";
            echo "<div class='komorka'>Emerytalne: <span class='emerytalne'></span></div>";
            echo "<div class='komorka'>Rentowe: <span class='rentowe'></span></div>";
            echo "<div class='komorka'>Wypadkowe:  <span class='wypadkowe'></span></div>";
            echo "<div class='komorka'>FP: <span class='FP'></span></div>";
            echo "<div class='komorka'>FGŚP: <span class='FGSP'></span></div>";
            echo "<div class='komorka'>Koszt całkowity pracodawcy: <span class='koszt_calkowity_pracodawcy'></span></div>";

            echo "</div>";
            echo "</div>";
            echo "</section>";
            echo "<section class='strona_arkusz1 dane_4TRANS'>";
            echo "<div class='strona_lewa'>";
            echo "<div class='czesc_pierwsza'>";

            $wynagrodzenie_zasadznicze = isset($main_array["stawka_miesieczna_przeliczona"]) ? $main_array["stawka_miesieczna_przeliczona"] : 0;
            echo "<div class='komorka'>Wynagrodzenie zasadnicze: <span class='wynagrodzenie_zasadnicze razem_siano'>$wynagrodzenie_zasadznicze</span></div>";
            // echo "<div class='komorka'>Podstawowe składniki wynagrodzenia: <span class='podstawowe_skladniki_wynagrodzenia'></span></div>";
            $dodatki_za_czas_pracy_w_godzinach_nocnych = isset($main_array["Dodatki za czas pracy w godz. nocnych"]) ? $main_array["Dodatki za czas pracy w godz. nocnych"] : 0;
            echo "<div class='komorka'>Dodatki za czas pracy w godz. nocnych: <span class='dodatki_za_czas_pracy_w_godz_nocnych razem_siano'>$dodatki_za_czas_pracy_w_godzinach_nocnych</span></div>";
            $wynagrodzenie_normalne_za_godz_nadliczbowe_50 = isset($main_array["Wynagrodzenie normalne za godz. nadliczbowe 50%"]) ? $main_array["Wynagrodzenie normalne za godz. nadliczbowe 50%"] : 0;
            echo "<div class='komorka'>Wynagrodzenie normalne za godz. nadliczbowe 50%: <span class='wynagrodzenie_normalne_nadliczbowe_50 razem_siano'>$wynagrodzenie_normalne_za_godz_nadliczbowe_50</span></div>";
            $wynagrodzenie_normalne_za_godz_nadliczbowe_100 = isset($main_array["Wynagrodzenie normalne za godz. nadliczbowe 100%"]) ? $main_array["Wynagrodzenie normalne za godz. nadliczbowe 100%"] : 0;
            echo "<div class='komorka'>Wynagrodzenie normalne za godz. nadliczbowe 100%: <span class='wynagrodzenie_normalne_nadliczbowe_100 razem_siano'>$wynagrodzenie_normalne_za_godz_nadliczbowe_100</span></div>";
            $dodatki_za_godz_nadliczbowe_50 = isset($main_array["Dodatki za godz. nadliczbowe 50%"]) ? $main_array["Dodatki za godz. nadliczbowe 50%"] : 0;
            echo "<div class='komorka'>Dodatki za godz. nadliczbowe 50%: <span class='dodatki_nadliczbowe_50 razem_siano'>$dodatki_za_godz_nadliczbowe_50</span></div>";
            $dodatki_za_godz_nadliczbowe_100 = isset($main_array["Dodatki za godz. nadliczbowe 100%"]) ? $main_array["Dodatki za godz. nadliczbowe 100%"] : 0;
            echo "<div class='komorka'>Dodatki za godz. nadliczbowe 100%: <span class='dodatki_nadliczbowe_100 razem_siano'>$dodatki_za_godz_nadliczbowe_100</span></div>";
            $wynagrodzenie_za_czas_platny_ponad_plan = isset($main_array["Wynagrodzenie za czas płatny ponad plan"]) ? $main_array["Wynagrodzenie za czas płatny ponad plan"] : 0;
            echo "<div class='komorka'>Wynagrodzenie za czas płatny ponad plan: <span class='wynagrodzenie_za_czas_platny_ponad_plan razem_siano'>$wynagrodzenie_za_czas_platny_ponad_plan</span></div>";
            $ryczalt_za_czas_pracy_w_godzinach_nocnych = isset($main_array["Ryczałt za czas pracy w godz. nocnych"]) ? $main_array["Ryczałt za czas pracy w godz. nocnych"] : 0;
            echo "<div class='komorka'>Ryczałt za czas pracy w godz. nocnych: <span class='ryczalt_za_czas_pracy_w_nocy razem_siano'>$ryczalt_za_czas_pracy_w_godzinach_nocnych</span></div>";
            $zaliczka_za_czas_dyzurow = isset($main_array["Zaliczka za czas dyżurów"]) ? $main_array["Zaliczka za czas dyżurów"] : 0;
            echo "<div class='komorka'>Zaliczka za czas dyżurów: <span class='zaliczka_za_czas_dyzurow razem_siano'>$zaliczka_za_czas_dyzurow</span></div>";
            $ryczalt_za_godziny_nadliczbowe = isset($main_array["Ryczałt za godziny nadliczbowe"]) ? $main_array["Ryczałt za godziny nadliczbowe"] : 0;
            echo "<div class='komorka'>Ryczalt za godziny nadliczbowe: <span class='ryczalt_za_godziny_nadliczbowe razem_siano'>$ryczalt_za_godziny_nadliczbowe</span></div>";
            $wyrownanie_za_ryczalty_za_czas_pracy_w_godzinach_nocnych = isset($main_array["Wyrównanie za ryczałty za czas pracy w godzinach nocnych"]) ? $main_array["Wyrównanie za ryczałty za czas pracy w godzinach nocnych"] : 0;
            echo "<div class='komorka'>Wyrownanie za ryczalty za czas pracy w godzinach nocnych: <span class='wyrownanie_za_ryczalty_za_czas_pracy_w_nocy razem_siano'>$wyrownanie_za_ryczalty_za_czas_pracy_w_godzinach_nocnych</span></div>";
            $wyrownanie_za_zaliczki_za_czas_dyzurow = isset($main_array["Wyrównanie za zaliczki za czas dyżurów"]) ? $main_array["Wyrównanie za zaliczki za czas dyżurów"] : 0;
            echo "<div class='komorka'>Wyrównanie za zaliczki za czas dyżurów: <span class='wyrownanie_za_zaliczki_za_czas_dyzurow razem_siano'>$wyrownanie_za_zaliczki_za_czas_dyzurow</span></div>";
            $wyrownanie_za_ryczalty_za_godziny_nadliczbowe = isset($main_array["Wyrównanie za ryczałty za godziny nadliczbowe"]) ? $main_array["Wyrównanie za ryczałty za godziny nadliczbowe"] : 0;
            echo "<div class='komorka'>Wyrównanie za ryczałty za godziny nadliczbowe: <span class='wyrownanie_za_ryczalty_za_godziny_nadliczbowe razem_siano'>$wyrownanie_za_ryczalty_za_godziny_nadliczbowe</span></div>";
            $podstawowe_skladniki_wynagrodzenia_z_okresu_rozliczeniowego = isset($main_array['Podstawowe składniki wynagrodzenia z okresu rozliczeniowego']) ? $main_array['Podstawowe składniki wynagrodzenia z okresu rozliczeniowego'] : 0;
            echo "<div class='komorka'>Podstawowe składniki wynagrodzenia z okresu rozliczeniowego: <span class='podstawowe_skladniki_wynagordzenia_z_okresu_rozliczeniowego razem_siano'>$podstawowe_skladniki_wynagrodzenia_z_okresu_rozliczeniowego</span></div>";
            $wyrownanie_wynagrodzenia = isset($main_array['Wyrównanie wynagrodzenia']) ? $main_array['Wyrównanie wynagrodzenia'] : 0;
            echo "<div class='komorka'>Wyrownanie wynagrodzenia: <span class='wyrownanie_wynagrodzenia razem_siano'>$wyrownanie_wynagrodzenia</span></div>";

            echo "<div class='komorka'>Zestawienie nieobecności</div>";
            $urlop_bezplatny = isset($main_array["Urlop bezpłatny (na pisemny wniosek)"]) ? $main_array["Urlop bezpłatny (na pisemny wniosek)"] : 0;
            echo "<div class='komorka'>Urlop bezpłatny (na pisemny wniosek): <span class='urlop_bezplatny'>$urlop_bezplatny</span></div>";
            $urlop_wypoczynkowy = isset($main_array["Urlop wypoczynkowy"]) ? $main_array["Urlop wypoczynkowy"] : 0;
            echo "<div class='komorka'>Urlop wypoczynkowy: <span class='urlop_wypoczynkowy'>$urlop_wypoczynkowy</span></div>";
            $zasiłek_chorobowy = isset($main_array["Zasiłek chorobowy 80% (po 33 dniach)"]) ? $main_array["Zasiłek chorobowy 80% (po 33 dniach)"] : 0;
            echo "<div class='komorka'>Zasiłek chorobowy 80% (po 33 dniach): <span class='zasilek_chorobowy'>$zasiłek_chorobowy</span></div>";
            $chorobowe_80 = isset($main_array["Chorobowe 80% (k. zakład.)"]) ? $main_array["Chorobowe 80% (k. zakład.)"] : 0;
            echo "<div class='komorka'>Chorobowe 80% (k. zakład.): <span class='chorobowe_80'>$chorobowe_80</span></div>";
            $nieplatna = isset($main_array['Nieobecność usprawiedliwiona niepłatna']) ? $main_array['Nieobecność usprawiedliwiona niepłatna'] : 0;
            echo "<div class='komorka'>Nieobecnosc usprawiedliwiona nieplatna: <span class='nieobecnosc_usprawiedliwiona_nieplatna'> $nieplatna</span></div>";
            echo "<div class='komorka'>Inne</div>";
            $premia_regulaminowa = isset($main_array["Premia regulaminowa"]) ? $main_array["Premia regulaminowa"] : 0;
            echo "<div class='komorka'>Premia regulaminowa: <span class='premia_regulaminowa razem_siano'>$premia_regulaminowa</span></div>";
            $premia_zagraniczna_sektorowa = isset($main_array["Premia zagraniczna sektorowa"]) ? $main_array["Premia zagraniczna sektorowa"] : 0;

            echo "<div class='komorka'>Premia zagraniczna sektorowa: <span class='premia_zagraniczna_sektorowa razem_siano'>$premia_zagraniczna_sektorowa</span></div>";
            $razem = isset($main_array['Razem:']) ? $main_array['Razem:'] : 0;
            echo "<div class='komorka'>Razem: <span class='razem'>$razem</span></div>";
            echo "<div class='komorka'>Sprawdzenie wyników z ewidencji: <span class='sprawdzenie_wynikow_z_ewidencji'></span></div>";
            echo "<div class='komorka'>Ilość wyrównań sektorowych: <span class='ilosc_wyrownan_sektorowych'>$ilosc_wyrownan_sektorowych</span></div>";
            echo "</div>";
            echo "<div class='czesc_druga'>";
            echo "<div class='komorka'>informacje kopiowane do podsumowania</div>";
            echo "<div class='komorka'>Wynagrodzenie zasadnicze: <span class='wynagrodzenie_zasadnicze'>$wynagrodzenie_zasadznicze</span></div>";
            echo "<div class='komorka'>Ryczałt za nadgodziny: <span class='ryczalt_za_nadgodziny'></span></div>";
            echo "<div class='komorka'>Ryczałt za godziny nocne: <span class='ryczalt_za_godziny_nocne'></span></div>";
            echo "<div class='komorka'>Wynagrodzenie za dyżur: <span class='wynagrodzenie_za_dyzur'></span></div>";
            echo "<div class='komorka'>Premie, inne: <span class='premie_inne'>$premia_regulaminowa</span></div>";

            echo "<div class='komorka'>Wynagrodzenie sektorowe 4TRANS: <span class='wynagrodzenie_sektorowe_4trans'></span></div>";
            echo "<div class='komorka'>Wynik na ewidencji czasu pracy 4TRANS: <span class='wynik_na_ewidencji_czasu_pracy_4TRANS'></span></div>";
            echo "<div class='komorka'>Dodatki: <span class='dodatki'></span></div>";

            echo "</div>";
            echo "</div>";
            echo "<div class='strona_prawa'>";
            echo "<div class='czesc_pierwsza'>";
            echo "<div class='komorka'>Wyciągnięte z ewidencji wyrównanie sektorowe</div>";
            echo "<div class='komorka'>Wyrównania do wynagrodzenia za czas pracy w innych krajach</div>";
            $iteracja = 1;
            foreach ($main_array['wyrownanie_za_czas_pracy_zagranicznej'] as $key => $value) {
                echo "<div class='komorka'>$iteracja.$key: <span class='zagraniczne'>$value</span></div>";
                $iteracja++;
            }

            echo "<div class='komorka'> Dane z arkusza zbiorczego</div>";
            echo "<div class='komorka'> Podaje jego numer pozycji ze zbiorczego zestawienia: <span class='podaj_numer_pozycji'></span></div>";
            echo "<div class='komorka'>Podaje wartość ze zbiorczego zestawienia: <span class='podaj_wartosc'></span></div>";

            echo "</div>";
            echo "</div>";
            echo "</div>";
            echo "</section>"; // koniec arkusza 1

            //
            //
            // wczytywanie firmowego EXCELA
            //
            //

            $spreadsheet = IOFactory::load($sciezka_excela_firmowego); // Wczytaj plik Excel

            $worksheet = $spreadsheet->getActiveSheet();

            $currentRow = 0;
            $licznik = 0;
            $stara_ulga = false;
            for ($i = 1; $i < 20; $i++) {
                $sprawdzacz = $worksheet->getCell("A" . $currentRow)->getValue();
                if (strpos($sprawdzacz, "Pracownik:") !== false) {
                    if ($sprawdzacz == 'Pracownik:') {
                        $stara_ulga = true;
                    }
                    break;
                } else {
                    $currentRow++;

                }

            }
            if ($stara_ulga) {
                while (($sprawdzacz = $worksheet->getCell("F" . $currentRow)->getValue()) != '') {
                    $pracownik = $worksheet->getCell("A" . $currentRow)->getValue();
                    $dieta = $worksheet->getCell("F" . $currentRow)->getValue();

                    echo "<div class='pracownik'>$pracownik: <span class='dieta_zagraniczna'>$dieta</span></div>";
                    $currentRow += 2;
                    $licznik++;

                }
            } else if ($stara_ulga == false) {
                $currentRow = 1;
                $lastRow = $worksheet->getCell('A' . $worksheet->getHighestRow())->getRow();
                while ($lastRow--) {

                    $sprawdzacz = $worksheet->getCell("A" . $currentRow)->getValue();
                    $currentRow++;
                    $robus = '';
                    if (strpos($sprawdzacz, 'Pracownik') !== false) {
                        $pracownik = $sprawdzacz;

                        $pracownik = explode("Pracownik:", $pracownik);

                        $robus = $pracownik[1];
                        $sprawdzacz2 = $worksheet->getCell("J" . $currentRow)->getValue();
                        while ($sprawdzacz2 != 'Suma diet zagranicznych') {
                            $lastRow--;
                            $currentRow++;
                            $sprawdzacz2 = $worksheet->getCell("J" . $currentRow)->getValue();

                        }
                        if ($sprawdzacz2 == 'Suma diet zagranicznych') {
                            $sprawdzacz2 = $worksheet->getCell("N" . $currentRow)->getValue();
                            echo "<div class='pracownik'>$robus: <span class='dieta_zagraniczna'>$sprawdzacz2</span></div>";

                        }

                    }

                }
            }

            echo "<div class='liczba_roboli'>Liczba pracownikow w pliku sanitaryjnym: $licznik</div>";

            $licznik_pracownikow = $_POST['licznik_pracownikow'];

            echo "<div class='liczba_roboli'>Liczba plików 4TRANS w folderze: $licznik_pracownikow</div>";

            echo "</section><section class='robotaju'>";

            $spreadsheet = IOFactory::load($sciezka_excela_sanitarnego); // Wczytaj plik Excel

            $worksheet = $spreadsheet->getActiveSheet();
            $lastRow = $worksheet->getCell('A' . $worksheet->getHighestRow())->getRow();
            $sprawdzacz = $worksheet->getCell("A" . 3)->getValue();
            if (strpos($sprawdzacz, "Pracownik:") !== false) {
                $currentRow = 3;
                while ($lastRow > 0) {
                    $sprawdzacz = $worksheet->getCell("A" . $currentRow)->getValue();

                    $robol = $sprawdzacz;
                    $robol = explode("Pracownik:", $robol);

                    $robol = $robol[1];
                    $sprawdzacz = $worksheet->getCell("I" . $currentRow + 4)->getValue();

                    $kasa = $sprawdzacz;
                    // echo $robol . ' ' . ' ' . $kasa . "<br>";
                    // echo $currentRow + 4 . '<br>';
                    echo "<div class='puzzle'><span class='robol'>$robol: </span> <span class='siano'>$kasa</span></div>";

                    $currentRow += 7;
                    $lastRow -= 7;

                }
            } else {
                $currentRow = 1;

                for ($i = 1; $i < $lastRow; $i++) {
                    $sprawdzacz = $worksheet->getCell("A" . $currentRow)->getValue();
                    if (strpos($sprawdzacz, "Pracownik:") !== false) {
                        break;
                    } else {
                        $currentRow++;

                    }

                }

                while (($sprawdzacz = $worksheet->getCell("A" . $currentRow)->getValue()) != '') {
                    $sprawdzacz2 = $worksheet->getCell("H" . $currentRow + 5)->getValue();
                    echo "<div class='puzzle'><span class='robol'>$sprawdzacz: </span> <span class='siano'>$sprawdzacz2</span></div>";
                    $currentRow += 9;

                }
            }

            echo "</section>

    ";

        }
        // $sciezka_do_arkusza3 = $_POST['arkusz3_sciezka'];
        // $spreadsheet = IOFactory::load($sciezka_do_arkusza3); // Wczytaj plik Excel

        // $worksheet = $spreadsheet->getActiveSheet();
        // $test = $worksheet->getCell("A2")->getValue();

    } else {

        echo "Pracownik został poprawnie zapisany lub nie ma go w bazie danych";

    }}
?>
</body>
</html>