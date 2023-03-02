import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <>
    <p>About page</p>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia assumenda expedita quaerat cumque recusandae ex iste atque voluptas voluptates? Sequi eveniet reiciendis unde atque fuga libero error saepe, at impedit aut odio sit similique cumque incidunt, dolores obcaecati esse? Quibusdam.
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia assumenda expedita quaerat cumque recusandae ex iste atque voluptas voluptates? Sequi eveniet reiciendis unde atque fuga libero error saepe, at impedit aut odio sit similique cumque incidunt, dolores obcaecati esse? Quibusdam.
    </p>

    <Link to='item1'>item1</Link>
    <Link to='item2'>item2</Link>

    <Outlet/>
</>
  )
}

export default About