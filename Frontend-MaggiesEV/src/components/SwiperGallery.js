import React, { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import InnerImageZoom from "react-inner-image-zoom"
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css"
import Icon from "./Icon"
import { Button, Badge } from "react-bootstrap"
import Image from "./Image"
// swiper core styles
import "swiper/css"
import { getDefaultAltImgSrc } from "../my-tools/my-helper"



const SwiperGallery = (props) => {

	const [domLoaded, setDomLoaded] = useState(false)

	useEffect(() => {
		setDomLoaded(true)
	}, [])


	// Modify imageLinks of product.
	const data = [];
	props.data.forEach(imageLink => {
		data.push("/img/product/" + imageLink);
	});


	const [lightBoxOpen, setLightBoxOpen] = React.useState(false)
	const [activeImage, setActiveImage] = React.useState(0)
	const [activeSlide, setActiveSlide] = React.useState(0)

	const ref = React.useRef(null)



	const onClick = (index) => {
		setActiveImage(index)
		setLightBoxOpen(!lightBoxOpen)
	}


	const slideTo = (index) => {
		setActiveSlide(index)
		if (ref.current !== null && ref.current.swiper !== null) {
			ref.current.swiper.slideToLoop(index)
		}
	}


	const params = {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		on: {
			slideChange: () => setActiveSlide(ref.current.swiper.realIndex),
		},
	}

	const altImg = "/img/model_s_01.jpg";


	return (
		<React.Fragment>


			<div className="detail-carousel">

				{domLoaded && (
					<Swiper {...params} ref={ref}>
						{data.map((item, index) => (
							<SwiperSlide key={index}>
								<InnerImageZoom
									hideHint
									src={item}
									zoomSrc={item}
									alt={altImg}
									zoomType="hover"
									className="cursor-pointer"
								/>

								<Button variant="photoswipe" onClick={() => onClick(index)}>
									<Icon icon="expand-1" className="svg-icon-heavy" />
								</Button>

							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>


			<Lightbox
				open={lightBoxOpen}
				close={() => setLightBoxOpen(false)}
				slides={data?.map((image) => ({
					alt: altImg,
					src: image,
				}))}
				index={activeImage}
			/>



			<div className="swiper-thumbs">
				{data.map((item, index) => (
					<button
						key={index}
						onClick={() => slideTo(index)}
						className={`swiper-thumb-item detail-thumb-item mb-3 ${activeSlide === index ? "active" : ""
							}`}
					>

						<img
							style={{
								width: "98px",
								height: "98px",
								objectFit: "contain",
								backgroundColor: "rgba(0, 0, 0, 0.4)"
							}}
							src={item}
							alt={getDefaultAltImgSrc()}

						/>

					</button>
				))}
			</div>


		</React.Fragment>
	)
}

export default SwiperGallery
