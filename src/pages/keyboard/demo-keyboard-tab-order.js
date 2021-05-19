import React from "react"
import Layout from '../../components/layout'

const KeyboardOrderDemo = () => {

  return (
    <Layout title={'Keyboard Tab Order Demo'}>
      <p>Try tabbing through the following cards.</p>
      <h2>Expected order:</h2>
      <div className="row cards">
        <div className="col">
          <a href="#targ-1" className="card">
            <div className="card-body">
              <h3 className="card-title">Card 1</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#targ-2" className="card">
            <div className="card-body">
              <h3 className="card-title">Card 2</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#targ-3" className="card">
            <div className="card-body">
              <h3 className="card-title">Card 3</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </a>
        </div>
      </div>
      <h2 className="mt-6">Unexpected order:</h2>
      <div className="row cards with-ordering">
        <div className="col">
          <a href="#targ-4" className="card">
            <div className="card-body">
              <h3 className="card-title">Card 4</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#targ-5" className="card">
            <div className="card-body">
              <h3 className="card-title">Card 5</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#targ-6" className="card">
            <div className="card-body">
              <h3 className="card-title">Card 6</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </a>
        </div>
      </div>
      
    </Layout>
  )
}

export default KeyboardOrderDemo