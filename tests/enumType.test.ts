import { InGameLevel, Player } from "../src/enumType"

describe('EnumType', function() {
     it('should support enum type', function () {


          const alok: Player = {
               id: "alok-slug",
               name: "alok bin wukong",
               level: InGameLevel.GOLD
          }

          console.info(alok)
     })
})