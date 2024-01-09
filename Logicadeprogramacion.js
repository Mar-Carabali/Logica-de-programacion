
    let Alumno = prompt('Ingresa el nombre del alumno:');


    let materia = prompt("Ingresa la materia:");


    let nota1 = Number(prompt("Ingresa la primera nota:"));
    if (nota1 >= 0 && nota1 <= 10) {
        
        let nota2 = Number(prompt("Ingresa la segunda nota:"));
        if (nota2 >= 0 && nota2 <= 10) {
        
            let nota3 = Number(prompt("Ingresa la tercera nota:"));
            if (nota3 >= 0 && nota3 <= 10) {
            
                let promedio = (nota1 + nota2 + nota3) / 3;

                // Evaluamos si el promedio es mayor o igual a 7
                if (promedio >= 7) {
                    console.log(`${Alumno}, ¡felicidades! Has aprobado en ${materia} con un promedio de ${promedio.toFixed(2)}.`);
                } else {
                    console.log(`${Alumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido en ${materia} es ${promedio.toFixed(2)}.`);
                }
            } else {
                console.log("Por favor, ingresa una tercera nota válida en el rango de 0 a 10.");
            }
        } else {
            console.log("Por favor, ingresa una segunda nota válida en el rango de 0 a 10.");
        }
    } else {
        console.log("Por favor, ingresa una primera nota válida en el rango de 0 a 10.");
    }
