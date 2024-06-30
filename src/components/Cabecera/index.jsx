import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderStilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`

const Cabecera = () => {
    return <HeaderStilizado>
        <img src="imagenes/logo.png" alt="Logo de Space App"/>
        <CampoTexto />
    </HeaderStilizado>
}

export default Cabecera