import React from "react"
import Layout from '../../components/layout'
import image1 from '../../images/vh0034x930d76ds-23dx.gif'


const DemoAltText = () => {

  return (
    <Layout title={'Alt Text Demo'}>
      <p>Try reading the following images with VoiceOver.</p>
      <div className="row">
        <div className="col">
          <img src={image1} />
        </div>
        <div className="col">
          <img src={image1} alt="Mix of sun an clouds" />
        </div>
        <div className="col">
          <figure><img src={image1} alt="" />
            <figcaption>Mix of sun and clouds</figcaption>
          </figure>
        </div>
      </div>
    </Layout>
  )
}

export default DemoAltText