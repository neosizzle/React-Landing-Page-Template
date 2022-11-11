export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Meet the Team</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        {/* <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div> */}
        {
          props.data?
          props.data.map((d, i) =>
          (
            window.innerWidth <= 768 || i % 2 == 0 ? 
            <div key={`${d.name}-${i}`} className="row">
            <div  className='col-md-3 col-sm-12 order-2'>
              <img src={d.img} alt='...' className='team-img' />
            </div>
            <div  className='col-md-9 col-sm-12 team-content'>
              <h4>{d.name}</h4>
              <p>{d.job}</p>
              <div>
                {d.desc}
              </div>
            </div>
          </div> :
          <div key={`${d.name}-${i}`} className="row">
          <div  className='col-md-9 col-sm-12 team-content'>
            <h4>{d.name}</h4>
            <p>{d.job}</p>
            <div>
            {d.desc}
            </div>
          </div>
          <div  className='col-md-3 col-sm-12 order-2'>
            <img src={d.img} alt='...' className='team-img' />
          </div>
        </div>
          )) : 
          "loading"
        }
      </div>
    </div>
  )
}
