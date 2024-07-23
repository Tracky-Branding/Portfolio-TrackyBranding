import React from 'react'

const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-8 py-4">
      <section>
        <h1>Let's Connect</h1>
        <a href="mailto:tracky.branding@gmail.com">tracky.branding@gmail.com</a>
      </section>
      <section className="flex items-start justify-between gap-8">
        <div>
            <h1>Get to know us</h1>
            <span className="flex flex-col gap-2 mt-4">
                <a href="#">About</a>
                <a href="#">Core Values</a>
                <a href="#">Meet our people</a>
            </span>
        </div>
        <div >
            <h1>Our Services</h1>
            <span className="flex flex-col gap-2 mt-4">
                <a href="#">Branding</a>
                <a href="#">Marketing</a>
                <a href="#">Media</a>
            </span>
        </div>
        <div >
            <h1>Have an idea</h1>
            <span className="flex flex-col gap-2 mt-4">
                <a href="#">Contact us</a>
                <a href="#">Our policies</a>
            </span>
        </div>
      </section>
    </footer>
  )
}

export default Footer
