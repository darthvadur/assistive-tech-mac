import React from "react"
import Layout from '../../components/layout'

const LinkContextDemo = () => {

  return (
    <Layout title={'Link Context Demo'}>
      <p>Try navigating the links in following cards in VoiceOver. Then list the links in the VoiceOver Rotor.</p>
      <h2>Poor link labeling:</h2>
      <div className="row cards">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Moby Dick</h3>
              <h4 className="card-subtitle">Herman Melville</h4>
              <p className="card-text">Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.</p>
              <p><a href="#targ-1">Read more...</a></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">The Hitchhiker’s Guide to the Galaxy</h3>
              <h4 className="card-subtitle">Douglas Adams</h4>
              <p className="card-text">The house stood on a slight rise just on the edge of the village. It stood on its own and looked out over a broad spread of West Country farmland.</p>
              <p><a href="#targ-2">Read more...</a></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">The Ministry of Utmost Happiness</h3>
              <h4 className="card-subtitle">Arundhati Roy</h4>
              <p className="card-text">She lived in the graveyard like a tree. At dawn she saw the crows off and welcomed the bats home. At dusk she did the opposite. Between shifts she conferred with the ghosts of vultures that loomed in her high branches.</p>
              <p><a href="#targ-3">Read more...</a></p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mt-6">Good link labeling:</h2>
      <div className="row cards">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Moby Dick</h3>
              <h4 className="card-subtitle">Herman Melville</h4>
              <p className="card-text">Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.</p>
              <p><a href="#targ-1" aria-label="Read more of Moby Dick">Read more...</a></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">The Hitchhiker’s Guide to the Galaxy</h3>
              <h4 className="card-subtitle">Douglas Adams</h4>
              <p className="card-text">The house stood on a slight rise just on the edge of the village. It stood on its own and looked out over a broad spread of West Country farmland.</p>
              <p><a href="#targ-2" aria-label="Read more of The Hitchhiker’s Guide to the Galaxy">Read more...</a></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">The Ministry of Utmost Happiness</h3>
              <h4 className="card-subtitle">Arundhati Roy</h4>
              <p className="card-text">She lived in the graveyard like a tree. At dawn she saw the crows off and welcomed the bats home. At dusk she did the opposite. Between shifts she conferred with the ghosts of vultures that loomed in her high branches.</p>
              <p><a href="#targ-3" aria-label="Read more of The Ministry of Utmost Happiness">Read more...</a></p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LinkContextDemo