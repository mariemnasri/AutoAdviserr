import { Contact } from './contact'

export const Garages = (props) => {
  return (
    <div id='garages' className="text-center">
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>

            <img src='img/garages.jpg' className='img-responsive' alt='' />
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='garages-text'>
              <h2>Nos garages</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>Comment choisir le meilleur ?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <div className="">
          <h3>Les garages inscrits sur AutoAdviser </h3>
        </div>
        </div>


     
     <br /> <br/><br /> <br/>
      <Contact />
      
    </div>
  )
}
