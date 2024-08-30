describe('Object', function () {
     it('should suppport in typescript', function () {

          const person: {id: number, address: string, isFull: boolean, hobbies?: string} = {
               id: 2,
               address: "kaluku",
               isFull: false
          };

          console.log(person.address)
          console.log(person.isFull)
          console.log(person.id)
     });
});