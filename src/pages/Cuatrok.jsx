import React from 'react'
import ReactPlayer from 'react-player'
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Contenedor_Senal } from './estilosJS/Contenedor_Senal';

const Cuatrok = () =>{
    return <div>
        <Contenedor_Senales>  
		    <Contenedor_Senal>
            <ReactPlayer controls muted playing   position="absolute" object-fit="fill" url='https://stream-gtlc.telecentro.net.ar/hls/telecentro4khls/main.m3u8' />					
            </Contenedor_Senal>
        </Contenedor_Senales>
    </div>
   }   
   export default Cuatrok;