
import './App.css';
import { useState } from 'react';


function App() {

  const[weight,setweight] = useState(0);
  const[height,setheight] = useState(0);
  const[message,setmessage] = useState(" ");
  const[bmi,setbmi] = useState(" ");

  let calcbmi = (e) => {
    
    e.preventDefault()

    if(weight===0 || height===0)
      {
        alert("Enter valid Height or weight")
      }

      else
      {
        let bmi = (weight/(height*height) * 703)
        setbmi(bmi.toFixed(3))

        if(bmi<25)
          {
            setmessage("You are less weight")
          }
          else if(bmi>=25 && bmi<30)
          {
            setmessage("You are Healthy")
          }
          else
          setmessage("You are overweight")
      }
  }

  let reload = () =>
    {
      window.location.reload()
    }
  return (
    <div className="App">
      <div className="container">
        <form onSubmit={calcbmi}action="">
          <label htmlFor="">Weight(in lbs)</label>
          <br />
          <input type="text" placeholder="Enter weight Value" value={weight} 
          onChange={(e)=> {setweight(e.target.value)}}/>
          <br />
          <label htmlFor="">Height(in inch)</label>
          <br />
          <input type="text"placeholder="Enter Height Value" value={height}
          onChange={(e)=> {setheight(e.target.value)}}/>
          <br />
          <br />

          <button className='submit_btn'type="submit">SUBMIT</button>
          <button className='reset_btn' type='reset'onClick={reload}>RELOAD</button>
          <br />

          <p>Your BMI is: {bmi}</p>
          
          <h2>{message}</h2>


        </form>
      </div>
    </div>
  );
}

export default App;
