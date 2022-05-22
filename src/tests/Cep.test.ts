import {consultaApi} from '../models/Cep';

let data:any;
describe('testing consultaApi function',()=>{
    
    test('Verificar consulta de cep', () =>{
        expect(data=consultaApi("66053240")).toEqual(consultaApi("66053240"));
    });

});