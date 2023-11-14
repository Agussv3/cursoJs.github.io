(async() =>{
    const {value: pais} = await Swal.fire({
        title: 'bienvenido!',
        text: 'Selecciona tu pais',
        icon: 'question',
        confirmButtonText:'Seleccionar',
        backdrop: 'true',
        position:'center',
        allowOutsideClick:'false',
        allowEscapeKey:'false',
        allowEnterKey:'false',
        stopKeydownPropagation:'false',
        // entrada de informacion
        input:'select',
        inputPlaceholder:'pais',
        //inputValue:,
        inputOptions:{
            mexico: 'Mexico',
            Españá:'España',
            Argentina:'Argentina',
            Ecuador:'Ecuador',
        },
        
    })
    if (pais){
        Swal.fire({
            title:'Bienvenido!'
        });
    }
})()

