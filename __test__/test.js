
//! Nivell 1

//?  Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

const {sumar, resta,multiplicar, dividir, getEmpleado, getSalario, getEmploye} = require('../app/app');

// test('1+3 igual 4', () => {
//   expect(sumar(1, 3)).toBe(4);
// });

// test('3+2 igual 1', () => {
//     expect(resta(3, 2)).toBe(1);
// });

// test('5+5 igual 25', () => {
//     expect(multiplicar(5, 5)).toBe(25);
// })

// test('25/5 igual 5', () => {
//     expect(dividir(25,5)).toBe(5);
// })

//? Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1

// test("id 1 => { id: 1, name: 'Linux Torvalds' }", () => {

//     return getEmpleado(1).then(data => {
//         expect(data).toMatchObject({ id: 1, name: 'Linux Torvalds' })
//     });

// })

// test("id 1 => {id: 2,name: 'Bill Gates'}", () => {

//     return getSalario({ id: 2, name: 'Bill Gates'}).then(data => {
//         expect(data).toMatchObject({id: 2,salary: 1000})
//     });

// })

test("id 1 => El empleado Linux Torvalds cobra 4000", () => {

    return getEmploye(1).then(data => {
         expect(data).toBe('El empleado Linux Torvalds cobra 4000');
    });

})

getEmploye(1);