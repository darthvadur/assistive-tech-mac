import React from 'react'
import {Link} from 'gatsby'

const Nav = () => {

  return (
    <nav aria-label="Main Navigation" className="px-2 py-4 bg-gray-100 mb-4">
      <ol className="site-nav">
        <li><Link to={'/'}>Overview</Link></li>
        <li><Link to={'/keyboard/'}>Keyboard</Link>
          <ul>
            <li><Link to={'/keyboard/enable-keyboard/'}>Enable Keyboard Navigation</Link></li>
            <li><Link to={'/keyboard/keyboard-testing/'}>Keyboard Testing</Link></li>
          </ul>
        </li>
        <li><Link to={'/voiceover/'}>VoiceOver</Link>
          <ul>
            <li><Link to={'/voiceover/voiceover-enabling/'}>Enabling VoiceOver</Link></li>
            <li><Link to={'/voiceover/voiceover-basics/'}>VoiceOver Basics</Link></li>
            <li><Link to={'/voiceover/voiceover-testing/'}>Testing with VoiceOver</Link></li>
          </ul>
        </li>
        <li><Link to={'/other/'}>Other Accessibility Features</Link></li>
      </ol>
    </nav>
  )
}

export default Nav