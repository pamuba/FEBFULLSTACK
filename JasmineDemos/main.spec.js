describe('main.js', function(){
    describe('calculate', function(){
        it('validate expression', function(){
            spyOn(window,'updateResult').and.stub();
            calculate('3+a')
            calculate('3*a')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized') 
            expect(window.updateResult).toHaveBeenCalledTimes(2) 
        })
        it('call add', function(){
            spyOn(Calculator.prototype, 'add');
            calculate('3+4')
            expect(Calculator.prototype.add).toHaveBeenCalledTimes(2) 
        })
        it('call add', function(){
            spyOn(window,'updateResult').and.stub();
            const spy = spyOn(Calculator.prototype, 'multiply');
            const spy1 = spyOn(Calculator.prototype, 'add');
            
            //total = 3 (add)
            calculate('3*4')

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(4) 
            expect(spy1).toHaveBeenCalledWith(3) 
            expect(window.updateResult).toHaveBeenCalled();
            // expect(window.updateResult).toHaveBeenCalledWith(12) 
            expect(spy).toHaveBeenCalledTimes(1) 
        })
        it('callThrough', function(){
            spyOn(window,'updateResult').and.stub();
            const spy = spyOn(Calculator.prototype, 'multiply').and.callThrough();
            const spy1 = spyOn(Calculator.prototype, 'add').and.callThrough();
            
            //total = 3 (add)
            calculate('3*4')

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(4) 
            expect(spy1).toHaveBeenCalledWith(3) 
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(12) 
            expect(spy).toHaveBeenCalledTimes(1) 
        })
        it('calls updateResult using and.callFake()', function(){
            spyOn(window,'updateResult').and.stub();
            const spy = spyOn(Calculator.prototype, 'multiply').and.callFake(function(){
                //
                //
                return 100
            });

            calculate('5*5')
            expect(window.updateResult).toHaveBeenCalled()
            expect(window.updateResult).toHaveBeenCalledWith(100)

        })
        it('calls updateResult using and.returnValue()', function(){
            spyOn(window,'updateResult').and.stub();
            const spy = spyOn(Calculator.prototype, 'multiply').and.returnValue('whatever it returns')

            calculate('5*5')
            expect(window.updateResult).toHaveBeenCalled()
            expect(window.updateResult).toHaveBeenCalledWith('whatever it returns')

        })
        it('doesnt handle errors', function(){
            spyOn(Calculator.prototype, 'multiply').and.throwError('some error')

            expect(function(){calculate('5*5')}).toThrowError('some error')
        })

    })
})