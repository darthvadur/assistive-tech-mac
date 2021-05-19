import React from "react"
import '../scss/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import sysPrefImage1 from '../images/sys-pref-1.jpg'
import sysPrefImage2 from '../images/sys-pref-2.jpg'

const IndexPage = () => {
  return (
    <Layout title={'Overview'}>
      <p>MacOS has a number of good accessibility features which designers and developers can use to test website accessibility.</p>
      <h2>How to turn on features</h2>
      <ol>
        <li>Open System Preferences and select the “Accessibility” option:
        <img src={sysPrefImage1} alt="System preferences window highlighting Accessibility option in red outline" />
        </li>
        <li>You can set a menu bar icon for quick access to turn on/off features:
        <img src={sysPrefImage2} alt="System preferences Accessibility panel showing checkbox to turn on menu bar option." />
        </li>
      </ol>
    </Layout>
  )
}

export default IndexPage
