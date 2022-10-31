import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import NavbarM from '../components/NavbarM'
import Foot from '../components/Foot';
import Intro from '../components/intro';
import Banner from '../components/Banner';
import Best from '../components/Best';
import LookMenu from '../components/LookMenu';
import LookFacebook from '../components/LookFacebook';
import CarF from '../components/CarF';
import Poster from '../components/Poster';

import Contact from '../components/Contact';
import Locations from '../components/Locations';

export default function Home() {
  return (
    <div >
      <Head>
        <title>La Hormiga</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      
       <NavbarM />
       <Banner/>
       <Best/>
       <LookMenu/>
       <Locations/>
       <LookFacebook/>
       <CarF/>
       <Contact/>
       <Foot/>
       </div>
     
 
  )
}
