import React from 'react';
import { css } from '@emotion/react';

const Error404 = () => {
    return ( <h1
                css={css`
                    margin-top: 5rem;
                    text-align: center;
                `}
            >No se puede acceder a la página</h1> );
}
 
export default Error404;