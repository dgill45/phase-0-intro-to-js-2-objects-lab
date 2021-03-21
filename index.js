// Write your solution in this file!
const employee = {
    name: "Harold Wheeler",
    streetAddress: '123 Maple Road'
};

function updateEmployeeWithKeyAndValue(employee, streetAddress, value){

    const newEmployee = {... employee};

    newEmployee[streetAddress] = "11 Broadway";

    return newEmployee;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, streetAddress, value);

newEmployee.streetAddress();

employee.streetAddress();


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee.name = "Sam";

    employee.streetAddress = "12 Broadway"

    return employee;
}


    let deletedEmployee = Object.assign({}, employee[key], value);

function deleteFromEmployeeByKey(deletedEmployee, key){

    delete deletedEmployee.name;

    return deletedEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee.name;

    return employee;
}