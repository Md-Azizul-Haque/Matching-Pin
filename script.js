
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else{
        getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generatePin').addEventListener('click', function () {
    const getPinValue = getPin();
    const showPin = document.getElementById('showPin');
    showPin.value = getPinValue;
})

document.getElementById('calculatorBody').addEventListener('click', function (event) {
    const calculateNumber = event.target.innerText;
    const displayID = document.getElementById('displayNumber');
    const previousNumber = displayID.value;
    if (isNaN(calculateNumber)) {
        if (calculateNumber === 'C') {
            displayID.value = ''
        }  
        else if (calculateNumber === '<') {
            const numberSplit = previousNumber.split('');
            numberSplit.pop();
            const numberJoin = numberSplit.join('');
            displayID.value = numberJoin;
        }
    }
    else{
        const displayNumber = previousNumber + calculateNumber;
        displayID.value = displayNumber;
        }    
})

document.getElementById('submitBtn').addEventListener('click', function () {
    const displayPinID = document.getElementById('showPin');
    const displayPinIDValue = displayPinID.value;
    const calculateNumber = document.getElementById('displayNumber');
    const calculateNumberValue = calculateNumber.value;

    const showMessValid =  document.getElementById('valid');
    const showMessUnValid =  document.getElementById('unValid');
    if (displayPinIDValue == calculateNumberValue) {

       showMessValid.style.display = 'block';
       showMessUnValid.style.display = 'none';
    }
    else{
       showMessUnValid.style.display = 'block';
       showMessValid.style.display = 'none';
    }
})