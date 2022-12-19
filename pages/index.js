import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.css';
import NavbarM from '../components/NavbarM'
import Foot from '../components/Foot';
import Ima from '../components/Ima';
import Banner from '../components/Banner';
import Best from '../components/Best';
import LookMenu from '../components/LookMenu';
import LookFacebook from '../components/LookFacebook';
import CarF from '../components/CarF';


import Contact from '../components/Contact';
import Locations from '../components/Locations';
import Roullette from '../components/Roullette';

export default function Home() {
  return (
    <div >
      <Head>
        <title>La Hormiga</title>
        <meta name="description" content="Ven a disfrutar de nuestros deliciosos elotes en vaso y helados en nuestro negocio. Tenemos una gran variedad de sabores para elegir y nuestras bebidas frías te refrescarán en cualquier momento del día. También ofrecemos nachos y otros aperitivos para satisfacer tu apetito. Nos encontramos múltiples ubicaciones en Reynosa, así que no dudes en pasar y disfrutar de nuestros productos. ¡Te esperamos en La Hormiga!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow"></meta>
      </Head>

      
       <NavbarM />
       <Banner/>
       <Best/>
       <LookMenu/>
       <Roullette/>
       <Locations/>
       <Ima/>
       <LookFacebook/>
       <CarF/>
       <Contact/>
       <Foot/>
       </div>
     
 
  )
}
