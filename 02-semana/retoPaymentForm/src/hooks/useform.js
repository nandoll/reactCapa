import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {
        const isCheckbox = target?.type === 'checkbox'
        setValues({
            ...values,
            [ target.name ]: isCheckbox ? target.checked : target.value          
        });

    }

    return [ values, handleInputChange, reset ];

}