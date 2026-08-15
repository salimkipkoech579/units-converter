// Unit configuration options relative to base units
const unitData = {
    // Base: Meter
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    miles: 0.000621371,
    feet: 3.28084,
    inches: 39.3701,

    // Base: Kilogram
    kilograms: 1,
    grams: 1000,
    pounds: 2.20462,
    ounces: 35.274
};

// DOM Selections
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const inputValue = document.getElementById('inputValue');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

// Initialize dropdown menus
function initConverter() {
    // Clear any placeholder text
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';

    // Populate options
    Object.keys(unitData).forEach(unit => {
        fromUnitSelect.add(new Option(unit, unit));
        toUnitSelect.add(new Option(unit, unit));
    });

    // Set clean default selections
    fromUnitSelect.value = 'meters';
    toUnitSelect.value = 'kilometers';

    // Trigger initial calculation
    calculateConversion();
}

// Validation logic helper
function areUnitsCompatible(unitA, unitB) {
    const weightUnits = ['kilograms', 'grams', 'pounds', 'ounces'];
    const isAWeight = weightUnits.includes(unitA);
    const isBWeight = weightUnits.includes(unitB);
    return isAWeight === isBWeight;
}

// Primary conversion engine
function calculateConversion() {
    const value = parseFloat(inputValue.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    if (isNaN(value)) {
        resultDiv.textContent = "Please enter a number";
        resultDiv.style.color = "#ef4444";
        resultDiv.style.borderColor = "#ef4444";
        return;
    }

    if (!areUnitsCompatible(fromUnit, toUnit)) {
        resultDiv.textContent = "Cannot mix Length & Weight units!";
        resultDiv.style.color = "#ef4444";
        resultDiv.style.borderColor = "#ef4444";
        return;
    }

    // Restore dynamic green styling for successful operations
    resultDiv.style.color = "#10b981";
    resultDiv.style.borderColor = "#10b981";

    // Calculate: Value -> Base -> Target
    const valueInBase = value / unitData[fromUnit];
    const finalOutput = valueInBase * unitData[toUnit];

    // Clean trailing decimals up to 4 places
    const formattedOutput = Number(finalOutput.toFixed(4));
    resultDiv.textContent = `${value} ${fromUnit} = ${formattedOutput} ${toUnit}`;
}

// Execution triggers
initConverter();
convertBtn.addEventListener('click', calculateConversion);
inputValue.addEventListener('input', calculateConversion);
