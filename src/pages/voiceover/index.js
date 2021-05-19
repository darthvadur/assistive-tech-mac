import React from "react"
import Layout from '../../components/layout'

const VoiceOverIndex = () => {
  
  return (
    <Layout title={'VoiceOver Screen Reader'}>
      <p>VoiceOver is the built in screen reader for MacOS (as well as iOS devices). Screen readers convert text to speech (or braille) allowing the user to read, interact and navigate with websites as well as interact with the computer and other software applications.</p>
      <p>Screen readers users are:</p>
      <ul>
        <li>the blind, low-vision and deafblind;</li>
        <li>users with cognitive disabilities</li>
      </ul>
      <p>Designers can help test screen reader accessibility at multiple stages during the website/app development process.</p>
    </Layout>
  )
}

export default VoiceOverIndex