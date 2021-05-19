import React from "react"
import {useState} from 'react'
import Layout from '../../components/layout'

const KeyboardOperableDemo = () => {

  const [clicked, setClicked] = useState(false)

  const handleClick = e => {
    e.preventDefault();
    setClicked(true);
    const timeout = setTimeout(() => {
      setClicked(false)
      clearTimeout(timeout)
    }, 1500)
  }

  return (
    <Layout title={'Keyboard Operability Demo'}>
      <p>Try navigating through and activating the following content by keyboard only.</p>
      <div className="row">
        <div className="col">
          <p>A real link <a href="#test" onClick={e => handleClick(e)}> to nowhere 1</a></p>
          <p>A fake link <span className="fake-link" role="link" tabIndex="0" onClick={e => handleClick(e)}>to nowhere 2</span> (incorrect)</p>
          <p><button type="button" className="btn btn-primary" onClick={e => handleClick(e)}>A primary button</button> <button type="button" className="btn btn-secondary" onClick={e => handleClick(e)}>A secondary button</button></p>
          <p><label className="font-bold block mb-2" htmlFor="city">City: </label>
          <select id="city">
            <option>--Select--</option>
            <option>Burnaby</option>
            <option>Surrey</option>
            <option>Vancouver</option>
          </select>
          </p>
          <fieldset>
            <legend className="font-bold block mb-2 text-base">Do you own a dog?</legend>
            <p><label className="mr-2"><input type="radio" name="dog" value="Yes" /> Yes</label>
          <label><input type="radio" name="dog" value="Yes" /> No</label>
          </p>
        </fieldset>
        <fieldset>
            <legend className="font-bold block mb-2 text-base">If yes what type of dog(s)?</legend>
            <p><label className="mr-2"><input type="checkbox" name="dogType" value="Lab" /> Labrador</label>
          <label><input type="checkbox" name="dogType" value="Shepard" /> German Shepard</label>
        </p>
        </fieldset>
        
        </div>
        <div className="col-md-3">
          <div className="element-clicked" hidden={!clicked}>Element Clicked</div>
        </div>
      </div>
      
    </Layout>
  )
}

export default KeyboardOperableDemo