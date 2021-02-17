import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'

export const MultipleCustomHooks = () => {

    const { state, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const { author, quote } = !!data && data[0];

    console.log(data);

    return (
        <div className="container">
            <h1>MultipleCustomHooks</h1>
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : <p>
                    {author} <br />
                    {quote}
                    <br />
                    <hr />
                    <button className="btn btn-primary" onClick={() => increment(1) }>Siguiente</button>
                </p>
            }
        </div>
    )
}
