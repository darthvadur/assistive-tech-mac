import React from "react"
import {useState, useRef} from 'react'
import Layout from '../../components/layout'

const KeyboardFocusIndicatorDemo = () => {

  const [currentIndicator, setIndicator] = useState('default')

  const contentRef = useRef(null)

  const handleClick = selection => {
    setIndicator(selection)
    contentRef.current.focus()
  }

  return (
    <Layout title={'Keyboard Focus Indicator Demo'}>
      <p>Try changing the focus indicator styles and tab through the elements below.</p>

      <div role="group" className="mb-4" aria-label="Focus style options">
        <button type="button" className="btn btn-light toggle-btn mr-4" onClick={() => handleClick('default')} aria-pressed={currentIndicator === 'default' ? true : false}>Default browser indicator</button> 
        <button type="button" className="btn btn-light toggle-btn mr-4" onClick={() => handleClick('enhanced')} aria-pressed={currentIndicator === 'enhanced' ? true : false}>Enhanced focus indicator</button> 
        <button type="button" className="btn btn-light toggle-btn mr-4" onClick={() => handleClick('none')} aria-pressed={currentIndicator === 'none' ? true : false}>No focus indicator (no outline)</button> 
      </div>

      <div ref={contentRef} tabIndex="-1" className={`container focus-${currentIndicator}`}>
      <p>A real link <a href="#test"> to nowhere 1</a></p>
      
      
        <form>
          <p><label className="font-bold block mb-2" htmlFor="name">Name: </label>
          <input type="text" id="name" /></p>
          <p><label className="font-bold block mb-2" htmlFor="city">City: </label>
          <select id="city">
            <option>--Select--</option>
            <option>Burnaby</option>
            <option>Surrey</option>
            <option>Vancouver</option>
          </select>
          </p>
          <fieldset>
            <legend className="font-bold block mb-2">Do you own a dog?</legend>
            <p><label className="mr-2"><input type="radio" name="dog" value="Yes" /> Yes</label>
          <label><input type="radio" name="dog" value="Yes" /> No</label>
          </p>
          </fieldset>
            
          
        </form>
      </div>

    </Layout>
  )
}

export default KeyboardFocusIndicatorDemo