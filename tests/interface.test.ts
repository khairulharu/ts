import { Char, Hero, UpdatedHero } from "../src/hero"

describe('Interface', function() {

     it('should support interface data type', function () {
          const Alok: Hero = {
               id: 2,
               name: "Alok",
               skill: true,
               pasif: "nyala", 
               nib: "hhgitnnvbdj",
               npwp: "sifnsifbnnc",
          };

          const Ling: UpdatedHero = {
               id: 2,
               name: "Alok",
               skill: true,
               pasif: "nyala", 
               nib: "hhgitnnvbdj",
               npwp: "sifnsifbnnc",
               jungleEarning: 100
          };

          console.info(Alok);

          console.info(Ling);
     })

     it('should can use function on interface', function() {
          interface CalculateLocation {
               (isFarLocation: number, ipLocation: number): number
          }

          const resultAdd: CalculateLocation = (isFarLocation: number, ipLocation: number): number => {
               return isFarLocation + ipLocation;
          }

          expect(resultAdd(2, 2)).toBe(4)
     })

     it('should support indexable interface', function () {
          
          interface StringArray {
               [index: number]:string
          }

          const listsBacaan: StringArray = ["the money walking", "suspicous starnger"]

          console.info(listsBacaan)

     })

     it('should support like map on array', function () {
          interface StringDictionMap {
               [key: string]: string
          }

          const mapper: StringDictionMap = {
               pergi: "go",
               datang: "come",
               belajar: "learn"
          }

          console.info(mapper['pergi'])
          console.info(mapper['belajar'])
     })

     it('should support funtcion in interface', function () {
          interface Pedang {
               name: string;
               ketajaman: string;
               Tampilkan(name: string, ketajaman: string): string
          }

          const arif: Pedang = {
               name: "luku",
               ketajaman:"lumayan",
               Tampilkan: function (name: string, ketajaman: string): string {
                    return ` ${this.name} Mengatakan, Pedang ${name} memiliki ketajman ${ketajaman}`
               }
          }

          console.info(arif.Tampilkan("metero", "tidak lumayan"))

     })

     it('should supprt intersection type', function () {
          
          interface Kaluku {
               name: string;
          }

          interface Semangka {
               serat: string;
          }

          //ini adalah cara agar bisa menggunakan interface dengan tipe data lainnya

          type BuahBerair = Kaluku & Semangka;

          const buahAir: BuahBerair = {
               name: "kaluku",
               serat: "iya"
          }

          console.info(buahAir)
     })

     it('should support type assertion', function () {

          //konversi tipe data object ke dalam sebuah interface 
          //dengan sayarat interface nya itu harus sama dengan yang di banding kan
          //karena jika tidak saat kita memakai datanya itu akan error
          

          //misalkan jika terdapat sebuah function atau kita ngecall sebuah api yang return nya itu object any
          //lalu kita ingin mengubah dia ke dalam sebuah interface agar static type biar lebih mudah ngodingnya

          const responseGetChar: any = {
               name: "eko",
               eko: "ekoooo"
          }

          //misalkan caranya di sini mudah yitu kita hanya perlu membuat sebuah interface yang mirip dengan return nya
          //jadi kita bisa menyimpan response tersebut sesuai dengan interface yang kita buat atau mengikuti response yang kita buat.
          const realCharacter: Char = responseGetChar as Char;

          console.info(realCharacter.eko)
     })
})