import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import NavbarM from '../components/NavbarM'
import Foot from '../components/Foot';
import Services from '../components/Services';
import Contact from '../components/Contact';
export default function Home() {
    return (
     <div>
  
       
         <NavbarM />
         
        <Services/>

         <Contact/>
         <Foot/>
        

       
      </div>
    )
  }