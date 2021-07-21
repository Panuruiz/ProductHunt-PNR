import React, { Fragment, useContext } from "react";
import { FirebaseContext } from "../../firebase";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Boton from "../ui/Boton";

const HeaderPadre = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid var(--gris3);
  padding: 1.5rem 0;
  min-height: 160px;
`;

const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  min-height: 140px;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const { usuario, firebase } = useContext(FirebaseContext);

  return (
    <HeaderPadre>
      <ContenedorHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href="/">
            <Logo>P</Logo>
          </Link>

          <Buscar />
          <Navegacion />
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {usuario ? (
            <Fragment>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >
                Hola {usuario.displayName}
              </p>
              <Boton bgColor="true" onClick={() => firebase.cerrarSesion()}>
                Cerrar Sesión
              </Boton>
            </Fragment>
          ) : (
            <Fragment>
              {/* eslint-disable-next-line @next/next/link-passhref */}
              <Link href="/login">
                <Boton bgColor="true">Iniciar Sesión</Boton>
              </Link>
              {/* eslint-disable-next-line @next/next/link-passhref */}
              <Link href="/crear-cuenta">
                <Boton>Crear Cuenta</Boton>
              </Link>
            </Fragment>
          )}
        </div>
      </ContenedorHeader>
    </HeaderPadre>
  );
};

export default Header;
