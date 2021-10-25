
//! Nivell 1

//?  Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

const { sumar, resta,multiplicar, dividir, getEmpleado, getSalario, getEmploye, getEmployeDelay } = require('../app/app');

// test('1+3 igual 4', () => {
//   expect(sumar(1, 3)).toBe(4);
// });

// test('3+2 igual 1', () => {
//     expect(resta(3, 2)).toBe(1);
// });

// test('5*5 igual 25', () => {
//     expect(multiplicar(5, 5)).toBe(25);
// })

// test('25/5 igual 5', () => {
//     expect(dividir(25,5)).toBe(5);
// })

//? Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1

// test("id 1 => { id: 1, name: 'Linux Torvalds' }", async () => {

//     const result = await getEmpleado(1);
//     expect(result).toMatchObject({ id: 1, name: 'Linux Torvalds' })

// })

// test("id 1 => {id: 2,name: 'Bill Gates'}", async () => {

//     const result = await getSalario({ id: 2, name: 'Bill Gates'})
//     expect(result).toMatchObject({id: 2,salary: 1000})

// })

//? Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1

// test("id 1 => El empleado Linux Torvalds cobra 4000", async () => {

//     const result =  await getEmploye(1);
//      expect(result).toBe('El empleado Linux Torvalds cobra 4000');

// })

//? Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3

// test("Test Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises", async () => {
    
//     getEmpleado(1)
//     .then(employe => {  return getSalario(employe) })
//     .then(msg => expect(msg).toMatchObject({"id": 1, "salary": 4000}))
//     .catch(err => console.log(err))

// })

//? Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.

// jest.useFakeTimers();
// jest.spyOn(global, 'setTimeout');

// test('Test Async/Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers', () => {
    
//     getEmployeDelay(1)
//     expect(setTimeout).toHaveBeenCalledTimes(1);
//     expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 200);
    
// });


//! Nivell 2

//? Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
//? Utilitzant com a base l'exercici Async / Await Nivells 2 i 3, crea un test que forci errors de funcionament i verifiqui que l'error llançat per la funció és l'esperat.

