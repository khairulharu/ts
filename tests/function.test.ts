describe('Function', function () {
     
     it('should can use function to', function () {

          function sayHelloWithName(name: string): string {
               return `Hello ${name}`
          }

          expect(sayHelloWithName("aswad")).toBe("Hello aswad");

          function printToConsole(name: string): void {
               console.info(name)
          }

          printToConsole("khairul Aswad")
     });

     it('should can use default parameter on function', function () {

          function sayHello(name: string = "Guest"):string {
               return `Hello ${name}`
          }

          expect(sayHello()).toBe("Hello Guest")
          expect(sayHello("khairul")).toBe("Hello khairul")
     });

     it('should support support rest parameter', function () {
          function sum(...values: number[]): number {
               let total: number = 0

               for (const value of values) {
                    total += value;
               }

               return total;
          }

          expect(sum(1, 2, 3, 4)).toBe(10);
     });

     it('should can use optional parameter', function () {

          function sayMyName(firstName: string, lastName?: string) : string {

               if(lastName) {
                    return `Hello ${firstName} ${lastName}`;
               }else{
                    return `Hello ${firstName}`;
               }
          }

          expect(sayMyName("Khairul")).toBe("Hello Khairul")
          expect(sayMyName("Khairul", "Aswad")).toBe("Hello Khairul Aswad")
     });
});