import React from 'react'
import './banner.css'
import Carousel from 'react-material-ui-carousel'


const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/09/GIF_amazon.png?ssl=1",
  "https://infocoverage.com/wp-content/uploads/2021/10/Amazon-Great-Indian-Festival-Sale-Offers.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/AugART23_T1_Unrec_PC_Header_V2.jpg"
]
const Banner = () => {
  return (
    <Carousel className='caraousel'
      autoPlay={true}
      animation='slide'
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: "white",
          color: "black",
          borderRadius: 0,
          marginTop: -22,
          height: "104px"
        }
      }}
    >
      {
        data.map((imag, i) => {
          return (
            <>
              <img src={imag} alt='' className='banner_img'/>
            </>
          )
        })
      }
   </Carousel>
  )
}

export default Banner
