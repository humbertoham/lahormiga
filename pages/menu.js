import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import NavbarM from '../components/NavbarM'
import Foot from '../components/Foot';
import MenuImg from '../components/MenuImg';
import Contact from '../components/Contact';
export default function Home() {
    return (
     <div>
  
       
         <NavbarM />
         <MenuImg/>
         <Contact/>
         <Foot/>
        

       
      </div>
    )
  }