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

     it('should can support function overloading', function () {
          function callMe(value: number): number;
          function callMe(value: string): string;
          //implementasion of this overloading function
          function callMe(value: any): any {
               if (typeof value === "string") {
                    return `Hello ${value}`;
               }else{
                    return value + 2;
               }
          }

          expect(callMe("aswad")).toBe("Hello aswad");
          expect(callMe(100)).toBe(102);
     });

     it('should can use function as parameter', function () {
          function showYourKDA(kda: number, calculate: (value: number) => number){
               return calculate(kda)
          }

          function kdaCalculate(kda:number): number {
               return kda - 0.5;
          }
          
          expect(showYourKDA(4, kdaCalculate)).toBe(3.5);

          expect(showYourKDA(6, function (value: number): number {
               return value - 2;
          })).toBe(4)

          expect(showYourKDA(3, (value: number): number => value + 3)).toBe(6);
          
          expect(showYourKDA(5, (kda: number): number => kda + 5)).toBe(10);
     });
});