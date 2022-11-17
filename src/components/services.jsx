export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            We treat your problem with various professional technique such as Manual Therapy, 
            Myofascial Release, Electrotherapy, Traction Bed, Shockwave Therapy, Sports Massage and Therapeutic Exercises Prescription
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h4>{d.name}</h4>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}            
        </div>
      </div>
    </div>
  )
}
