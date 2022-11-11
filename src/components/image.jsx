import { useState } from "react"
import { Carousel } from 'react-responsive-carousel';  


const CarouselDialog = ({images, setShowDialog}) => {

  const handleClick = (ev) => {
    ev.preventDefault();
    if (ev.target == ev.currentTarget) setShowDialog(false);
  }

  return(
    <div className="carousel-dialog-container" onClick={handleClick}>
        <div className="carousel-dialog">
        <Carousel showThumbs={false} autoFocus autoPlay emulateTouch={false} swipeable={false}>
        {
          images && images.map((element, i) => {
            return (
              <img
              src={element}
              alt={`porofolio-${i}`}
              key={i}
              
              />
            )
          })
        }
      
      </Carousel>
        </div>
    </div>
  )
}

export const Image = ({ title, images }) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <div
          className="image-link"
          title={title}
          data-lightbox-gallery='gallery1'
          onClick={()=>setShowDialog(true)}
        >
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={images[0]}
            className='img-responsive'
            alt={title}
          />{' '}
        </div>{' '}
      </div>
        {
          showDialog ? 
          <CarouselDialog setShowDialog={setShowDialog} images={images}/> : 
          null
        } 
    </div>
  )
}