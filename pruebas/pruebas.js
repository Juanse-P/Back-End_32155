//Sincronismo: Ejecuta tarea por tarea esperando que acabe una para seguir con la otra.

/* const delaySincronico = (ret) => {
    for (let i = 0n; i < 40000000n; i++);
};

function hacerTareaSincronicamente(num) {
    console.log(new Date(), 'Haciendo Tarea', num);
    delaySincronico(100);
    console.log(new Date(), 'Tarea', num, 'finalizada');

}

console.log('Inicio Tareas');
hacerTareaSincronicamente(1);
hacerTareaSincronicamente(2);
hacerTareaSincronicamente(3);
hacerTareaSincronicamente(4);
console.log('Fin Tareas');
console.log('Otras Tareas'); */

//Asincronidmo: Se ejecuta una función y mientras esta responde las demas tambien se van ejecutando.

/* const delayASincronico = (timeDelay, f) => {
    setTimeout(f, timeDelay)
  };
  
  function hacerTareaASincronicamente(num) {
    console.log(new Date(), 'Haciendo Tarea', num);
    delayASincronico(100, () => console.log(new Date(), 'Tarea', num, 'finalizada'));
  }
  
  console.log('Inicio Tareas');
  hacerTareaASincronicamente(1);
  hacerTareaASincronicamente(2);
  hacerTareaASincronicamente(3);
  hacerTareaASincronicamente(4);
  console.log('Fin Tareas');
  console.log('Otras Tareas'); */