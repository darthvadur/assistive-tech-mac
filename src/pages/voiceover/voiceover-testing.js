import React from "react"
import Layout from '../../components/layout'
import {Link} from 'gatsby'

const VoiceOverTesting = () => {
  
  return (
    <Layout title={'Testing with VoiceOver'}>
      <p>Some tests designers can perform with VoiceOver:</p>
      <ul>
        <li>Ensure that all pages/screens have an informative page title and it changes after navigating to a page. The page title is displayed in the tab and is important for SEO. <Link to={'/voiceover/demo-no-page-title/'}>Page with no title Example</Link></li>
        <li>Ensure all links are links and buttons are buttons. Both links and buttons can be read out of context. <Link to={'/keyboard/demo-keyboard-navigable/'}>Link vs Button Example</Link>. <Link to={'/voiceover/demo-link-context/'}>Link Context Example</Link></li>
        <li>Is all of the page content contained within landmarks? Use the Rotor Landmarks listing to test. There should be only one of <code>banner</code>, <code>main</code> and <code>contentinfo</code>. If there are more than one navigation regions they should have unique name.</li>
        <li>Check headings on the page. Are titles and section titles actually announced as headings? When you use the Rotor to list headings are they in the correct heirarchical order?</li>
        <li>Do images have the appropriate <code>alt</code> text? <Link to={'/voiceover/demo-alt-text/'}>Alt Text Example</Link></li>
        <li>Are data tables readable? <Link to={'/voiceover/demo-data-tables/'}>Data Tables Example</Link></li>
      </ul>
    </Layout>
  )
}

export default VoiceOverTesting