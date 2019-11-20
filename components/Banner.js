// Module imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'





// Local constants
const navItems = [
  {
    href: '/',
    icon: 'home',
    title: 'Home',
  },
  {
    href: '/about',
    icon: 'toilet',
    title: 'About',
  },
]





const Banner = () => (
  <nav role="banner">
    <ul>
      {navItems.map(({
        href,
        icon,
        iconPrefix,
        title,
      }) => (
        <li key={`${title}-${href}`}>
          <Link href={href}>
            <a>
              <FontAwesomeIcon
                fixedWidth
                icon={[(iconPrefix || 'fas'), icon]}
                title={title} />

              <span>{title}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)





export default Banner
