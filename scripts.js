document.getElementById('insurance-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var age = document.getElementById('age').value;
    var bmi = document.getElementById('bmi').value;
    var smoker = document.getElementById('smoker').value;

    var forecastPrice = calculateForecastPrice(age, bmi, smoker);

    document.getElementById('result').textContent = 'Forecasted Insurance Price: $' + forecastPrice;
});

function calculateForecastPrice(age, bmi, smoker) {
    var basePrice = 100; // Base price in dollars

    // Adjust base price based on age
    basePrice += (age - 18) * 2;

    // Adjust base price based on BMI
    if (bmi > 25) {
        basePrice += (bmi - 25) * 5;
    }

    // Adjust base price based on smoking status
    if (smoker === 'yes') {
        basePrice += 200;
    }

    return basePrice.toFixed(2);
}
// Smooth scrolling function
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}
