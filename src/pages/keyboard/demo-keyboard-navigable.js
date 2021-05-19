import React from "react"
import Layout from '../../components/layout'

const KeyboardNavigatableDemo = () => {

  return (
    <Layout title={'Keyboard Navigation Demo'}>
      <p>Try tabbing through the following content. You should be able to reach all elements.</p>
      <p>A real link <a href="#test"> to nowhere 1</a></p>
      <p>A fake link <span className="fake-link" role="link">to nowhere 2</span> (incorrect)</p>
      
      <p>A hidden focusable link which appears on focus (correct): <a href="#test3" className="sr-only sr-only-focusable">to nowhere 3</a></p>
      <p>A hidden focusable link (incorrect): <a href="#test2" className="sr-only">to nowhere 4</a></p>
      <p><button type="button" className="btn btn-primary">A primary button</button> <button type="button" className="btn btn-secondary">A secondary button</button></p>
      <form>
        <p><label className="font-bold block mb-2" htmlFor="name">Name: </label>
        <input type="text" id="name" /></p>
        <p><label className="font-bold block mb-2" htmlFor="city">City: </label></p>
        <p><select id="city">
          <option>--Select--</option>
          <option>Burnaby</option>
          <option>Surrey</option>
          <option>Vancouver</option>
        </select></p>
        <fieldset>
            <legend className="font-bold block mb-2 text-base">Do you own a dog?</legend>
            <p><label className="mr-2"><input type="radio" name="dog" value="Yes" /> Yes</label>
          <label><input type="radio" name="dog" value="Yes" /> No</label>
          </p>
        </fieldset>
      </form>
    </Layout>
  )
}

export default KeyboardNavigatableDemo