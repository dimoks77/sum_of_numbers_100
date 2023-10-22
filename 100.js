function checkExpression(expression) {
    return eval(expression) === 100;
}

function generateCombinations() {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operators = ['+', '-', '*', '/'];
    const combinations = [];

    for (let a of numbers) {
        for (let b of operators) {
            for (let c of numbers) {
                for (let d of operators) {
                    for (let e of numbers) {
                        for (let f of operators) {
                            for (let g of numbers) {
                                for (let h of operators) {
                                    for (let i of numbers) {
                                        const expression = `${a}${b}${c}${d}${e}${f}${g}${h}${i}`;
                                        combinations.push(expression);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return combinations.filter(checkExpression);
}

const result = generateCombinations();
console.log(result);
