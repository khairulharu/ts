describe('While Loop', function () {
     it('should can use while loop', function () {
          let age: number = 0

          while (age < 10) {
               console.info(age)
               age++
          }

     });

     it('should can use do while loop', function () {
          let conter: number = 0;

          do {
               console.info(conter);
               conter++;
          } while(conter < 10)
     });

     it('should can use break and continue', function () {
          let counter = 0;

          do {
               counter++;

               if (counter == 5) {
                    break;
               }

               if (counter % 2 == 0) {
                    continue;
               }

               console.info(counter)
          } while(true)
     });
});