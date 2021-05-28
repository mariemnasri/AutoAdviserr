export const Vidange = (props) => {
  return (
    <div id='vidange'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <h1>
              {props.data ? props.data.title : 'Loading'}
              <span></span>
            </h1>
            <p>{props.data ? props.data.paragraph : 'Loading'}</p>
          

          </div>
          <div className='col-xs-12 col-md-6'>
            <img src='img/vidange.jpg' className='img-responsive' alt='' />{' '}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h4>Garages disponibles</h4>
        </div>
      </div>

    </div>

  )
}
