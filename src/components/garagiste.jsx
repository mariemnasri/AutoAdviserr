export const Garagiste = (props) => {
  return (        
        <div id='garagiste' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Vous êtes garagistes ?</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                 
                 <a href=""><i className={d.icon}></i></a>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
        
     
  )
}
