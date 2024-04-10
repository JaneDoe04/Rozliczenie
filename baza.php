<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <title>Pracownicy</title>
    <script src="baza_script.js" defer></script>
    <link rel="stylesheet" href="styl2.css">
</head>
<body>
<div class='modal'>
    <div class='akccept'>Czy aby na pewno chcesz usunąć firmę: <span class="firma_delete"></span>
        <input type='button' value='TAK' class='zgoda'>
    </div>
</div>
<?php
$polaczenie = new PDO('mysql:host=localhost;dbname=rozliczenia', 'root', '');
if (isset($_POST['usuwanie_firmy'])) {

    $id_firmowe = $_POST['usuwanie_firmy'];
    $update = $polaczenie->query("DELETE from firmy where id = $id_firmowe ");

}
if (isset($_POST['zdrowotne_update'])) {
    $zdrowotna = $_POST['zdrowotne_update'];
    $limit_zus = $_POST['limit_zus'];
    $firma = $_POST['id_firmy'];
    $update = $polaczenie->query("UPDATE firmy set wypadkowe = $zdrowotna, limit_zus = $limit_zus where id = $firma");

}
//dodaj firme
if (isset($_POST['emerytalna']) && !empty($_POST['emerytalna'])) {
    $update = $polaczenie->query("DELETE from zmienne");
    $emerytalna = $_POST['emerytalna'] * 1;
    $rentowa = $_POST['rentowa'] * 1;
    $chorobowa = $_POST['chorobowa'] * 1;
    $zdrowotna = $_POST['zdrowotna'] * 1;
    $FP = $_POST['FP'] * 1;
    $FGSP = $_POST['FGSP'] * 1;
    $update = $polaczenie->query("INSERT into zmienne VALUES($emerytalna, $rentowa, $chorobowa, $zdrowotna, $FP, $FGSP)");

}

if (isset($_POST['nowa_firma']) && !empty($_POST['nowa_firma'])) {
    $nazwa_firmy = $_POST['nowa_firma'];
    $wypadkowa = $_POST['wypadkowe'];
    $zus = $_POST['zus'];
    $dodaj_firme = $polaczenie->query("INSERT into firmy VALUES(null,'$nazwa_firmy', '$wypadkowa','$zus')");
    header('baza.php');
}
if (isset($_POST['aktualizuj_pracusia'])) {

    $nazwa = $_POST['imie'];
    $lata = $_POST['urodziny'];
    $koszta = $_POST['koszt_przychodu'];
    $id = $_POST['pracus'];
    $update_pracusia = $polaczenie->query("UPDATE pracownicy set pracownik = '$nazwa', rok_urodzenia = '$lata', koszt_uzyskania_przychodu = '$koszta' where id = $id ");
}

//dodaj pracownika
if (isset($_POST['dodaj_pracownika'])) {

    $imie = $_POST['imie'];
    $rok_urodzenia = $_POST['urodziny'];
    $koszt_uzyskania_przychodow = $_POST['koszt_przychodu'];
    $id_firmy = $_POST['nazwa_firmy'];

    $dodaj_pracownika = $polaczenie->query("INSERT into pracownicy VALUES(null,'$imie','$rok_urodzenia',$koszt_uzyskania_przychodow, $id_firmy)");
}
//usun pracownika
if (isset($_POST['do_kasacji'])) {
    $do_kasacji = $_POST['do_kasacji'];
    $usun_pracownika = $polaczenie->query("DELETE FROM `pracownicy` WHERE `pracownicy`.`id` = $do_kasacji");
}

//wybierz firme
$wyciagnij_firmy = $polaczenie->query("SELECT * FROM `firmy` order by firma");
if (isset($_POST['nazwa_firmy'])) {
    $id_firmy = $_POST['nazwa_firmy'];
    echo "<input type='hidden'value='$id_firmy' name='id_firmy' class='id_firmy'>";
}

echo "<form action='baza.php' class='firmowy_div'method='post'>
<div class='borderline'> <select name='nazwa_firmy'>";
$nazwa_firmy;
if (isset($_POST['nazwa_firmy'])) {
    $nazwa_firmy = $_POST['nazwa_firmy'];
}
while ($dane = $wyciagnij_firmy->fetch()) {
    if ($nazwa_firmy != $dane[0]) {
        echo "<option value='$dane[0]'>$dane[1]</option>
   ";
    } else {
        echo "<option selected value='$dane[0]'>$dane[1]</option>";
    }

}
echo "<select>
<input type='submit' value='wybierz firme'></div>
<div class='borderline'>
<input type='text'  name='nowa_firma' placeholder='nazwa firmy' id='nowa_firma_input'>
<input type='text'  name='wypadkowe' placeholder='wypadkowe' id='nowa_firma_input'>
<input type='text'  name='zus' placeholder='limit zus' id='nowa_firma_input'>
<input type='submit' value='dodaj firme' id='nowa_firma_button' disabled='true'>

<input type='submit' value='usun firme' name='usuwanie_firmy' class='delecior'>

</div>

</form>";

