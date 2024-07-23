import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className="flex justify-between px-8 py-4">
      <section className="flex justify-between gap-8">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Works</a>
      </section>
      <section>
        Logo
      </section>
      <section className="flex justify-between gap-4 items-center">
        <span>Insights</span>
        <Button>Get Started</Button>
      </section>
    </header>
  )
}

export default Header
