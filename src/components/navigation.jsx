export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand' href='/'>
            AutoAdviser
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/prestations' className=''>
                Nos prestations
              </a>
            </li>
            <li>
              <a href='/garages' className=''>
                Nos garages
              </a>
            </li>
            <li>
              <a href='/entretien' className=''>
                Entrenir ma voiture
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href='' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Vous êtes garagiste ?
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/ConnexionProfessionnel">Connexion a mon espace pro</a>
                <br/>
                <a className="dropdown-item" href="InscriptionProfessionnel">Je souhaite m'inscrire</a>
              </div>
            </li>
            <li>
              <a href='/aide' className=''>
                Besoin d'aide ?
              </a>
            </li>
            <li>
              <a href="/compte"><i className="fa fa-user"></i></a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
