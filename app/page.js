import About from '@/components/About'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Technical from '@/components/Technical'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#0e1212] min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Technical />
      <Projects />
      <Experience />
    </main>
  )
}
