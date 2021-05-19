import React from "react"
import Layout from '../../components/layout'
import VODialogBox from '../../images/voiceover-dialog-box.jpg'

const VoiceOverEnabling = () => {
  
  return (
    <Layout title={'Enabling VoiceOver'}>
      <h2>Turning VoiceOver on/off</h2>
      <p>You can turn VoiceOver on/off by:</p>
      <ol>
        <li>selecting “VoiceOver” in the Accessibility menu bar (at top)</li>
        <li>pressing <code>⌘ Command + F5</code></li>
      </ol>
      <p>After enabling you will see a black dialog box appear and the screen reader will start reading the current window. You can also turn off VoiceOver by clicking the “x” in the dialog.  
        <img style={{width: '70%'}} className="block" src={VODialogBox} alt="Voiceover dialog" />
      </p>
      
    </Layout>
  )
}

export default VoiceOverEnabling