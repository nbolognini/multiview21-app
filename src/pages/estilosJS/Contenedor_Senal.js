import styled from 'styled-components'
import img1 from '../img/img1.jpg';

export const Contenedor_Senal = styled.div`
/* Grid */
width: 200%;
position: center;
display: grid;
grid-template-columns: repeat(1, 4fr);
gap: 10px;
border-radius: 10px;
background-image: url(${img1});
`