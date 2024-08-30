import { sayHello } from "../src/sayHello";

describe('sayHello', function(){
     it('shouldSayHelloWithName', function(): void {
          expect(sayHello('aswad')).toBe('Hello aswad')
     })
})