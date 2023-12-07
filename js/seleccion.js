const seleccion = document.getElementById("seleccion");

function agregar(grupos){
    for (let i = 0; i < grupos.length; i++) {
        const op = document.createElement('option');
        op.value = i;
        op.text= grupos[i][0].grupo;
        seleccion.add(op);
    }

}

agregar(grupos);
