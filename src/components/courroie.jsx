export const Courroie = (props) => {
    return (
        <div id="courroie" >
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
                        <img src='img/courroie.jpg' className='img-responsive' alt='' />{' '}
                    </div>
                    <p>{props.data ? props.data.paragraph2 : 'Loading'}</p>
                    <p></p>
                    <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.liste.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
                    
                </div>
                <br/> <br/>
                <h2> Quels sont les détails du devis de changement de kit de distribution ?</h2>
                <p>{props.data ? props.data.paragraph3 : 'Loading'}</p>

           
            </div>
            <div className="container">
                <div className="row">
                    <h4>Garages disponibles</h4>
                </div>
            </div>

        </div>


    )
}