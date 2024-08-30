describe('UnionType', function(){

     it('should can use union type', function(){
          let sample: number | string | boolean = 1;

          sample = "ini string";

          sample = true

          console.info(sample)
     });

     it('should return typeof data', function() {
          function processData(value: string | number | boolean) {
               if (typeof(value) === "string") {
                    return value.toUpperCase();
               } else if (typeof(value) === "number") {
                    return value + 1;
               } else {
                    return !value;
               }
          }

          expect(processData("aswad")).toBe("ASWAD");
          expect(processData(4)).toBe(5);
          expect(processData(false)).toBe(true);
     });
});