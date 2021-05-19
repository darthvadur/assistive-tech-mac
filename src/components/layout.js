import React from 'react'
import {useRef} from 'react'
import {Link} from 'gatsby'
import Seo from '../components/seo'
import PageHeader from '../components/pageHeader'
import Nav from '../components/nav'

const Layout = ({title, children}) => {

  const mainTitleRef = useRef(null)

  return (
    <div className="site">
      <Seo title={title} />
      <header className="container py-4">
        <Link to={'#main-title'} className="sr-only skip-to-content" onClick={() => {
          mainTitleRef.current.focus()
        }}>Skip to main content</Link>
        <PageHeader />
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Nav />
          </div>
          <div className="col-md">
            <div className="px-4">
              <main className="site-content pb-9">
                <h1 id="main-title" ref={mainTitleRef} tabIndex="-1">{title}</h1>
                {children}
              </main> 
            </div>
             
          </div>
        </div>
      </div>
      <footer>
        <p className="text-center text-xs">2021 Dave Arthur</p>
      </footer>
    </div> 
  )

}

export default Layout;