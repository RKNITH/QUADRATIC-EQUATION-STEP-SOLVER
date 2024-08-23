// // FIRST APPROACH
// document.getElementById('calculate').addEventListener('click', function () {
//     let a = parseFloat(document.getElementById('a').value);
//     let b = parseFloat(document.getElementById('b').value);
//     let c = parseFloat(document.getElementById('c').value);
//     let solutionDiv = document.getElementById('solution');

//     if (isNaN(a) || isNaN(b) || isNaN(c)) {
//         solutionDiv.innerHTML = "<p>Please enter valid numbers for all coefficients.</p>";
//         return;
//     }

//     let discriminant = b * b - 4 * a * c;
//     let sqrtDiscriminant = Math.sqrt(discriminant);

//     let step1 = `Step 1: Calculate the discriminant (Δ) = b² - 4ac = ${b}² - 4(${a})(${c}) = ${discriminant}`;
//     let step2;
//     let step3;
//     let step4;

//     if (discriminant > 0) {
//         let root1 = (-b + sqrtDiscriminant) / (2 * a);
//         let root2 = (-b - sqrtDiscriminant) / (2 * a);
//         step2 = `Step 2: Since Δ > 0, the equation has two real and distinct roots.`;
//         step3 = `Step 3: Calculate the roots using the quadratic formula:`;
//         step4 = `Root 1: x₁ = (-b + √Δ) / 2a = (${root1.toFixed(2)})<br>Root 2: x₂ = (-b - √Δ) / 2a = (${root2.toFixed(2)})`;
//     } else if (discriminant === 0) {
//         let root = -b / (2 * a);
//         step2 = `Step 2: Since Δ = 0, the equation has one real and repeated root.`;
//         step3 = `Step 3: Calculate the root using the quadratic formula:`;
//         step4 = `Root: x = -b / 2a = (${root.toFixed(2)})`;
//     } else {
//         step2 = `Step 2: Since Δ < 0, the equation has no real roots, only complex roots.`;
//         step3 = `Step 3: Calculate the imaginary parts:`;
//         step4 = `Root 1: x₁ = (-b + i√|Δ|) / 2a<br>Root 2: x₂ = (-b - i√|Δ|) / 2a`;
//     }

//     solutionDiv.innerHTML = `
//         <p>${step1}</p>
//         <p>${step2}</p>
//         <p>${step3}</p>
//         <p>${step4}</p>
//     `;
// });


//  ****************************************************************

//  SECOND APPROACH

// document.getElementById('calculate').addEventListener('click', function () {
//     let a = parseFloat(document.getElementById('a').value);
//     let b = parseFloat(document.getElementById('b').value);
//     let c = parseFloat(document.getElementById('c').value);
//     let solutionDiv = document.getElementById('solution');

//     if (isNaN(a) || isNaN(b) || isNaN(c)) {
//         solutionDiv.innerHTML = "<p>Please enter valid numbers for all coefficients.</p>";
//         return;
//     }

//     let discriminant = b * b - 4 * a * c;
//     let sqrtDiscriminant = Math.sqrt(Math.abs(discriminant));

//     let step1 = `Step 1: Write down the quadratic equation: ${a}x² + ${b}x + ${c} = 0`;
//     let step2 = `Step 2: Identify coefficients: a = ${a}, b = ${b}, c = ${c}`;
//     let step3 = `Step 3: Calculate the discriminant (Δ) using the formula Δ = b² - 4ac`;
//     let step3Details = `Δ = (${b})² - 4(${a})(${c}) = ${b * b} - ${4 * a * c} = ${discriminant}`;
//     let step4, step4Details, step5, step6;

//     if (discriminant > 0) {
//         let root1 = (-b + sqrtDiscriminant) / (2 * a);
//         let root2 = (-b - sqrtDiscriminant) / (2 * a);

//         step4 = `Step 4: Since the discriminant Δ > 0, the equation has two distinct real roots.`;
//         step5 = `Step 5: Calculate the roots using the quadratic formula: x = (-b ± √Δ) / 2a`;
//         step6 = `
//             Root 1: x₁ = (-${b} + √${discriminant}) / (2 * ${a})<br>
//             x₁ = (${(-b)} + ${sqrtDiscriminant.toFixed(2)}) / ${2 * a}<br>
//             x₁ = ${root1.toFixed(2)}
//             <br><br>
//             Root 2: x₂ = (-${b} - √${discriminant}) / (2 * ${a})<br>
//             x₂ = (${(-b)} - ${sqrtDiscriminant.toFixed(2)}) / ${2 * a}<br>
//             x₂ = ${root2.toFixed(2)}
//         `;
//     } else if (discriminant === 0) {
//         let root = -b / (2 * a);

//         step4 = `Step 4: Since the discriminant Δ = 0, the equation has one real repeated root.`;
//         step5 = `Step 5: Calculate the root using the quadratic formula: x = -b / 2a`;
//         step6 = `
//             Root: x = (-${b}) / (2 * ${a})<br>
//             x = ${root.toFixed(2)}
//         `;
//     } else {
//         let realPart = (-b / (2 * a)).toFixed(2);
//         let imaginaryPart = (sqrtDiscriminant / (2 * a)).toFixed(2);

//         step4 = `Step 4: Since the discriminant Δ < 0, the equation has two complex roots.`;
//         step5 = `Step 5: Calculate the roots using the quadratic formula: x = (-b ± √Δ) / 2a`;
//         step6 = `
//             Root 1: x₁ = ${realPart} + ${imaginaryPart}i<br>
//             Root 2: x₂ = ${realPart} - ${imaginaryPart}i
//         `;
//     }

