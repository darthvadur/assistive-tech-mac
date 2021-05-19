import React from "react"
import Layout from '../../components/layout'

const VoiceOverBasics = () => {
  
  return (
    <Layout title={'VoiceOver Basics'}>
      <h2 className="mt-6">Best browser to use</h2>
      <p>VoiceOver works best with Safari.</p>
      <h2 className="mt-6">VO Modifier keys</h2>
      <p>VoiceOver uses the <code>^ Control + ⌥ Option</code> key combination (called “VO” keys) before each command.</p>
      <p>Deque University has a good summary of the <a href="https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts" target="_blank" rel="noopener noreferrer">VoiceOver keyboard shortcut commands</a>.</p>
      <p>You can make the VO keys sticky by pressing <code>VO + ;</code>. After that you would only need press the specific command key.</p>
      <h2 className="mt-6">The Rotor</h2>
      <p>If you press <code>VO + u</code> you will bring up a dialog box called the “Rotor”.</p>
      <p>The Rotor allows you to get a list of headings, link, form elements, landmarks, tables, etc. Screen reader users rarely read through an entire page to find information. They are more likely to use the Rotor to navigate to different areas quickly.</p>
    </Layout>
  )
}

export default VoiceOverBasics