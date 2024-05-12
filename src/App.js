import logo from './logo.svg';
import './App.css';
import {React} from 'react';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({
    holderName: " ",
    cardNumber:" ",
    expMonth: " ",
    cvc: " "
  })

  

  const [submit, setSubmit] = useState(false)

  const handleSubmit = (event) =>{
      event.preventDefault()
    setSubmit(!submit)
  }

  const handleChange = (event)=>{
    const {name,  value, type} = (event.target)
    setData(prevData => {
      return{
        ...prevData,
        [name]: value
      }
    })

  }
  return (
    <div className="App-container">
      <div className='main'>
        <div className='cards'>
          <div className='front'>
          <img className='img-front' src='bg-card-front.png' alt='card-front'/>
          <div className='img-inner'>
          <img className='card-logo' src='card-logo.svg' alt='card-logo'/>
          <p className='img-number'>{data.cardNumber}</p>

          <div className='card-bottom-text'>
            <p className='holder-name'>{data.holderName}</p>
            <p>{data.expMonth}</p>
          </div>
          </div>
          </div>
          <div className='back-img'>
          <img className='img-back' src='bg-card-back.png' alt='card-back'/>
          </div>
        </div>
        
          <form onSubmit={handleSubmit} className='form-section'>
            
            { submit ? (
              <div className='submited'>
                <img src='icon-complete.svg' /> 
                <h2 className='Thanks'>Thank You</h2>
                <p>We've added your card details</p>
                <button className='cont-button'>Continue</button>
              </div>
  
             ):
             (
            <div>
              <div>
                <label htmlFor='holder-name' >CARDHOLDEER NAME</label>
                  <input 
                    className='holder-name'
                    type='text'
                    
                    id='holder-name'
                    name='holderName'
                    value={data.holderName}
                    placeholder='e.g  Jane Appleseed'
                    onChange={handleChange}
                  />
              </div>


               <div>
                  <label htmlFor='card-number'>CARD NUMBER</label>
                    <input 
                       className='card-number'
                      type='text'
                      maxLength={19}
                      required
                      id='card-number'
                      name='cardNumber'
                      value={data.cardNumber}
                      onChange={handleChange}
                      placeholder='1234567891240000'/>
                </div>

           <div className='date-cvc'>
            <div>
              <label htmlFor='exp-date'>EXP Date (mm/yy)</label>
                <input
                   className='exp-date'
                  type='month'
                  id='exp-date'
                  name='expMonth'
                  onChange={handleChange}
                  value={data.expMonth}
                  placeholder='MM'
                  required
                />
            </div>

             <div>
             <label htmlFor='cvc'>CVC</label>
              <input
                className='cvc'
                type='number'
                placeholder='e.g 123'
                name='cvc'
                onChange={handleChange}
                id='cvc'
                value={data.cvc}
                required
              />
             </div>
             </div>
             <button className='confirm-btn'>confirm</button>
             </div>
             )}
            
            
          </form>
        
      </div>
      
    </div>
  );
}

export default App;
