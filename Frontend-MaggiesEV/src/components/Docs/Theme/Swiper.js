import React from "react"
import { Button } from "react-bootstrap"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import Brands from "../../Brands"

const Swiper = () => {
  return (
    <div id="swiper" className="docs-item element">
      <h5 className="text-uppercase mb-4">Swiper</h5>
      <div className="docs-desc">
        <p className="lead">
          Touch enabled React plugin that lets you create a beautiful responsive
          carousel sliders.
        </p>
        <p>
          Used for the homepage carousel and for the brands carousels. You can
          use Swiper templates included in this template or import and customize
          on your own using docs for this plugin.
        </p>
        <p>
          <Button
            variant="outline-dark"
            size="sm"
            href="https://swiperjs.com/react"
          >
            Visit plugin website
          </Button>
        </p>
      </div>
      <div className="mt-5">
        <h6>Brands Swiper</h6>
        <Brands className="mt-3" />
      </div>
      <div className="mt-4">
        <SyntaxHighlighter
          language="javascript"
          style={tomorrow}
          className="rounded shadow p-4"
        >
          {highlightCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Swiper

const highlightCode = `import { Swiper, SwiperSlide } from "swiper/react"
import brandsLogos from '/brands-logos.json'

const Component = () => {

    const params = {
        className: 'brands-slider pb-5',
        modules: [Pagination],
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        roundLengths: true,
        pagination: {
            type: "bullets",
            clickable: true,
            dynamicBullets: true
        },
        breakpoints: {
            1200: {
                slidesPerView: 5
            }
        }
    }
    
    return (
        <Swiper {...params}>
            {brandsLogos.map((brand, index) =>
                <SwiperSlide key={index} className="h-auto d-flex align-items-center justify-content-center">
                    <img
                        src={brand.img}
                        alt={brand.title}
                        className="img-fluid w-6rem opacity-7"
                    />
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default Component
`
