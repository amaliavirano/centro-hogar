import React from 'react'
import ItemDetail from './ItemDetail'
import smarttv50 from '../assets/smarttv50.jpg'
import smarttv40 from '../assets/smarttv40.jpg'
import smarttv50rca from '../assets/smarttv50rca.jpg'
import smarttv43rca from '../assets/smarttv43rca.jpg'
import notebook from '../assets/notebook.jpg'
import smartwatch from '../assets/smartwatch.jpg'
import celular from '../assets/celular.jpg'
import impresora from '../assets/impresora.jpg'
import heladera from '../assets/heladera.jpg'
import cocina from '../assets/cocina.jpg'
import lavarropa from '../assets/lavarropa.jpg'
import pava from '../assets/pava.jpg'
import mueble from '../assets/mueble.jpg'
import flamenco from '../assets/flamenco.jpg'
import silla from '../assets/silla.jpg'
import conservadora from '../assets/conservadora.jpg'

const ItemDetailContainer = () => {

  const productos = [
    {
      id: 1, titulo: "Smart TV Phillips 50'Ultra HD 4k Android ", descripcion: "Pantalla: LED 4K Ultra HD,50 pulgadas.Sonido Dolby Atmos.Principales formatos HDR compatibles.Control por voz.Sistema operativo: Android TV 10 Aplicaciones preinstaladas: Amazon Prime Video, Disney+, YouTube, Netflix.- Tamaño de la memoria(flash): 8 GB.- HDMI: 4. - Puertos USB: 2. - Accesorios incluidos: Control remoto, 2 pilas AAA, cable de alimentación y soporte para la mesa.", precio: "$274.999", categoria: "TV-AUDIO-VIDEO", stock: 10, imagen: smarttv50
    },
    { id: 2, titulo: "Smart TV Rca 40' Fhd Android TV", descripcion: "Android TV 40”.Google Play.Chromecast Integrado.Comando de voz.Micro Dimming.Google Assistant.HDR.Bluetooth. Decodificador Digital. Control remoto infrarrojo.", precio: "$175.999", categoria: "TV-AUDIO-VIDEO", stock: 4, imagen: smarttv40 },
    { id: 3, titulo: "Smart TV Rca 50' Uhd Android TV", descripcion: "Su resolución es 4K.Tecnología HDR para una calidad de imagen mejorada.Sistema operativo Android TV.Conectá tus dispositivos mediante sus 4 puertos HDMI.Ancho x Altura: 111.5 cm x 73 cm.", precio: "$254.099", categoria: "TV-AUDIO-VIDEO", stock: 8, imagen: smarttv50rca },
    { id: 4, titulo: "Smart TV Rca 43' Fhd Android", descripcion: "El Android TV permite desde reproducir contenidos de YouTube, Netflix, Spotify, consultar noticias, clima, agenda, correo, descargar cualquier app por el Play store y navegar en internet de forma veloz.Google Play,Google Assistant.HDR.Chromecast Integrado.Micro Dimming.Con HDMI, USB y Lan.2 parlantes integrados", precio: "$197.999", categoria: "TV-AUDIO-VIDEO", stock: 3, imagen: smarttv43rca },
    { id: 5, titulo: "Nkt EXO Smart 14.1 Cel 4020 4gb 64gb Ssd Win11", descripcion: "Memoria RAM: 4 GB.Capacidad de disco: 64 GB .Sistema operativo: Windows 11.", precio: "$359.614", categoria: "TECNOLOGIA Y CELULARES", stock: 5, imagen: notebook },
    { id: 6, titulo: "Smartwatch Smart Kassel Negro", descripcion: "Funcionalidades:Sincronización con agenda telefónica con los contactos del teléfono.Podómetro. Cantidad de pasos, calorías quemadas y distancia recorrida.Reproducir música.  Mensaje Notificación.Recordatorio sedentarismmo.Calendario. Despertador.Calculadora. Monitoreo de sueño. Cronómetro. Modo deportivo. Llamada Bluetooth.Frecuencia cardíaca.   Temperatura corporal.", precio: "$34.366", categoria: "TECNOLOGIA Y CELULARES", stock: 10, imagen: smartwatch },
    { id: 7, titulo: "Celular Samsung S23ultra 256/12/8gb 12/200/10 mp Bg", descripcion: "- Cámara trasera: 200MP + 10MP + 12MP.Cámara frontal: 12MP.Memoria: 12GB.Almacenamiento: 256GB. Dual - SIM. Con NFC.Incluye: Cable de datos USB-C a USB-C, herramienta de extracción de SIM. No incluye cargador.", precio: "$977.779", categoria: "TECNOLOGIA Y CELULARES", stock: 10, imagen: celular },
    { id: 8, titulo: "Impresora HP Multifuncion Dj Ink Color 2375", descripcion: "Impresión, copia, escaneado.CICLO DE TRABAJO (MENSUAL, A4): Hasta 1000 páginas. VOLUMEN DE PÁGINAS MENSUALES RECOMENDADO: 50 a 100.TECNOLOGÍA DE IMPRESIÓN: Inyección térmica de tinta HP.  CALIDAD DE IMPRESIÓN EN NEGRO (ÓPTIMA): Negro: Hasta 1200 x 1200 ppp de reproducción Color: Resolución optimizada de hasta 4800 x 1200 dpi en color (cuando se imprime desde una computadora con papel fotográfico HP y 1200 dpi de entrada) NÚMERO DE CARTUCHOS DE IMPRESIÓN: 1 negro, 1 tricolor.", precio: "$84.410", categoria: "TECNOLOGIA Y CELULARES", stock: 10, imagen: impresora },
    { id: 9, titulo: "Heladera Ciclica Drean Hdr400f00s 397 Lts Clase A Acero", descripcion: "Heladera con freezer cíclica.Eficiencia energética A.Color gris aluminium.Gas ecológico R600a.apacidad bruta 397 litros.Capacidad neta 395 litros.Deshielo manual.Estantes regulables en altura.Anaqueles en contrapuerta.Doble cajón para frutas y verduras.Luz interior LED.Origen Argentina.", precio: "$553.089", categoria: "ELECTRO HOGAR", stock: 3, imagen: heladera },
    { id: 10, titulo: "Cocina Florencia 5518f Acero Inoxidable Facil Limpieza", descripcion: "Rejilla de alambre enlozado: De alta durabilidad.Eficiencia energética Clase AAncho (cm): 56 Alto (cm): 85 Profundidad (cm): 60 Tipo: Gas.Kit conversión multigas: Si Color: Acero inoxidable Easy Cleaning (fácil limpieza) Válvulas de seguridad: en Horno y Hornallas Cajón Parrilla: Rebatible Puerta de horno: Doble Cristal Origen: Industria Argentina Garantía: 12 Meses Plancha Superior, cajón parrilla y frente de perillas: Acero Inoxidable.", precio: "$281.745", categoria: "ELECTRO HOGAR", stock: 3, imagen: cocina },
    { id: 11, titulo: "Lavarropas Dream frontal Next 6kg 800rpm", descripcion: "800 rpm 6 kg 29 combinaciones de lavadoClase A+Puerta extra grande con una apertura de 180° Tambor de acero inoxidable de 40L. Carga Autoadaptativa: regula la cantidad de agua automáticamente según la cantidad de ropa cargada en el tamborPlancha Fácil: deja la ropa sumergida y en remojo justo antes del último centrifugado, reduciendo la formación de arrugasBloqueo para Niños Eco Lavado: podés limpiar tu ropa en un corto tiempo y ahorrando energía a la vez.Control de Temperatura: Sí Inicio Diferido: No Lavado Rápido: Sí Lavado a mano: Sí.", precio: "$406.991", categoria: "ELECTRO HOGAR", stock: 5, imagen: lavarropa },
    { id: 12, titulo: "Pava Electrica Peabody Vintage 1.7l Roja", descripcion: "- 1,7 lts. de capacidad Acero Inoxidable con filtro y con visor medidor Termómetro para un exacto control de temperatura Marca especial (80°C), temperatura ideal para mate. Corte automático al momento de ebullición. Filtro interno. Base con espacio guarda cable y giro 360°. Diseño vintage. Proteccion por falta de agua Origen China", precio: "$52.110", categoria: "ELECTRO HOGAR", stock: 15, imagen: pava },
    { id: 13, titulo: "Comoda Orlandi 3 caj. 1p. abedul 90x91,5x47", descripcion: "Tres cajones.Una puerta. Medidas: 915 x 900 x 370mm. Color: Abedul. Imagen a modo lustrativo", precio: "$54.346", categoria: "HOGAR Y JARDIN", stock: 4, imagen: mueble },
    { id: 14, titulo: "Flamenco gigante inflable rosa 198cmx180cm*108cm", descripcion: "Tamaño inflado: 200 x 190 x 115 cm.Solo para uso en piletas. Los niños menores de 5 años deben utilizar el producto bajo la supervisión de un adulto. Peso máximo: 80 kg. NO SE ACEPTAN DEVOLUCIONES. NO SE REALIZAN CAMBIOS.es cajones.Una puerta. Medidas: 915 x 900 x 370mm. Color: Abedul. Imagen a modo lustrativo", precio: "$16.618", categoria: "HOGAR Y JARDIN", stock: 3, imagen: flamenco },
    { id: 15, titulo: "Silla Garden Life  Titan Blanco", descripcion: "- Apilable.Respaldo moderno.Super reforzada. Apoya brazos.78 x 50 x 54,5 cm", precio: "$12.389", categoria: "HOGAR Y JARDIN", stock: 20, imagen: silla },
    { id: 16, titulo: "Conservadora Coleman Chest 62qt c/ruedas Azul", descripcion: "• Capacidad: 62QT (101 latas) Conserva el frío por 5 días.Revestimiento anti-manchas y olor. Tapa con 4 posa-vasos moldeados con drenaje (apto para vasos Brew).Ruedas de 6” de alta resistencia.Manijas laterales y una gran manija de arrastre. Tapa Have-A-Seat TM resiste hasta 113kg y se puede usar como asiento. Tapón de desagote. Medidas: 71,1 x 39,6 x 45,7cm.", precio: "$242.230", categoria: "HOGAR Y JARDIN", stock: 5, imagen: conservadora }
  ]
  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000)
    } else {
      reject("No se encontraron productos")
    }
  })

  mostrarProductos
    .then((resultado) => { console.log(resultado) })
    .catch((error) => { console.log(error) })

  return (
    <>
      <ItemDetail
        productos={productos}
      />
    </>
  )
}

export default ItemDetailContainer