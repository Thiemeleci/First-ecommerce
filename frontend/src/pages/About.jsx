import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'SOBRE'} text2={'NÓS'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>A Forever nasceu de uma paixão pela inovação e de um desejo de revolucionar
             a forma como as pessoas fazem compras online. A nossa viagem começou com uma
              ideia simples: fornecer uma plataforma onde os clientes podem facilmente
               descobrir, explorar e comprar uma vasta gama de produtos a partir do conforto
                das suas casas.</p>
          <p>Desde a nossa criação, temos trabalhado incansavelmente para criar uma seleção diversificada
             de produtos de alta qualidade que satisfaçam todos os gostos e preferências. Da moda e beleza
              à eletrónica e artigos essenciais para a casa, oferecemos uma vasta coleção proveniente de
               marcas e fornecedores de confiança.</p>
          <b className='text-gray-800'>Nossa Missão</b>     
          <p>A nossa missão na Forever é dar aos clientes a possibilidade de escolha, conveniência e confiança.
             Estamos empenhados em proporcionar uma experiência de compra perfeita que exceda
              as expectativas, desde a pesquisa e encomenda até à entrega e muito mais.</p>
        </div>
      </div>

      <div className=' text-xl py-4'>
        <Title text1={'POR QUE ESCOLHER A'} text2={'FOREVER?'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
        <b>Garantia De Qualidade:</b>
        <p className=' text-gray-600'>Selecionamos e examinamos meticulosamente cada produto para garantir que cumpra
           com nossos rigorosos padrões de qualidade.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
        <b>Comodidade:</b>
        <p className=' text-gray-600'>Com a nossa interface de fácil utilização e o nosso processo de encomenda sem complicações,
           fazer compras nunca foi tão fácil.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
        <b>Serviço Excepcional Ao Cliente:</b>
        <p className=' text-gray-600'>A nossa equipa de profissionais dedicados está aqui para o ajudar, assegurando que a sua satisfação é a
           nossa principal prioridade.</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
