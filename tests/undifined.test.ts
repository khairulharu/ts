describe('Undifined', function () {

  it('should supprt undifined value', function () {
    
    //ini adalah optional data type menggunanakn null

    //jika optional dibuat dan tidak di isi datanya maka valuenya adala undifined
     function sayHello(name?: string | null) {
          if (name) {
            console.info(`Hello ${name}`);
          } else {
            console.info("HELL NAH");
          }
        }

     sayHello("Aswad");

     const name: string | undefined = undefined;

     sayHello(name);

     sayHello(null)

  });

});
