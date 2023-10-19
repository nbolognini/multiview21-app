import { useState } from 'react'
import React from 'react'
import ReactPlayer from 'react-player'
import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senales } from "./estilosJS/Senales";
import { Button } from './estilosJS/Buttons';
import { Senal_canal26 } from './estilosJS/Senal_canal26';

const Canal26 = () =>{
		return <div>  
		<Contenedor>	
			<Contenedor_Senales>
				<Senal_canal26>
                    <Titulo>
						Canal26 <br></br>
						Youtube
						<iframe width="264" height="198" src="https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				    </Titulo>
				</Senal_canal26>
                <Senal_canal26>
					<Titulo>
						Canal26<br></br>
						HLS (nebula)<br></br><br></br>
                        <ReactPlayer controls muted playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8' />					
                    </Titulo>
				</Senal_canal26>		
				<Senal_canal26>
                    <Titulo>
						Canal26 Fifa Tv<br></br>
						HLS (opterCast)<br></br><br></br>
                        <ReactPlayer controls muted playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/fifatv/main.m3u8' />					
                    </Titulo>
				</Senal_canal26>
				<Senal_canal26>
					<Titulo>
						Canal26<br></br>
						HLS (wowza)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='http://live-edge01.telecentro.net.ar/live/smil:c26.smil/playlist.m3u8' />					
                    </Titulo>
				</Senal_canal26>
			</Contenedor_Senales>
		</Contenedor>
    </div>
   }   
   export default Canal26;