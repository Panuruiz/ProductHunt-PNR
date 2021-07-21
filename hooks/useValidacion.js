import React, {useState, useEffect} from 'react';


const useValidacion = (stateInicial, validar, fn) => {

    const [valores, guardarValores] = useState(stateInicial);
    const [errores, guardarErrores] = useState({});
    const [submitform, guardarSubmitForm] = useState(false);

    useEffect(() => {
        if(submitform) {
            const noErrores = Object.keys(errores).length === 0;
            if(noErrores) {
                fn(); // fn = Función que se ejecuta en el componente
            }
            guardarSubmitForm(false);
        }
        
    }, [errores]);

    // Funcion que se ejecuta conforme el usuario escribe algo
    const handleChange = e => {
        guardarValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    // Funcion que se ejecuta cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    }

    // Cuando se realiza el evento de blur
    const handleBlur = () => {
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
    }

    return {
        valores,
        errores,
        handleSubmit,
        handleChange,
        handleBlur
    }
}
 
export default useValidacion;