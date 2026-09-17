import '../styles/components/pages/LocalesPage.css'

const LocalesPage = (props) => {
    return (
        <main className='holder'>
            <section className='locales'>
                <h2>Locales</h2>
                <div className='local'>
                    <div className='local-info'>
                        <h3 className='local-nombre'>Good Food</h3>
                        <p className='local-direccion'><strong>Dirección:</strong> Carlos Pellegrini 566</p>
                        <p className='local-horario'><strong>Horario:</strong> Viernes a Miercoles 20:30 - 00:30 hs</p>
                        <p className='local-numero'><strong>Contacto:</strong> +54 3772 30-4855</p>
                    </div>
                    <div className='local-etiquetas'>
                        <span className='etiqueta-gastronomica'>Cena</span>
                        <span className='etiqueta-gastronomica'>Bebidas S/Alcohol</span>
                        <span className='etiqueta-gastronomica'>Bebidas C/Alcohol</span>
                    </div>
                    <p className='local-delivery'><strong>Delivery:</strong> <span className='delivery-disponible'>Disponible - $1.000</span></p>
                    <div className='local-acciones'>
                        <a href='https://maps.app.goo.gl/csQtk5NVee4y4fCF9' target='_blank' rel='noopener noreferrer' className='enlace-mapa'>📍 Cómo llegar</a>
                        <a href='/menu/good-food' className='enlace-menu'>Ver Menú</a>
                    </div>
                    <div className='local-imagen'>
                        <img src='/img/locales/good-food/good_food.jpg' alt='Good Food'></img>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LocalesPage;