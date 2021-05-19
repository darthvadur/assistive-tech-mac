import React from "react"
import Layout from '../../components/layout'
import {Link} from 'gatsby'

const KeyboardTesting = () => {
  return (
    <Layout title={'Keyboard Testing'}>
      <p>Keyboard tests designers can perform:</p>
      <ul>
        <li>All interactive content and controls (links, buttons, inputs) can be navigated to by the Tab and Shift + Tab keys. <Link to={'/keyboard/demo-keyboard-navigable/'}>Keyboard Navigation Example</Link></li>
        <li>The focus indicator is visible on interactive content and controls. Ideally, the style should have good contrast. <Link to={'/keyboard/demo-keyboard-focus-indicator/'}>Keyboard Focus Indicator Example</Link></li>
        <li>The tab order makes sense.  <Link to={'/keyboard/demo-keyboard-tab-order/'}>Keyboard Tab Order Example</Link></li>
        <li>All interactive content and controls can be activated by keyboard with the appropriate keys (e.g. by hitting “Enter” on a link, “Space” to select a radio button). <Link to={'/keyboard/demo-keyboard-operable/'}>Keyboard Operability Example</Link></li>
        <li>Is a “Skip to content” link present?</li>
      </ul>
    </Layout>
  )
}

export default KeyboardTesting