if (isset($_POST['do_edycji'])) {
    $robus = $_POST['do_edycji'];
    $nazwa_firmy = $_POST['nazwa_firmy'];
    $aktualka = $polaczenie->query("SELECT * from pracownicy where id = $robus");
    $pracownik = $aktualka->fetch();
    echo "
    <form action='baza.php' method='post'>
  <input type='text' name='imie' placeholder='Imię' value='$pracownik[1]'>
  <input type='text' name='urodziny' placeholder='rok urodzenia rrrr-mm-dd' value='$pracownik[2]'>
$pracownik[3]
  Koszt uzyskania przychodu:
  <input type='radio' name='koszt_przychodu' value='0'  class='checkmark'>0
  <input type='radio' name='koszt_przychodu' value='250'  class='checkmark'>250
  <input type='radio' name='koszt_przychodu' value='300' checked class='checkmark'>300


  <input type='hidden' name='pracus' value='$robus'>
  <input type='submit' name='aktualizuj_pracusia' value='ZATWIERDŹ'>
  <input type='hidden' name='nazwa_firmy' value='$nazwa_firmy'>
</form>";

}
if (isset($_POST['nowa_nazwa_firmy']) && !empty($_POST['nowa_nazwa_firmy'])) {
    $nowa_nazwa = $_POST['nowa_nazwa_firmy'];
    $id = $_POST['id_firmy'];
    $wyciagnij_firmy = $polaczenie->query("UPDATE firmy set `firma` = '$nowa_nazwa' where id = $id");

}
//tabela
if (isset($_POST['nazwa_firmy']) && !isset($_POST['usuwanie_firmy'])) {
    $id_firmy = $_POST['nazwa_firmy'];
    $wyciagnij_firmy = $polaczenie->query("SELECT firma FROM `firmy` where id=$id_firmy");
    $fetch = $wyciagnij_firmy->fetch();
    echo "<form action='baza.php' method='POST'>
    <input type='hidden' name='id_firmy' value='$id_firmy'><input name='nowa_nazwa_firmy' value='$fetch[0]'>
    <input type='submit'></form>";
    echo "<table><tr><th>Nr.</th><th>Imię</th><th>Data ur.</th><th>Koszt uzyskania przychodu</th></tr>";

    $wyciagnij_firmy = $polaczenie->query("SELECT * FROM `pracownicy` where firma_id=$id_firmy");
    $i = 1;
    while ($dane = $wyciagnij_firmy->fetch()) {
        echo "<tr><td>" . $i . "</td><td>" . $dane[1] . "</td><td>" . $dane[2] . "</td><td>" . $dane[3] . "</td><td>" .

            "<form action='baza.php' method='post'>
        <input type='hidden' value='" . $dane[0] . "' name='do_kasacji'>
        <input type='hidden' value='usun' class='usun_button'>
        <input type='hidden' value='$id_firmy' name='nazwa_firmy'>

        </form>
        <form action='baza.php' method='post'>
        <input type='hidden' value='" . $dane[0] . "' name='do_edycji'>
        <input type='hidden' value='aktualizuj' class='edytuj_btn'>
        <input type='hidden' value='$id_firmy' name='nazwa_firmy'>
        </form>





        </td></tr>";
        $i++;
    }
    $i = 1;
    echo "</table>";
}

echo "<form action='baza.php' method='post'>";
echo "<div id='nowy_pracownik_div'><div class='borderline'>";
// $polaczenie = new PDO('mysql:host=localhost;dbname=rozliczenia', 'root', '')";
if (isset($_POST['nazwa_firmy']) && !isset($_POST['usuwanie_firmy'])) {
    $firmoweczka = $_POST['nazwa_firmy'];
    $zdrowie_update = $polaczenie->query("SELECT wypadkowe, limit_zus from firmy where id = $firmoweczka");
    $zmienna = $zdrowie_update->fetch();

    echo "WYPADKOWE:<input type='hidden' name='id_firmy'value='$id_firmy'> <input value='$zmienna[0]'step='0.000001' name='zdrowotne_update'>
    <br>LIMIT ZUS:<input value='$zmienna[1]'step='0.000001' name='limit_zus'><br><input type='submit' value='aktualizuj wypadkowe i limit zus'>
    <input type='hidden' value='$firmoweczka' name='nazwa_firmy'><br>
    <input type='button' class='aktualka'value='aktualizuj pracownika'></form>";
}

echo "<input type='button' id='nowy_pracownik_button' value='dodaj pracownika'>  <input type='button' id='usun_pracownikow' value='usuń pracownikow'></div></div>";
$wyciagnij_zmienne = $polaczenie->query("SELECT * FROM `zmienne`");
$zmienne = $wyciagnij_zmienne->fetch();
$znajdz_zus = $polaczenie->query("SELECT wartosc FROM zus");
$zus_rok = $znajdz_zus->fetch();
echo '<form action="baza.php" method="post"><div class="zmienne">

<div class="emerytalna">emerytalna<input type="number" name="emerytalna" required step="0.0001" value="' . $zmienne[0] . '"></div>
<div class="rentowa">rentowa<input type="number" required name="rentowa" step="0.0001" value="' . $zmienne[1] . '"></div>
<div class="chorobowa">chorobowa<input required type="number" step="0.0001" name="chorobowa" value="' . $zmienne[2] . '"></div>
<div class="zdrowotna">zdrowotna<input required name="zdrowotna" step="0.0001" type="number" value="' . $zmienne[3] . '"></div>
<div class="FP">FP<input type="number" step="0.0001" name="FP"required  value="' . $zmienne[4] . '"></div>
<div class="FGSP">FGŚP<input type="number" step="0.0001" required name="FGSP"  value="' . $zmienne[5] . '"></div>
<div class="limit_zus">Limit ZUS: <input type="number" step="0.0001" required name="ZUS"  value="' . $zus_rok[0] . '"></div>
<input type="submit" value="zapisz">


</div></form>';

?>

</body>
</html>