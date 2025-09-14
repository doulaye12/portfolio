'use client'
import React from 'react';
import { wording } from '@/utils/wording';
import Cta from '../cta/Cta';
import { useRouter } from 'next/navigation';

function HeroSection() {

    const router = useRouter()

  const { page: { home }, components: { heroSection } } = wording;
  
    function onContact(): void {
        console.log(router);
        router.push('/contact');
    }

  return (
    <div className='flex flex-col gap-8'>
        <h2 className='text-4xl/8'>{home.description}</h2>
        <h1 className='text-5xl/16 font-bold'>{heroSection.title}</h1>
        <p className='text-2xl/8'>{heroSection.description}</p>
        <div className='flex gap-4'>
            <Cta text='Me contacter ☎️' cta={onContact} />
            <Cta text='Télécharger CV ⬇️' cta={onContact} />
        </div>
    </div>
  )
}

export default HeroSection