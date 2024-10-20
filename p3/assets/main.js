function calculateStats(event) {
    event.preventDefault();
    
    // Get input values and convert to numbers
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    // Create array of numbers
    const numbers = [num1, num2, num3];
    
    // Calculate statistics
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const range = max - min;
    
    // Calculate median
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const median = sortedNumbers[1];
    
    // Display results
    document.getElementById('max').textContent = max;
    document.getElementById('min').textContent = min;
    document.getElementById('mean').textContent = mean.toFixed(1);
    document.getElementById('median').textContent = median;
    document.getElementById('range').textContent = range;
    
    // Show results container
    document.getElementById('results').style.display = 'block';
}

// Array of background images
const backgrounds = [
    './assets/images/bg1.jpg',
    './assets/images/bg2.jpg',
    './assets/images/bg3.jpg',
    './assets/images/bg4.jpg',
    './assets/images/bg5.jpg',
    './assets/images/bg6.jpg',
    './assets/images/bg7.jpg',
    './assets/images/bg8.jpg'
];
 
 // Function to change background
function changeBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
}

// Change background when page loads
window.onload = changeBackground