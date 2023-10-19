import React from 'react'
import ReactPlayer from 'react-player'
import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senales } from "./estilosJS/Senales";
import { Senal_canal26 } from './estilosJS/Senal_canal26';
import { Senal_telemax } from './estilosJS/Senal_telemax';
import { Senal_tierramia } from './estilosJS/Senal_tierramia';
import { Senal_musictop } from './estilosJS/Senal_musictop';
import { useState } from 'react';
import { Button } from './estilosJS/Buttons';
import { Senal_latinatv } from './estilosJS/Senal_latinatv';
import { Senal_tlcpreview } from './estilosJS/Senal_tlcpreview';

const Home = () =>{

	const [ruta, setRuta] = useState('https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
	const [playing, setPlaying] = useState(true);
	function pausar(playing){
			setPlaying(false)
			setRuta('https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=0&amp;mute=1&amp;enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
	};

    return <div>
         <Contenedor>	
			<Contenedor_Senales>
				<Senal_canal26>
                    <Titulo>
                    Canal26 <br></br>
						Youtube
						<iframe width="264" height="198" src={ruta} allowfullscreen></iframe>
				    </Titulo>
				</Senal_canal26>
                <Senal_canal26>
					<Titulo>
						Canal26<br></br>
						HLS<br></br><br></br>
                        <ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8' />					
                    </Titulo>
				</Senal_canal26>
				<Senal_canal26>
					<Titulo>
						Canal26 Fifa Tv<br></br>
						HLS (opterCast)<br></br><br></br>
						<ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/fifatv/main.m3u8' />					
                    </Titulo>
				</Senal_canal26>
				<Senal_telemax>
					<Titulo>
						Telemax
						<br></br>
						HLS<br></br><br></br>
                        <ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telemaxhls/main.m3u8' />					
                    </Titulo>
				</Senal_telemax>
				<Senal_musictop>
                    <Titulo>
						MusicTop
						<br></br>
						HLS<br></br><br></br>
                        <ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/musictophls/main.m3u8' />					
                    </Titulo>
				</Senal_musictop>
				<Senal_tierramia>
					<Titulo>
						TierraMia
						<br></br>
						HLS<br></br><br></br>
						<ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/tierramiahls/main.m3u8' />					
                    </Titulo>
				</Senal_tierramia>
				<Senal_latinatv>
					<Titulo>
						LatinaTV
						<br></br>
						HLS<br></br><br></br>
						<ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/latinatvhls/main.m3u8' />					
                    </Titulo>
				</Senal_latinatv>
				<Senal_tlcpreview>
					<Titulo>
						TlcPreview
						<br></br>
						HLS<br></br><br></br>
						<ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telecentropreviewhls/main.m3u8' />					
                    </Titulo>
				</Senal_tlcpreview>

				<Button  onClick={pausar}>Pause</Button>

			</Contenedor_Senales>
			
		</Contenedor>
	
 </div>
}
export default Home;