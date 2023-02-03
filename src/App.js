import './App.sass'
import carousel_1 from './content/carousel_1.png'
import carousel_2 from './content/carousel_2.png'
import carousel_3 from './content/carousel_3.png'
import carousel_4 from './content/carousel_4.png'
import carousel_5 from './content/carousel_5.png'
import carousel_6 from './content/carousel_6.png'
import carousel_7 from './content/carousel_7.png'
import carousel_8 from './content/carousel_8.png'
import carousel_9 from './content/carousel_9.png'
import carousel_10 from './content/carousel_10.png'
import carousel_11 from './content/carousel_11.png'
import carousel_12 from './content/carousel_12.png'

const Header = () => {
  return (
    <div className="header">
        <div className="header-logo"></div>
        <div>+7 (495) 495-49-54</div>
    </div>
  )
}

const Article = () => {
  return (
    <article>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
      <p>
        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    </article>
  )
}

const ArticlesSection = (props) => {
  return (
    <section className={`section-articles${props.sectionNum === 1 ? '-first' : ''}`}>
      <h1>ut aliquip ex ea commodo consequat</h1>
      <div className="section-top">
        <div className={`image-top-${props.sectionNum}`}></div>
        <Article/>
      </div>
      <div className="section-bottom">
        <Article/>
        <div className={`image-bottom-${props.sectionNum}`}></div>
      </div>
    </section>
  )
}

const CarouselSection = () => {
  return (
    <section className="section-carousel">
      <h1>Lorem ipsum dolor sit amet</h1>
        <div className="carousel">
          <img src={carousel_1} alt="carousel_1"/>
          <img src={carousel_2} alt="carousel_2"/>
          <img src={carousel_3} alt="carousel_3"/>
          <img src={carousel_4} alt="carousel_4"/>
          <img src={carousel_5} alt="carousel_5"/>
          <img src={carousel_6} alt="carousel_6"/>
          <img src={carousel_7} alt="carousel_7"/>
          <img src={carousel_8} alt="carousel_8"/>
          <img src={carousel_9} alt="carousel_9"/>
          <img src={carousel_10} alt="carousel_10"/>
          <img src={carousel_11} alt="carousel_11"/>
          <img src={carousel_12} alt="carousel_12"/>
        </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer> © TEST, 1022–2022</footer>
  )
}

function App() {
  let scrollDirection = 'down'
  let lastScroll = 0

  window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY + window.innerHeight
    scrollDirection = currentScroll > lastScroll ? 'down' : 'up'
    lastScroll = currentScroll

    if (document.getElementsByClassName("section-carousel")) {
      const body = document.querySelector("body")

      if (currentScroll >= 2400 && currentScroll <= 2500) {
        body.style.overflow = 'hidden'
        const carousel = document.getElementsByClassName("carousel")[0]
        let isAtEnd = Math.round(carousel.scrollLeft + carousel.offsetWidth) >= carousel.scrollWidth
        let isAtStart = carousel.scrollLeft === 0 ? true : false
        let scroll
        if (isAtEnd) {
          scroll = carousel.scrollWidth
        } else if (isAtStart) {
          scroll = 0
        } else {
          scroll = carousel.scrollLeft + carousel.offsetWidth
        }

        const handleWheel = (e) => {
          if (e.deltaY > 0) {
            carousel.scrollTo({
              left: scroll +=200,
              top: 0,
              behavior: 'smooth'
            })
            if (isAtEnd) {
              body.style.overflow = 'auto'
              body.removeEventListener("wheel", handleWheel)
            }
          } else {
            carousel.scrollTo({
              left: scroll -=200,
              top: 0,
              behavior: 'smooth'
            })
            if (isAtStart) {
              body.style.overflow = 'auto'
              body.removeEventListener("wheel", handleWheel)
            }
          }
          isAtEnd = Math.round(carousel.scrollLeft + carousel.offsetWidth) >= carousel.scrollWidth
          isAtStart = carousel.scrollLeft === 0 ? true : false

          if ((isAtEnd && scrollDirection === 'down') || (isAtStart && scrollDirection === 'up')) {
            body.style.overflow = 'auto'
            body.removeEventListener('wheel', handleWheel)
          }
        }
        body.addEventListener('wheel', handleWheel)
      }   
    }
  })
  
  return (
    <div className="App">
      <Header/>
      <ArticlesSection sectionNum={1}/>
      <CarouselSection/>
      <ArticlesSection sectionNum={2}/>
      <Footer/>
    </div>
  )
}

export default App
