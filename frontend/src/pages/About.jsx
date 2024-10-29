import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className=' text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className=' my-10 flex flex-col md:flex-row gap-16'>
        <img className=' w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Forever, where style meets quality and affordability! At TrendWeave, we believe that fashion should be accessible to everyone, which is why we bring you the latest in men’s, women’s, and kids' clothing with an extensive collection. From casual essentials to chic evening wear, our goal is to inspire confidence in every outfit.</p>
          <p>Our team of designers and fashion experts curates a diverse range of styles, ensuring that you’ll find pieces that suit your unique taste. We prioritize sustainable practices, working closely with ethical suppliers to bring you responsibly sourced materials without compromising on quality.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to make fashion accessible, inclusive, and sustainable for everyone. We aim to empower individuals to express their unique style confidently while promoting ethical and environmentally conscious practices within the fashion industry.</p>
        </div>
      </div>
      <div className=' text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className=' flex flex-col md:flex-row text-sm mb-20'>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Forever, quality assurance is at the heart of everything we do. We are dedicated to delivering clothing that meets the highest standards of comfort, durability, and style. Our QA process starts from carefully sourcing premium materials and continues through rigorous checks at every stage of production, ensuring that each piece is crafted with attention to detail and precision.</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At Forever, we’re all about making fashion accessible and shopping easy. Our online store is designed with convenience in mind, providing a seamless shopping experience right from browsing to checkout. With carefully categorized collections, detailed product descriptions, and easy-to-use filters, finding the perfect style has never been simpler. We offer multiple payment options, a responsive customer service team, and a hassle-free return policy to ensure a smooth and satisfying experience every time.</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Forever, we believe that exceptional customer service is the cornerstone of a great shopping experience. Our dedicated team is committed to providing personalized assistance, ensuring that every interaction is friendly, informative, and efficient. Whether you have questions about sizing, need help with an order, or require assistance with returns, our customer service representatives are always ready to help.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
