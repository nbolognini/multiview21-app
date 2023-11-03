import React from 'react'
import ReactPlayer from 'react-player'
import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { ContenedorM } from "./estilosJS/ContenedorM";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senal_telemax } from './estilosJS/Senal_telemax';

const Telemax = () =>{
    return <div>  
		<ContenedorM>	
			<Contenedor_Senales>
				<Senal_telemax>
					<Titulo>
						Telemax<br></br>
						HLS (nebula)<br></br><br></br>
						<ReactPlayer controls muted playing={true} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telemaxhls/main.m3u8' />					</Titulo>
				</Senal_telemax>
				<Senal_telemax>
					<Titulo>
                        Telemax<br></br>
						HLS (wowza)<br></br><br></br>
						<ReactPlayer controls muted playing={true} width="264" height="198"   url='https://live-edge01.telecentro.net.ar/live/smil:tlx.smil/playlist.m3u8' />					</Titulo>
				</Senal_telemax>
			</Contenedor_Senales>
		</ContenedorM>	


        </div>
   }   
   export default Telemax;