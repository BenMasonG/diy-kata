const getEmployerRole = (employeeName, employees) => {
    let x = []

    employees.forEach(function(o){
        if (o.name === employeeName) x.push(o.role);} );

        return x.toString()
    };



module.exports = getEmployerRole;
