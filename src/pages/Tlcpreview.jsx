import React from 'react'
import ReactPlayer from 'react-player'
import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senales } from "./estilosJS/Senales";
import { Contenedor_Senal } from './estilosJS/Contenedor_Senal';

const Tlcpreview = () =>{
    return <div>
        <Contenedor_Senales>  
		    <Contenedor_Senal>
            <ReactPlayer controls muted playing   position="absolute" object-fit="fill" url='https://stream-gtlc.telecentro.net.ar/hls/telecentropreviewhls/main.m3u8' />					
            </Contenedor_Senal>
        </Contenedor_Senales>
    </div>
   }   
   export default Tlcpreview;