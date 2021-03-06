import React from 'react';
import useProductos from '../hooks/useProductos';

import Layout from '../components/layout/Layout';
import DetallesProducto from '../components/layout/DetallesProducto';


const Home = () => {

  const {productos} = useProductos('creado');

  return ( 
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {productos.map(producto => (
                // eslint-disable-next-line react/jsx-key
                <DetallesProducto 
                  key={producto.id}
                  producto={producto}
                />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
   );
}
 
export default Home;
