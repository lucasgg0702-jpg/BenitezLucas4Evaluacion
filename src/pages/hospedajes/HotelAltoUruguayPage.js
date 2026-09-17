import { useState } from 'react';
import '../../styles/components/pages/HotelAltoUruguayPage.css';

const WHATSAPP = '+5493772578987';
const IMG_BASE = '/img/hospedajes/hotel_alto_uruguay/';

const habitaciones = [
    { id: 1, numero: 'Habitación 1 Simple', capacidadTexto: '1 Persona', capacidadValor: 1, precio: 15000, comodidades: 'Wi-Fi, Aire Acondicionado, TV por cable.', imagen: 'habitacion-1-simple.jpg', alt: 'Foto Habitación Simple' },
    { id: 2, numero: 'Habitación 2 Doble Matrimonial', capacidadTexto: '2 Personas', capacidadValor: 2, precio: 25000, comodidades: 'Cama Matrimonial, Frigobar, Desayuno incluido.', imagen: 'habitacion-6-matrimonial.jpg', alt: 'Foto Habitación Matrimonial' },
    { id: 3, numero: 'Habitación 3 Triple', capacidadTexto: '3 Personas', capacidadValor: 3, precio: 35000, comodidades: '3 Camas individuales, balcón a la calle.', imagen: 'habitacion-3-triple.jpg', alt: 'Foto Habitación Triple' },
    { id: 4, numero: 'Habitación 4 Familiar', capacidadTexto: '5 Personas', capacidadValor: 5, precio: 45000, comodidades: 'Dos ambientes, cocina equipada, cochera propia.', imagen: 'habitacion-5-familiar.jpg', alt: 'Foto Habitación Familiar' },
];

const HabitacionItem = ({ habitacion }) => {
    const [noches, setNoches] = useState(1);
    const [resultado, setResultado] = useState('');

    const calcularTotalEstadia = () => {
        const cantidadNoches = parseInt(noches, 10);
        if (isNaN(cantidadNoches) || cantidadNoches < 1) {
            setResultado('Mínimo 1 noche.');
            return;
        }
        const precioTotal = habitacion.precio * cantidadNoches;
        setResultado('Total: $' + precioTotal.toLocaleString('es-AR'));
    };

    const mensajeReserva = `Hola, vengo desde Come en Alvear y quisiera reservar la habitación N°${habitacion.id}`;

    return (
        <div className='habitacion' id={`habitacion-${habitacion.id}`} data-capacidad={habitacion.capacidadValor}>
            <div className='habitacion-info'>
                <h3 className='habitacion-numero'>{habitacion.numero}</h3>
                <p className='habitacion-capacidad'><strong>Capacidad:</strong> {habitacion.capacidadTexto}</p>
                <p className='habitacion-precio'><strong>Precio por noche:</strong> ${habitacion.precio.toLocaleString('es-AR')}</p>
                <p className='habitacion-comodidades'><strong>Comodidades:</strong> {habitacion.comodidades}</p>
                <div className='cotizador'>
                    <label htmlFor={`noches-h${habitacion.id}`}>Noches:</label>
                    <input
                        type='number'
                        id={`noches-h${habitacion.id}`}
                        value={noches}
                        min='1'
                        onChange={(e) => setNoches(e.target.value)}
                    />
                    <button className='btn-calcular' onClick={calcularTotalEstadia}>Calcular Total</button>
                    <span className='resultado-precio'>{resultado}</span>
                </div>
                <div className='habitacion-acciones'>
                    <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensajeReserva)}`} target='_blank' rel='noopener noreferrer' className='enlace-reserva'>📱 Reservar</a>
                </div>
            </div>
            <div className='habitacion-galeria'>
                <img src={IMG_BASE + habitacion.imagen} alt={habitacion.alt} />
            </div>
        </div>
    );
}

const HotelAltoUruguayPage = (props) => {
    const [filtro, setFiltro] = useState('todas');

    const visibles = habitaciones.filter((h) => {
        if (filtro === 'todas') return true;
        if (filtro === 'baja') return h.capacidadValor <= 2;
        return h.capacidadValor >= 3;
    });

    return (
        <main className='holder'>
            <section id='habitaciones'>
                <div className='filtros-contenedor'>
                    <span>Filtrar por tipo:</span>
                    <button className='btn-filtro' onClick={() => setFiltro('todas')}>Todas</button>
                    <button className='btn-filtro' onClick={() => setFiltro('baja')}>1 - 2 Personas</button>
                    <button className='btn-filtro' onClick={() => setFiltro('alta')}>3+ Personas</button>
                </div>
                <div className='categorias-anclas'>
                    <span>Ir a Habitación:</span>
                    <a href='#habitacion-1'>1</a> | <a href='#habitacion-2'>2</a> |
                    <a href='#habitacion-3'>3</a> | <a href='#habitacion-4'>4</a>
                </div>

                {visibles.map((habitacion) => (
                    <HabitacionItem habitacion={habitacion} key={habitacion.id} />
                ))}
            </section>
        </main>
    );
}

export default HotelAltoUruguayPage;