//     solutionDiv.innerHTML = `
//         <p>${step1}</p>
//         <p>${step2}</p>
//         <p>${step3}</p>
//         <p>${step3Details}</p>
//         <p>${step4}</p>
//         <p>${step5}</p>
//         <p>${step6}</p>
//     `;
// });


// ***************************************************************
//  APPROACH 3:

document.getElementById('calculate').addEventListener('click', function () {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    // let wordProblem = document.getElementById('wordProblem').value.trim();
    let solutionDiv = document.getElementById('solution');

    // Function to extract numbers from a string
    function extractNumbers(text) {
        return text.match(/-?\d+(\.\d+)?/g).map(Number);
    }

    // Function to parse the word problem and extract coefficients
    function parseWordProblem(problem) {
        let lowerProblem = problem.toLowerCase();
        let numbers = extractNumbers(lowerProblem);

        // Simple parsing logic (can be expanded for more complex problems)
        if (lowerProblem.includes("velocity") && lowerProblem.includes("height")) {
            // Example: A ball is thrown upward with a velocity of 15 m/s from a height of 5 meters...
            let initialVelocity = numbers[0];
            let height = numbers[1];
            return [-4.9, initialVelocity, height]; // a = -4.9 (approx. for gravity), b = initial velocity, c = initial height
        } else if (lowerProblem.includes("area") && lowerProblem.includes("dimensions")) {
            // Example: The area of a rectangular field is 150 square meters, and its dimensions are x and x+5...
            let area = numbers[0];
            let difference = numbers[1];
            return [1, difference, -area]; // Assuming equation of the form x² + difference*x - area = 0
        } else if (lowerProblem.includes("sum") && lowerProblem.includes("product")) {
            // Example: The sum of the roots is 10 and the product is 24...
            let sum = numbers[0];
            let product = numbers[1];
            return [1, -sum, product]; // Assuming equation of the form x² - sum*x + product = 0
        } else if (lowerProblem.includes("roots")) {
            // Example: Find the quadratic equation whose roots are 2 and 3...
            let root1 = numbers[0];
            let root2 = numbers[1];
            let sum = root1 + root2;
            let product = root1 * root2;
            return [1, -sum, product]; // x² - (sum of roots)x + (product of roots) = 0
        } else {
            return null;
        }
    }

    // If coefficients are not entered, try to parse the word problem
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        if (wordProblem) {
            let coefficients = parseWordProblem(wordProblem);
            if (coefficients) {
                a = coefficients[0];
                b = coefficients[1];
                c = coefficients[2];
            } else {
                solutionDiv.innerHTML = "<p>Unable to parse the word problem. Please enter the coefficients manually.</p>";
                return;
            }
        } else {
            solutionDiv.innerHTML = "<p>Please enter the coefficients or a valid word problem.</p>";
            return;
        }
    }

    let discriminant = b * b - 4 * a * c;
    let sqrtDiscriminant = Math.sqrt(Math.abs(discriminant));

    let step1 = `Step 1: Write down the quadratic equation: ${a}x² + ${b}x + ${c} = 0`;
    let step2 = `Step 2: Identify coefficients: a = ${a}, b = ${b}, c = ${c}`;
    let step3 = `Step 3: Calculate the discriminant (Δ) using the formula Δ = b² - 4ac`;
    let step3Details = `Δ = (${b})² - 4(${a})(${c}) = ${b * b} - ${4 * a * c} = ${discriminant}`;
    let step4, step4Details, step5, step6;

    if (discriminant > 0) {
        let root1 = (-b + sqrtDiscriminant) / (2 * a);
        let root2 = (-b - sqrtDiscriminant) / (2 * a);

        step4 = `Step 4: Since the discriminant Δ > 0, the equation has two distinct real roots.`;
        step5 = `Step 5: Calculate the roots using the quadratic formula: x = (-b ± √Δ) / 2a`;
        step6 = `
            Root 1: x₁ = (-${b} + √${discriminant}) / (2 * ${a})<br>
            x₁ = (${(-b)} + ${sqrtDiscriminant.toFixed(2)}) / ${2 * a}<br>
            x₁ = ${root1.toFixed(2)}
            <br><br>
            Root 2: x₂ = (-${b} - √${discriminant}) / (2 * ${a})<br>
            x₂ = (${(-b)} - ${sqrtDiscriminant.toFixed(2)}) / ${2 * a}<br>
            x₂ = ${root2.toFixed(2)}
        `;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);

        step4 = `Step 4: Since the discriminant Δ = 0, the equation has one real repeated root.`;
        step5 = `Step 5: Calculate the root using the quadratic formula: x = -b / 2a`;
        step6 = `
            Root: x = (-${b}) / (2 * ${a})<br>
            x = ${root.toFixed(2)}
        `;
    } else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imaginaryPart = (sqrtDiscriminant / (2 * a)).toFixed(2);

        step4 = `Step 4: Since the discriminant Δ < 0, the equation has two complex roots.`;
        step5 = `Step 5: Calculate the roots using the quadratic formula: x = (-b ± √Δ) / 2a`;
        step6 = `
            Root 1: x₁ = ${realPart} + ${imaginaryPart}i<br>
            Root 2: x₂ = ${realPart} - ${imaginaryPart}i
        `;
    }

    solutionDiv.innerHTML = `
        <p>${step1}</p>
        <p>${step2}</p>
        <p>${step3}</p>
        <p>${step3Details}</p>
        <p>${step4}</p>
        <p>${step5}</p>
        <p>${step6}</p>
    `;
});

