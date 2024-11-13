import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Loja online especializada no comércio de roupas masculinas e femininas. Com mais de 10 anos
                    de história, contamos com milhares de clientes satisfeitos ao redor do mundo.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mg-5'>EMPRESA</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Início</li>
                    <li>Sobre nós</li>
                    <li>Entregas</li>
                    <li>Política de privacidade</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>ENTRE EM CONTATO</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+55 212-456-789</li>
                    <li>contato@foreveryou.com</li>
                </ul>
            </div>

        </div>

        <div>

            <div>
                <hr />
                    <p className='py-5 text-sm text-center'>Copyright 2024@forever.com - Todos Os Direitos Reservados.</p>
                </div>
            </div>
    </div>
  )
}

export default Footer
