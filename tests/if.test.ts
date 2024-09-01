describe('If', function () {
     it('should can use if statement', function () {
          
          const nilaiUlangan = 90;

          if (nilaiUlangan >= 90 && nilaiUlangan <= 100) {
               console.info("anda telah lulus");
          } else if (nilaiUlangan >= 80 && nilaiUlangan <= 89) {
               console.info("grade b")
          } else {
               console.info("grade C")
          }
     });

     it('should can use ternary operator', function () {
          const examValue = 90;

          const say: string = examValue < 90 ? "Baguss kamu Hebat" : "TOlol";

          function calculateExam(value: number): string {
               return value >=75 ? "Bgauss Kamu LULUS" : "Kamu tidak masuk kriteria kami"
          }

          console.info(calculateExam(90))
          console.info(say)
     });

     it('chould can use swittch statement', function () {

          function sayHelloToMe(name: string): string {
               switch (name) {
                    case "aswad" :
                         return "hello aswad";
                    case "khairul" :
                         return "Hello Khairul";
                    default :
                         return "Hello Disana";
               }
          };

          console.info(sayHelloToMe("aswad"));
          console.info(sayHelloToMe("khairul"));
          console.info(sayHelloToMe("def"))
     });
});