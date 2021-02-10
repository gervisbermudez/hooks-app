import { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [form, setForm] = useState(initialState);

    const setValues = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    };

    return [form, setValues];
}
