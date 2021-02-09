import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {

    const [form, setForm] = useState({
        email: '',
        name: ''
    });

    const { email, name } = form;

    useEffect(() => {
        console.log("Hey!");
    }, []);


    const handleInputChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    };

    return (
        <div className="container">
            <h1>useEffect</h1>

            <div className="form-group">
                <input type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    className="form-control"
                    value={name}
                    onChange={handleInputChange}

                />

                <input type="email"
                    name="email"
                    placeholder="email"
                    autoComplete="off"
                    className="form-control"
                    value={email}
                    onChange={handleInputChange}

                />
            </div>
        </div>
    );
}
