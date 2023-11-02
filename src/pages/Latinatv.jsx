import React from 'react'
import ReactPlayer from 'react-player'
import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senales } from "./estilosJS/Senales";
import { Senal_latinatv } from './estilosJS/Senal_latinatv';
import { Senal_vacio } from './estilosJS/Senal_vacio';

const Latinatv = () =>{
    return <div>  
		<Contenedor>	
			<Contenedor_Senales>
				<Senal_latinatv>
					<Titulo>
						LatinaTV
						<br></br>
						HLS (nebula)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/latinatvhls/main.m3u8' />					
                    </Titulo>
				</Senal_latinatv>
				<Senal_latinatv>
					<Titulo>
						LatinaTV
						<br></br>
						HLS (wowza)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='http://live-edge01.telecentro.net.ar/live/smil:rltn.smil/playlist.m3u8' />					
                    </Titulo>
				</Senal_latinatv>
				<Senal_latinatv>
					<Titulo>
                        LatinaTV
						<br></br>
						(Twitch)
							<iframe
    							src="https://player.twitch.tv/?channel=radiolatina1011&parent=multiview.telecentro.net.ar&muted=true"
    							height="198"
    							width="264"
    							allowfullscreen>
							</iframe>
					</Titulo>
				</Senal_latinatv>
				<Senal_vacio>
					<Titulo> 
						<br></br>			
					</Titulo>
				</Senal_vacio>
				<Senales>
					<Titulo>
						RadioLatina
						<br></br>
						Audio (nebula) <br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/radiolatinahls/main.m3u8' />					
                    </Titulo>
				</Senales>
                <Senales>
					<Titulo>
                        RadioLatina
						<br></br>
						IceCast (Baja calidad)
						<iframe src="http://streaming.latina101.com.ar:8080/RadioLatina" width="261" height="188"></iframe>
					</Titulo>
				</Senales>
				<Senales>
					<Titulo>
                        RadioLatina
						<br></br>
						IceCast (Alta calidad)
						<iframe src="http://streaming.latina101.com.ar:9000/Repetidoras" width="261" height="188"></iframe>
					</Titulo>
				</Senales>
			</Contenedor_Senales>
		</Contenedor>	
    </div>
   }   
   export default Latinatv;