'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import NavMenu from '../NavMenu'

import styles from './Header.module.css'

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const lastScrollPosition = useRef<number>(0)
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)

  const scrollHandler = useCallback(() => {
    const scrollThreshold = 10
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
    
    // Если скроллим вниз и перешли порог
    if (currentScrollPosition > lastScrollPosition.current && currentScrollPosition > scrollThreshold) {
      headerRef.current!.classList.add(styles.hide)
    } else if (currentScrollPosition < lastScrollPosition.current) {
      headerRef.current!.classList.remove(styles.hide)
    }
    
    lastScrollPosition.current = currentScrollPosition
  }, [])

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad/i.test(navigator.userAgent)
    if(isMobile) window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [scrollHandler])

  useEffect(() => {
    if(isOpenMenu) document.body.style.overflowY = 'hidden'
    if(!isOpenMenu) document.body.style.overflowY = 'auto'
  }, [isOpenMenu])

  const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting && headerRef.current) {
      headerRef.current.classList.remove('hide')
    } else if(headerRef.current){
       headerRef.current.classList.add('hide')
    }
  },
  { threshold: 0.1 }
)

  return (
    <header className={styles.header} ref={headerRef}>
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={styles.toggleMenuButton}
        aria-label="openMenu"
      >
        <img src="img/toggle-menu.svg" alt="toggle-menu" width="100%" />
      </button>
      <div className={styles.logo}><p >biscuit</p></div>
      <NavMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      <div className={styles.locationBlock}>
        <img
          src="img/location.svg"
          alt="location"
          className={styles.locationImg}
        />
        <p className={styles.locationText}>калуга</p>
      </div>
    </header>
  )
}

export default Header
