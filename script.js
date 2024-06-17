document.addEventListener('DOMContentLoaded', () => {
    const carValueInput = document.getElementById('car-value');
    const carValueRange = document.getElementById('car-value-range');
    const downPaymentInput = document.getElementById('down-payment');
    const downPaymentRange = document.getElementById('down-payment-range');

    // Synchronize range and number inputs for car value
    carValueInput.addEventListener('input', () => {
        carValueRange.value = carValueInput.value;
    });

    carValueRange.addEventListener('input', () => {
        carValueInput.value = carValueRange.value;
    });

    // Synchronize range and number inputs for down payment
    downPaymentInput.addEventListener('input', () => {
        downPaymentRange.value = downPaymentInput.value;
    });

    downPaymentRange.addEventListener('input', () => {
        downPaymentInput.value = downPaymentRange.value;
    });
});
