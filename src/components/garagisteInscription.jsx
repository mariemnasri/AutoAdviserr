import { useState } from 'react'
import emailjs from 'emailjs-com'


const initialState = {
  name: '',
  email: '',
  city: '',
  services: '',
  adress: '',
  photos: '',

}
export const GaragisteInscription = (props) => {

      const [{ name, email, city, services, adress, photos }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email,)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (

    <div id='garagiste'>
      <div className='container'>

        <div className='row'>
          <div className='section-title'>
            <h2>Inscrivez-vous a votre espace professionnel </h2>

          </div>
          <form name='' validate onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='form-control'
                    placeholder='Nom du garage'
                    required
                    onChange={handleChange}
                  />
                  <p className='help-block text-danger'></p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='form-control'
                    placeholder='Email'
                    required
                    onChange={handleChange}
                  />
                  <p className='help-block text-danger'></p>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    className='form-control'
                    placeholder='Mot de passe'
                    required
                    onChange={handleChange}
                  />
                  <p className='help-block text-danger'></p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input
                    type='password'
                    id='password2'
                    name='password'
                    className='form-control'
                    placeholder='Mot de passe'
                    required
                    onChange={handleChange}
                  />
                  <p className='help-block text-danger'></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='col-md-6'>
                <div className='form-group'>
                  <select className="custom-select" id="City">
                    <option selected>Ville</option>
                    <option >Ariana</option>
                    <option >Beja</option>
                    <option >Ben Arous</option>
                    <option >Bizerte </option>
                    <option >Gabes </option>
                    <option >Gafsa </option>
                    <option >Jandouba </option>
                    <option >Kairoun </option>
                    <option >Kasserine </option>
                    <option >Kebili </option>
                    <option >Kef </option>
                    <option >Mahdia </option>
                    <option >Manouba </option>
                    <option >Medenine </option>
                    <option >Monastir </option>
                    <option >Nabeul </option>
                    <option >Sfax </option>
                    <option >Sidi Bouzid </option>
                    <option >Siliana </option>
                    <option >Sousse </option>
                    <option >Tataouine </option>
                    <option >Tozeur </option>
                    <option >Tunis </option>
                    <option >Zaghouane </option>
                  </select>

                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className="form-check-label" for="defaultCheck1">
                    Default checkbox
                  </label>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />

                </div>
              </div>

            </div>

          


            <div id='success'></div>
            <button type='submit' className='btn btn-custom btn-lg'>
              S'inscrire
                </button>
          </form>
        </div>



      </div>
    </div>



  )
}

