import React from 'react'
import ReactPlayer from 'react-player'
import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senales } from "./estilosJS/Senales";
import { Senal_tierramia } from './estilosJS/Senal_tierramia';

const Tierramia = () =>{
    return <div>  
		<Contenedor>	
			<Contenedor_Senales>
				<Senal_tierramia>
					<Titulo>
						TierraMia
						<br></br>
						HLS (nebula)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/tierramiahls/main.m3u8' />					
                    </Titulo>
				</Senal_tierramia>
				<Senal_tierramia>
					<Titulo>
						TierraMia
						<br></br>
						HLS (wowza)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='http://live-edge01.telecentro.net.ar/live/smil:trm.smil/playlist.m3u8' />					
                    </Titulo>
				</Senal_tierramia>
			</Contenedor_Senales>
		</Contenedor>	
    </div>
   }   
   export default Tierramia;