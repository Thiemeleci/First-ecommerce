import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'ENTRE EM CONTATO'} text2={'CONOSCO'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb:28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Nossa Loja</p>
          <p className='text-gray-500'>54709 Broaklin Station <br /> Sala 350, New York City</p>
          <p className='text-gray-500'>Tel: +55 212-456-789 <br /> E-mail: contato@foreveryou.com</p>
          <p className='font-semibold text-xl text-gray-600'>Trabalhe Conosco</p>
          <p className='text-gray-500'>Saiba mais sobre nosso time de funcionários e oportunidades de emprego.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500' >Nossas Vagas</button>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default Contact
