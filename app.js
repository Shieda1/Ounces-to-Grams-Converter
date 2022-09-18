// https://www.omnicalculator.com/conversion/ounces-to-grams-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gramsRadio = document.getElementById('gramsRadio');
const ouncesRadio = document.getElementById('ouncesRadio');

let grams;
let ounces = v; 

// labels of the inpust
const variable = document.getElementById('variable');

gramsRadio.addEventListener('click', function() {
  variable.textContent = 'ounces';
  ounces = v;
  result.textContent = '';
});

ouncesRadio.addEventListener('click', function() {
  variable.textContent = 'grams';
  grams = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(gramsRadio.checked)
    result.textContent = `grams = ${computegrams().toFixed(5)}`;

  else if(ouncesRadio.checked)
    result.textContent = `ounces = ${computeounces().toFixed(5)}`;
})

// calculation

function computegrams() {
  return Number(ounces.value) * 28.35;
}

function computeounces() {
  return Number(grams.value) / 28.35;
}