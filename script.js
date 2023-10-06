const liczba1 = document.querySelector('#liczba1')
const btnPrzelicz = document.querySelector('#przelicz')
const wynikPojemnika = document.querySelector('#wynik')

console.dir(liczba1)

btnPrzelicz.addEventListener('click',()=>{
    //Math.min(), Math.max()
    const max100 = Math.min(liczba1.value, 100)
    wynikPojemnika.innerHTML = +liczba1.value
    //Number(liczba.value),
    //parseInt(liczba1.value),parseFloat(liczba1.value)
    wynikPojemnika.innerHTML = liczba1.value
    console.log(liczba1.value)
})