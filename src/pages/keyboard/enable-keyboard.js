import React from "react"
import Layout from '../../components/layout'
import sysPrefImage3 from '../../images/sys-pref-3.jpg'
import sysPrefImage4 from '../../images/sys-pref-4.jpg'
import safariPrefImage1 from '../../images/safari-pref-1.jpg'

const KeyboardEnable = () => {
  return (
    <Layout title={'Enable Keyboard Navigation'}>
      <p>By default on Macs not all interactive content can be tabbed to by keyboard. While form features can be accessed, links and other UI components (e.g tabs) cannot.</p>
      <h2>Turn on ability to navigate to all interactive controls using Tab/Shift + Tab in...</h2>
      <h3>System Preferences</h3>
      <ol>
        <li>Open System Preferences and select the “Keyboard” option:
        <img src={sysPrefImage3} alt="System preferences window highlighting Keyboard option in a red outline" />
        </li>
        <li>Under “Shortcuts” check “Use keyboard navigation to move focus between controls.”
        <img src={sysPrefImage4} alt="Keyboard Shortcut preferences showing checked use keyboard navigation setting." />
        </li>
      </ol>
      <h3>Safari</h3>
      <ol>
        <li>Open Safari Preferences, select the “Advanced” option. Check “Press Tab to highlight each item on a webpage”
        <img src={safariPrefImage1} alt="Safari Advanced preferences showing checkbox to enabling tabbing on web page." />
        </li>
      </ol>
    </Layout>
  )
}

export default KeyboardEnable