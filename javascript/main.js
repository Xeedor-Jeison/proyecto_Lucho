import * as misFunciones from "../modulos/misFunciones.js"
import * as misVariables from "../modulos/misVariables.js"

let imagenes = [
	{
		nombre: "../imagenes/imagen1.jpeg"
	},
	{
		nombre: "../imagenes/imagen2.jpeg"
	},
	{
		nombre: "../imagenes/imagen3.jpeg"
	},
	{
		nombre: "../imagenes/imagen4.jpeg"
	},
	{
		nombre: "../imagenes/imagen5.jpeg"
	},
	{
		nombre: "../imagenes/imagen6.jpeg"
	},
	{
		nombre: "../imagenes/imagen7.jpeg"
	},
	{
		nombre: "../imagenes/imagen8.jpeg"
	},
	{
		nombre: "../imagenes/imagen9.jpeg"
	},
	{
		nombre: "../imagenes/imagen10.jpeg"
	},
	{
		nombre: "../imagenes/imagen11.jpeg"
	},
	{
		nombre: "../imagenes/imagen12.jpeg"
	},
]


misFunciones.crearTarjetas(imagenes, misVariables.carrusel)
const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			publicity: [
				{
					nombre: 'Branding',
				},
				{
					nombre: 'Backing',
				},
				{
					nombre: 'Stand',
				},
				{
					nombre: 'Diseño gráfico',
				},
				{
					nombre: 'Avisos publicitarios y luminosos',
				},
				{
					nombre: 'Impresión a gran formato',
				},
				{
					nombre: 'Islas comerciales',
				},
				{
					nombre: 'Vallas publicitarias',
				},
				{
					nombre: 'Escenografias',
				},
				{
					nombre: 'Carrovalla y bicivalla',
				},
			],
			audioVisuales: [
				{
					nombre: 'Video Walls',
				},
				{
					nombre: 'Pantalla leds',
				},
				{
					nombre: 'Registro leds',
				},
				{
					nombre: 'Registro fotográfico',
				},
				{
					nombre: 'Registro de video camara',
				},
				{
					nombre: 'Tv de todas las medidas',
				},
				{
					nombre: 'Compuadoras portátitles',
				},
				{
					nombre: 'Video beams con pantalla translúcidas',
				},
			],
			estructuras: [
				{
					nombre: 'Tarimas',
				},
				{
					nombre: 'Carpas',
				},
				{
					nombre: 'Carpas tipo hangar',
				},
				{
					nombre: 'Carpas climatizadas',
				},
				{
					nombre: 'Muros de contención',
				},
				{
					nombre: 'Vallas de seguridad',
				},
			],
			cateringCoffe: [
				{
					nombre: 'Break',
				},
				{
					nombre: 'Refrigeración',
				},
				{
					nombre: 'Buffete',
				},
				{
					nombre: 'Bebidas',
				},
				{
					nombre: 'Picadas',
				},
			],
			mobiliarios: [
				{
					nombre: 'Counters',
				},
				{
					nombre: 'Salas Lounge',
				},
				{
					nombre: 'Alfombras (rojas, azules etc)',
				},
				{
					nombre: 'Separadores de fila mesas y silla tipo bar',
				},
				{
					nombre: 'Dispensador de agua',
				},
				{
					nombre: 'Abanicos industriales',
				},
				{
					nombre: 'Plantas eléctricas',
				},
			],
		};
	},
}).mount('#app');

window.onscroll = function () {
	let cambioFondo = document.querySelector('.fondoNav');
    cambioFondo.classList.toggle("fondoNavNuevo",window.scrollY>900);

};
