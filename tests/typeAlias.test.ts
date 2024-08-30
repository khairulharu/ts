import { AccountGame, Character} from "../src/typeAlias";

describe('TypeAlias', function () {
   it('should can use type for data', function () {

     const defaultChar: Character = {
          id: "char-alok",
          name: "alok",
          hp: 50
     };

     const Alok: AccountGame = {
          id: 10,
          name: "alok",
          char: defaultChar
     };

     expect(Alok.char.name).toBe(Alok.name);
     expect(Alok.id).toBe(10);
     expect(Alok.char.hp).toBe(50); 

   });

   it('should can use type aliasn on union data type', function(){

     //this id actually can use two tipe of data can use id type sttring type id number

     const defaultChar: Character = {
          id: "char-alok",
          name: "alok",
          hp: 50
     };

     const Alok: AccountGame = {
          id: "char-alok",
          name: "bili bili",
          char: defaultChar
     };
     
     function processDataAlias(value: AccountGame | Character) {
          return `Name Of Your Account Is: ${value.name}`
     };

     expect(Alok.id).toBe(defaultChar.id)
     console.info(processDataAlias(defaultChar))

   });

});