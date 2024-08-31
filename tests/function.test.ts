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
});