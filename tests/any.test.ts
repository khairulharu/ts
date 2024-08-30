describe('Any', function () {
   it('should support in typescript', function(){
     const person: any = {
          id: 1,
          name: "goro",
          age: 367
     };

     person.age = 45;

     person.address = "komodo";

     console.info(person);
   });  
});