import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Política De Troca</p>
        <p className='text-gray-400'>Nossa política de troca é desconplicada e sem dores de cabeça.</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>7 Dias De Troca</p>
        <p className='text-gray-400'>Oferecemos 7 dias de troca sem nenhum custo adicional.</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Suporte Ao Cliente</p>
        <p className='text-gray-400'>Nossa equipe de suporte se encontra disponível 24/7.</p>
      </div>
    </div>
  )
}

export default OurPolicy
