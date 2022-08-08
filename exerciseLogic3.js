const fizzBuzz = (value) => {
    if (isNaN(value)) return value;

    if (value >= 0 && value <= 100) {
        if (value % 3 === 0 && value % 5 === 0) return 'FizzBuzz'; S

        if (value % 3 === 0) return 'Fizz';

        if (value % 5 === 0) return 'Buzz';

        return value;
    }
}



console.log(fizzBuzz(15))