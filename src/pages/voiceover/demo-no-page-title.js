import React from "react"
import Layout from '../../components/layout'

const DemoNoPageTitle = () => {

  return (
    <Layout title={''}>
      <p>Try refreshing the page and listening if the page title is announced by VoiceOver.</p>
      <p>Silence is bad for screen reader users. Even though the page content may have changed visually there is no auditory cue.</p>
      <p>Good page titles are absolutely critical for screen reader users.</p>
    </Layout>
  )
}

export default DemoNoPageTitle