import React, { useEffect, useState } from 'react';

import { useForm } from '../hooks/useForm'

export const SimpleForm = () => {

    const [form, handleInputChange] = useForm({
        email: '',
        name: '',
        password: '',
    });

    const { email, name, password } = form;

    return (
        <form className="container">
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
            </div>
            <div className="form-group">
                <input type="email"
                    name="email"
                    placeholder="email"
                    autoComplete="off"
                    className="form-control"
                    value={email}
                    onChange={handleInputChange}

                />
            </div>
            <div className="form-group">
                <input type="password"
                    name="password"
                    placeholder="password"
                    autoComplete="off"
                    className="form-control"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
        </form>
    );
}
