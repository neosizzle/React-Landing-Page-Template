export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            We treat your problem with various professional technique such as manual therapy, 
            Myofascial Release, Electrotherapy, traction bed, Shockwave therapy, sports massage and therapeutic exercises prescription
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
