describe('array', function(){
     it('arrayTestForVariable', function(){
          const names: string[] = ["loko", "wido", "toro"];
          const ages: number[] = [56, 17, 20]

          console.info(names);
          console.info(ages)
     });

     it('should support readonly array', function() {
          const playingGame: ReadonlyArray<string> = ["pubgm","hok", "ml" ]

          console.info(playingGame)

          //playingGame[0] = "testingNot"
     });

     it('array is same is tuple  but different', function(){
          const person: readonly [string, number, boolean] = ["khairul", 17, false]

          console.info(`name: ${person[0]}, age: ${person[1]}, married ${person[2]}`)
     });
});