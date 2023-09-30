const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const weight = document.querySelector('#weight').value.trim();
  const height = document.querySelector('#height').value.trim();
  const result = document.querySelector('#result');

  if (weight === '' || weight <= 0) {

    result.innerHTML = 'Please give a valid weight';
    result.style.color = 'red'

  } else if (height === '' ||  height <= 0) {

    result.innerHTML = 'Please give a valid height';
    result.style.color = 'red'

  } else {
    
    const bmi = (parseFloat(weight) / ((parseFloat(height) * parseFloat(height)) / 10000)).toFixed(2);

    let category;

    if (bmi < 18.5) {
        category = 'Underweight';
      } else if (bmi < 24.9) {
        category = 'Normal Weight';
      } else if (bmi < 29.9) {
        category = 'Overweight';
      } else {
        category = 'very fat';
      }
  
      result.innerHTML = `Your BMI is: ${bmi} which is ${category}`;
      result.style.color = 'green';
    }
  });

