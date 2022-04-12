//test suite -> many tests ->test suite
//test suite is a collection of related tests

xdescribe('calculator.js', function(){

    let calculator;
    let calculator2;
    beforeEach(function(){
        calculator = new Calculator()
        calculator2 = new Calculator()
    })
    afterEach(function(){
        calculator = null;
        calculator2 = null;
    })
    
    describe('calculator', function(){
        it('should add numbers to total', function(){
            // const calculator = new Calculator()
            calculator.total = 10
            calculator.add(5)

            expect(calculator.total).toBe(15)
        })
        it('should subtract numbers to total', function(){
            // const calculator = new Calculator()
            calculator.total = 10
            calculator.subtract(5)

            expect(calculator.total).toBe(5)
        })
        it('should divide numbers to total', function(){
            // const calculator = new Calculator()
            calculator.total = 100
            calculator.subtract(2)

            expect(calculator.total).not.toBe(5)
        })
        it('it should initialize total to 0', function(){
            // const calculator = new Calculator()
            expect(calculator.total).toBe(0)
            expect(calculator.total).toBeFalsy()
        })
        it('has constructor', function(){
            // const calculator = new Calculator()
            // const calculator2 = new Calculator()

            calculator.total = 200
            calculator2.total = 200
           
            expect(calculator).toEqual(calculator2)
        })
        it('can be instantiated', function(){
            // const calculator = new Calculator()
            // const calculator2 = new Calculator()

            expect(calculator).toBeTruthy()
            expect(calculator2).toBeTruthy()
        })
        it('has common operations', function(){
            // const calculator = new Calculator()
            
            expect(calculator.exponent).toBeUndefined();
            expect(calculator.add).toBeDefined();
            
        })
        it('can overwrite total', function(){
            // const calculator = new Calculator()
            
            calculator.total = null
            expect(calculator.total).toBeNull();

            expect(calculator.constructor.name).toContain("Calc")
        })
        it('toBeNaN()', function(){
            // const calculator = new Calculator()
            
            calculator.total = 10
            calculator.multiply('a')

            expect(calculator.total).toBeNaN();
        })
        it('handles divide by zero', function(){
            const calculator = new Calculator()
            calculator.total = 10

            expect(function(){calculator.divide(0)}).toThrow();
            expect(function(){calculator.divide(0)}).toThrowError(Error);
            expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero');
        })
        it('returns total', function(){
            // const calculator = new Calculator()
            calculator.total = -50

            expect(calculator.add(20)).toBe(-30);
            expect(calculator.total).toMatch(/-?\d+/);
            expect(typeof calculator.total).toMatch('number');

            expect(typeof calculator.total).toEqual(jasmine.anything())

        })

    })
})