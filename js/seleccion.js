const seleccion = document.getElementById("seleccion");

function agregar(grupos){
    for (let index = 0; index < grupos.length; index++) {
        const op = document.createElement('option');
        op.value = index;
        op.text= grupos[index][0].grupo;
        seleccion.add(op);
    }

}

agregar(grupos);
