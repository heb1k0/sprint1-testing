//? Nivell 1

// Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.


sumar = (a, b) =>{
    return a + b;
}
resta = (a,b) =>{
    return a-b;
}
multiplicar = (a,b) =>{
    return a*b;
}

dividir = (a,b) =>{
    return a/b;
}

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let employee = employees.find(empleado => empleado['id']==id)
        if (employee) {
            resolve(employee)
        } else {
            reject('No existe el empleado en employees')
        }     
    }) 
} 

let getSalario = (employe) =>{


    return new Promise((resolve, reject) =>{

        if(employe === undefined){
            reject('No existe el empleado')
        }

        let searchSalary = salaries.find(salary => salary['id'] == employe.id)

        if(searchSalary){
            resolve(searchSalary)
        }else{
            reject('No existe el empleado en salaries')
        }

    })
}


async function getEmploye (id){
    let empleado = await getEmpleado(id);
    let salary = await getSalario(empleado);
    // console.log(`El empleado ${empleado.name} cobra ${salary.salary}`) 
    return `El empleado ${empleado.name} cobra ${salary.salary}`;
} 

async function getDelaty(id){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                 let resultEmpleado = getEmploye(id);
                 resolve(resultEmpleado)
            }catch(err){
                 reject(err);
            }
           

        },200)
    })

}

async function getEmployeDelay(id){

    try{
        return await getDelaty(id); 
    } catch (err){
        return err
    }

 }



module.exports = {sumar, resta,multiplicar, dividir, getEmpleado, getSalario, getEmploye, getEmployeDelay};