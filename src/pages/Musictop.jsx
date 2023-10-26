import React from 'react'
import ReactPlayer from 'react-player'
import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senales } from "./estilosJS/Senales";
import { Senal_musictop } from './estilosJS/Senal_musictop';

const Musictop = () =>{
    return <div>  
		<Contenedor>	
			<Contenedor_Senales>
				<Senal_musictop>
                    <Titulo>
						MusicTop
						<br></br>
						HLS (nebula)<br></br><br></br>
                        <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/musictophls/main.m3u8' />					
                    </Titulo>
				</Senal_musictop>
				<Senal_musictop>
                    <Titulo>
						MusicTop
						<br></br>
						HLS (wowza)<br></br><br></br>
                        <ReactPlayer controls muted playing width="264" height="198"   url='http://live-edge01.telecentro.net.ar/live/smil:musictop.smil/playlist.m3u8' />					
                    </Titulo>
				</Senal_musictop>
			</Contenedor_Senales>
		</Contenedor>	
    </div>
   }   
   export default Musictop;