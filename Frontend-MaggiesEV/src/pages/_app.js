import React from "react"
import AOS from "aos"
import Layout from "../components/Layout"

import "aos/dist/aos.css"

// swiper core styles
import "swiper/css"

// modules styles
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/parallax"
import "swiper/css/autoplay"
import "swiper/css/effect-fade"

import "../fonts/stylesheet.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "../scss/style.default.scss"

const App = ({ Component, pageProps }) => {
  React.useEffect(() => {
    AOS.init({
      // dont' run in IEs as it's really slow
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      offset: 120, // offset (in px) from the original trigger point
      delay: 150, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    })
    AOS.refresh()
  })
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
