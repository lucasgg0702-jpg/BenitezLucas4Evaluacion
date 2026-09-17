import { useState } from 'react';
import '../../styles/components/pages/MenuPage.css';

const WHATSAPP = '+5493772304855';
const PDF = '/img/locales/good-food/menu/menu_good_food.pdf';
const IMG_BASE = '/img/locales/good-food/menu/';

const enlaceWhatsapp = (mensaje) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

const categorias = [
    {
        id: 'hamburguesas',
        titulo: 'Hamburguesas',
        platos: [
            { nombre: 'Clásica', descripcion: '(Pan, Paty casero, Cheddar, huevo).', precio: '$5.000', imagen: 'hamburguesa-clasica.png', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una hamburguesa clásica.', alt: 'Hamburguesa clásica' },
            { nombre: 'Clásica doble', descripcion: '(Pan, 2 Paty casero, cheddar, huevo).', precio: '$7.000', imagen: 'hamburguesa-doble.png', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una hamburguesa clásica doble.', alt: 'Hamburguesa clásica doble' },
            { nombre: 'Super', descripcion: '(Pan, Paty casero, Cheddar, huevo, cebolla morada).', precio: '$6.000', imagen: 'super.jfif', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una hamburguesa super.', alt: 'Hamburguesa super' },
            { nombre: 'Super doble', descripcion: '(Pan, 2 Paty casero, Cheddar, huevo, cebolla morada).', precio: '$8.000', imagen: 'super-doble.jfif', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una hamburguesa super doble.', alt: 'Hamburguesa super doble' },
            { nombre: 'Completa', descripcion: '(Pan, Paty casero, muzza, huevo, tomate, lechuga).', precio: '$6.000', imagen: 'completa.jfif', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una hamburguesa completa.', alt: 'Hamburguesa completa' },
            { nombre: 'Completa doble', descripcion: '(Pan, 2 Paty casero, muzza, huevo, tomate, lechuga).', precio: '$8.000', imagen: 'completa-doble.jfif', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una hamburguesa completa .', alt: 'Hamburguesa completa doble' },
            { nombre: 'Krispy', descripcion: '(Pan, Paty casero, huevo, beicon, cebollas fritas, cheddar y salsa big jack).', precio: '$6.000', imagen: 'hamburguesa-krispy.png', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una hamburguesa krispy.', alt: 'Hamburguesa krispy' },
            { nombre: 'Krispy doble', descripcion: '(Pan, 2 Paty casero, huevo, beicon, cebollas fritas, cheddar y salsa big jack).', precio: '$8.000', imagen: 'krispy-doble.jfif', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una hamburguesa krispy doble.', alt: 'Hamburguesa krispy doble' },
            { nombre: 'Pampa', descripcion: '(Pan, Paty casero, huevo, beicon, cebolla caramelizada, cheddar y barbacoa).', precio: '$6.000', imagen: 'pampa.jfif', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una hamburguesa pampa.', alt: 'Hamburguesa pampa' },
            { nombre: 'Pampa doble', descripcion: '(Pan, 2 Paty casero, huevo, beicon, cebolla caramelizada, cheddar y barbacoa).', precio: '$8.000', imagen: 'krispy-doble.jfif', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una hamburguesa pampa doble.', alt: 'Hamburguesa pampa doble' },
        ],
    },
    {
        id: 'pizzas',
        titulo: 'Pizzas',
        avisos: ['Podés pedir mitad y mitad.', 'Podés añadir una porción de papas arriba.'],
        platos: [
            { nombre: 'Muzzarella', descripcion: '(Salsa de tomate, muzzarella, aceitunas).', precio: '$10.000', imagen: 'pizza.jpg', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una pizza muzzarella.', alt: 'Pizza muzzarella' },
            { nombre: 'Napolitana', descripcion: '(Muzzarella, rodajas de tomate, ajo, provenzal).', precio: '$11.000', imagen: 'pizza-fugazzeta.jpg', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una pizza napolitana.', alt: 'Pizza napolitana' },
            { nombre: 'Calabresa', descripcion: '(Muzzarella, longaniza en rodajas).', precio: '$12.000', imagen: 'pizza-volcan.jpg', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una pizza calabresa.', alt: 'Pizza calabresa' },
            { nombre: 'Jamón y morrón', descripcion: '(Muzzarella, jamón cocido, morrones asados).', precio: '$12.000', imagen: 'pizza-panceta.jpg', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una pizza de jamón y morron.', alt: 'Pizza jamón y morron' },
            { nombre: 'Atún', descripcion: '(Muzzarella, atún, cebolla).', precio: '$12.000', imagen: 'pizza.jpg', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una pizza con atún.', alt: 'Pizza con atún' },
            { nombre: 'Volcan', descripcion: '(Muzzarella, doble cheddar, beicon crocante).', precio: '$13.000', imagen: 'pizza-volcan.jpg', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una pizza volcan.', alt: 'Pizza volcan' },
            { nombre: 'Fugazzetta', descripcion: '(Muzzarella, abundante cebolla, oliva, orégano).', precio: '$11.000', imagen: 'pizza-fugazzeta.jpg', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir una pizza fugazzetta.', alt: 'Pizza fugazzetta' },
            { nombre: 'Calzon relleno', descripcion: '(Muzzarella, jamón, morrones, huevo duro).', precio: '$15.000', imagen: 'nachos.jpg', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir un calzon relleno.', alt: 'Foto de un calzon relleno' },
        ],
    },
    {
        id: 'sandwiches',
        titulo: 'Sandwiches',
        platos: [
            { nombre: 'Milanesa', descripcion: '(Pan, milanesa de carne o pollo, lechuga, tomate).', precio: '$10.000', imagen: 'milanesa.webp', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir un sandwich de milanesa.', alt: 'Foto de un sandwich de milanesa' },
            { nombre: 'Lomito', descripcion: '(Pan, bife de lomo, queso, huevof frito).', precio: '$10.000', imagen: 'lomito-comun.webp', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir un sandwich de lomito.', alt: 'Foto de un sandwich de lomito' },
            { nombre: 'Lomito espacial', descripcion: '(Pan, doble lomo, jamón, queso, huevo, lechuga, tomate, papas fritas adentro).', precio: '$12.000', imagen: 'lomito.webp', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir un sandwich de lomito espacial.', alt: 'Foto de un sandwich de lomito espacial' },
        ],
    },
    {
        id: 'para-picar',
        titulo: 'Para picar',
        platos: [
            { nombre: 'Papas fritas', descripcion: '(Porción individual o para compartir).', precio: '$4.000', imagen: 'nachos.jpg', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir unas papas fritas.', alt: 'Foto de unas papas fritas' },
            { nombre: 'Volcán de papas', descripcion: '(Colchón de papas con cheddar fundido, beicon y verdeo picado).', precio: '$8.000', imagen: 'volcan.jpg', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir un volcan de papas.', alt: 'Foto de un volcan de papas' },
            { nombre: 'Chiken tender', descripcion: '(Tiras de pechuga de pollo súper crocantes rebozadas, acompañadas de salsa).', precio: '$7.000', imagen: 'chiken-tender.jpg', mensaje: 'Hola, vengo desde Come en Alvear y quisiera pedir unos chiken tender.', alt: 'Foto de unos chiken tender' },
        ],
    },
];

const MenuGoodFoodPage = (props) => {
    const [busqueda, setBusqueda] = useState('');
    const textoBusqueda = busqueda.toLowerCase();

    return (
        <main className='holder'>
            <section id='menus'>
                <h1>Menú del Local</h1>
                <p className='aviso-menu'>Algunas imágenes de los platos son de carácter ilustrativo y han sido generadas mediante Inteligencia Artificial.</p>
                <div className='buscador-contenedor'>
                    <input
                        type='text'
                        id='buscador-menu'
                        placeholder='🔍 Buscar plato (ej: Clásica, Muzzarella, Lomito)...'
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
                <div className='categorias-anclas'>
                    <span>Saltar a:</span>
                    <a href='#hamburguesas'>Hamburguesas</a> |
                    <a href='#pizzas'>Pizzas</a> |
                    <a href='#sandwiches'>Sándwiches</a> |
                    <a href='#para-picar'>Para picar</a>
                </div>

                {categorias.map((categoria) => (
                    <div key={categoria.id}>
                        <h2 id={categoria.id}>{categoria.titulo}</h2>
                        {categoria.avisos?.map((aviso) => (
                            <p className='aviso-menu' key={aviso}>{aviso}</p>
                        ))}
                        {categoria.platos
                            .filter((plato) => plato.nombre.toLowerCase().includes(textoBusqueda))
                            .map((plato) => (
                                <div className='menu' key={plato.nombre}>
                                    <div className='menu-info'>
                                        <h3 className='menu-nombre'>{plato.nombre}</h3>
                                        <p className='menu-descripcion'>{plato.descripcion}</p>
                                        <p className='menu-precio'><strong>Precio:</strong> {plato.precio}</p>
                                        <div className='menu-acciones'>
                                            <a href={PDF} download className='enlace-descargar'>Descargar menú completo</a>
                                            <a href={enlaceWhatsapp(plato.mensaje)} target='_blank' rel='noopener noreferrer' className='enlace-ordenar'>📱 Ordenar</a>
                                        </div>
                                    </div>
                                    <div className='menu-separador'></div>
                                    <div className='menu-imagen'>
                                        <img src={IMG_BASE + plato.imagen} alt={plato.alt} />
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </section>
        </main>
    );
}

export default MenuGoodFoodPage;