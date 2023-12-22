import { ChakraProvider } from '@chakra-ui/react'
import {Homepage} from '../components/Homepage';
import {Section} from '@/components/Section';
import {About} from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';

 export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <ChakraProvider>
          <Homepage/>
          <Section/>
          <About/>
          <Section/>
          <Experience/>
          <Section/>
          <Skills/>

          
        </ChakraProvider>
    </main>
    
  )
}
