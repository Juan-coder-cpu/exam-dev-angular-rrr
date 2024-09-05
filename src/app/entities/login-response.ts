export interface RazonesFallaResponse{
	descripcion: string
}

export interface LoginHeaderResponse{
    "codigoOperacionBackend": string,
    "codigoRespuesta": string,
    "descripcionRespuesta": string,
    "tiempoRespuesta": number,
    "horaRespuesta": Date,
    "razonesFalla": RazonesFallaResponse[]
}

export interface LoginResponse{
	"header": LoginHeaderResponse,
	"resultado": string,
    "exito": boolean,
	"mensaje": string
}