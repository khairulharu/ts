describe('For', function () {

     it('should can use for i in typescript', function () {

          const names: string[] = ["aswad", "alok", "kami", "dia"]

          for (let i = 0; i < names.length; i++) {
               console.info(`Ini adalah loop ke ${names[i]} di index ${i}`)
          }
     });

     it('shold can use for of', function () {

          const names: string[] = ["aswad", "alok", "kami", "dia"]

          for (const name of names) {
               console.info(name)
          }
     });

     it('should can use for in', function () {

          const names: string[] = ["aswad", "alok", "kami", "dia"]

          for (const index in names) {
               console.info(index)
          }
     });

     it('should can append arrat to new array', function () {

          const names: string[] = ["aswad", "alok", "kami", "dia"];

          const namings: string[] = []

          for (const name of names) {
               namings.push(name)

               console.info(name)
          }

          console.info(namings)
     })
})