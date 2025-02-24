import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';  

export const Header = (props) => {
  return (
    <header id='header'>
      <Carousel showThumbs={false} autoFocus autoPlay emulateTouch={false} swipeable={false}>
        {
          props.data && props.data.map((element, i) => {
            return (
              <div className='intro' key={i} style={{background : `url(${element.image})`, backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize: !element.paragraph ? 'contain' : 'cover'}}>
                <div className='overlay'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-8 col-md-offset-2 intro-text'>
                        <h1>
                          {element ? element.title : null}
                          <span></span>
                        </h1>
                        <p>{element ? element.paragraph : null}</p>
                        {element && element.paragraph ? <a
                          href='#features'
                          className='btn btn-custom btn-lg page-scroll'
                        >
                          Learn More
                        </a> : null}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      
      </Carousel>
   
    </header>
  )
}
