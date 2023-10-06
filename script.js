const a = document.querySelector('#liczba1');
const b = document.querySelector('#liczba2');
const c = document.querySelector('#liczba3');
const d = document.querySelector('#liczba4');
const btnPrzelicz = document.querySelector('#przelicz');
const wynikPojemnika = document.querySelector('#wynik');

const sum = 0;
const avg = 0;
const min = 0;
const max = 0;
btnPrzelicz.addEventListener('click',()=>{
    const sum = 
    parseInt(a.value) + 
    parseInt(b.value) + 
    parseInt(c.value) + 
    parseInt(d.value);

    console.log(sum);
    
    const avg = ((
        parseInt(a.value) + 
        parseInt(b.value) + 
        parseInt(c.value) + 
        parseInt(d.value) )/4);

        console.log(avg);
        
        
        
        //Math.min(), Math.max()
        const min = Math.min(a.value,b.value,c.value,d.value);

        console.log(min);
        
        const max = Math.max(a.value,b.value,c.value,d.value);

        console.log(max);
        
        wynikPojemnika.innerHTML =
        `Suma: ${sum} ,
        Średnia: ${avg},
        Minimum: ${min}, 
        Maximum: ${max}`; 
    })