import React from 'react'
import ReactPlayer from 'react-player'
import { Contenedor_SenalesN } from './estilosJS/Contenedor_SenalesN';
import { ContenedorE } from './estilosJS/ContenedorE';
import { Titulo } from "./estilosJS/Titulo";
import { Senales } from "./estilosJS/Senales";
import { Senal_vacio } from './estilosJS/Senal_vacio';  

import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Contenedor_Senal } from './estilosJS/Contenedor_Senal';
import { Senal_canal26 } from './estilosJS/Senal_canal26';
import { ContenedorN } from './estilosJS/ContenedorN';
import { ContenedorU } from './estilosJS/ContenedorU';
import { Senal_cuatroK } from './estilosJS/Senal_cuatroK';

const Cuatrok = () =>{
    return <div>

        <ContenedorU>
			<Contenedor_SenalesN>
                <Senal_cuatroK>
				    <Titulo>
						Telecentro 4k
						<br></br>
						HLS (nebula) <br></br><br></br>
						<ReactPlayer  controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telecentro4khls/main.m3u8' />					
                    </Titulo>
                </Senal_cuatroK>


                <Senal_vacio>
					<Titulo> 
						<br></br>			
					</Titulo>
				</Senal_vacio>



                <Senal_vacio>
					<Titulo> 
						<br></br>			
					</Titulo>
				</Senal_vacio>



                <Senal_vacio>
					<Titulo> 
						<br></br>			
					</Titulo>
				</Senal_vacio>



                <Senal_vacio>
					<Titulo> 
						<br></br>			
					</Titulo>
				</Senal_vacio>



                <Senal_vacio>
					<Titulo> 
						<br></br>			
					</Titulo>
				</Senal_vacio>



                <Senal_vacio>
					<Titulo> 
						<br></br>			
					</Titulo>
				</Senal_vacio>



                <Senal_vacio>
					<Titulo> 
						<br></br>			
					</Titulo>
				</Senal_vacio>


                <Senal_vacio>
					<Titulo> 
						<br></br>			
					</Titulo>
				</Senal_vacio>


            </Contenedor_SenalesN>
        </ContenedorU> 
    </div>
   }   
   export default Cuatrok;