import { Hero } from "../src/hero"

describe('Interface', function() {

     it('should support interface data type', function () {
          const Alok: Hero = {
               id: 2,
               name: "Alok",
               skill: true,
               pasif: "nyala" 
          }

          console.info(Alok)
     })

})