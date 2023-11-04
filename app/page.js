import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#0e1212] min-h-screen w-full">
      <Navbar />
      <Hero />
    </main>
  )
}
