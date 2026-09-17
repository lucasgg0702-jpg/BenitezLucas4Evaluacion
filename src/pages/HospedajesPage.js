import '../styles/components/pages/HospedajesPage.css';

const HospedajesPage = (props) => {
    return (
        <main className='holder'>
            <section className='hospedajes'>
                <h2>Hospedajes</h2>
                <div className='hospedaje'>
                    <div className='hospedaje-info'>
                        <h3 className='hospedaje-nombre'>Hotel Alto Uruguay</h3>
                        <p className='hospedaje-direccion'><strong>Dirección:</strong> General Paz 932</p>
                        <p className='hospedaje-tipo'><strong>Tipo:</strong> Hotel</p>
                        <p className='hospedaje-horario'><strong>Horario de ingreso:</strong> 10:00 hs</p>
                        <p className='hospedaje-numero'><strong>Contacto:</strong> +54 3772 57-8987</p>
                        <div className='hospedaje-etiquetas'>
                            <span className='etiqueta-hospedaje'>Cochera</span>
                            <span className='etiqueta-hospedaje'>Frigobar</span>
                            <span className='etiqueta-hospedaje'>Baño privado</span>
                        </div>
                        <div className='hospedaje-acciones'>
                            <a href='https://maps.app.goo.gl/T79e8pc8AmpHNw6y7' target='_blank' rel='noopener noreferrer' className='enlace-mapa'>📍 Cómo llegar</a>
                            <a href='/hospedajes/hotel-alto-uruguay' className='enlace-whatsapp'>Ver Habitaciones</a>
                        </div>
                    </div>
                    <div className='hospedaje-imagen'>
                        <img src='/img/hospedajes/hotel_alto_uruguay/hotel_alto_uruguay.jpg' alt='Hotel Alto Uruguay'></img>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HospedajesPage;