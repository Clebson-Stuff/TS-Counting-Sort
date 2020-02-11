import {Countingsort} from './Countingsort';
let sort = new Countingsort();

test('Teste ordenação',()=>{
    let arrDesordenado = [9,6,5,3,1,2];
    let arrOrdenado = [1,2,3,5,6,9];
    expect(sort.sort(arrDesordenado)).toBe(arrOrdenado);
});
