import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
<Layout>
  <SEO title="Home" />

  <div>
    <h2>Welcome to our lovely Community.</h2>
    <p>Find out where to dance, right here!</p>
  </div>
 
  <div className="tc" style={{width: '100%'}}>
    <h1>Dance Schedule</h1>
  </div>

  <table>
    <tr>
      <th>Sun</th>
      <th className='danceTable'>
        <div style={{display: "flex", textAlign: "center", fontSize: "80%", alignItems: "center"}}>
          <div>Dance Name<br />(how often if not weekly)<br />When</div>
          <div> Brief Description </div>
          <div> Cost/<br />suggested donation </div>
        </div>
        <div className='dtc' style={{display: "flex", textAlign: "center", fontSize: "80%", alignItems: "center"}}>
          <div>Dance Name<br />(how often if not weekly)<br />When</div>
          <div> Brief Description </div>
          <div> Cost/<br />suggested donation </div>
        </div>
      </th>
    </tr>
    <tr>
      <th>Tue</th>
      <th className='danceTable'>
        <div>
          <div>Dance Name<br />(how often if not weekly)<br />When</div>
          <div> Brief Description </div>
          <div> Cost/<br />suggested donation </div>
        </div>
      </th>
    </tr>
    <tr>
      <th>Fri</th>
      <th className='danceTable'>
        <div className='dtc' style={{display: "flex", textAlign: "center", fontSize: "80%", alignItems: "center"}}>
          <div>Dance Name<br />(how often if not weekly)<br />When</div>
          <div> Brief Description </div>
          <div> Cost/<br />suggested donation </div>
        </div>
        <div style={{display: "flex", textAlign: "center", fontSize: "80%", alignItems: "center"}}>
          <div>Dance Name<br />(how often if not weekly)<br />When</div>
          <div> Brief Description </div>
          <div> Cost/<br />suggested donation </div>
        </div>
      </th>
    </tr>
    <tr>
      <th>Other Regular <br /> Dances</th>
      <th className='danceTable'>
        <div className='dtc'>
          <div >Dance Name<br />(how often if not weekly)<br />When</div>
          <div> Brief Description </div>
          <div> Cost/<br />suggested donation </div>
        </div>
        <div style={{display: "flex", textAlign: "center", fontSize: "80%", alignItems: "center"}}>
          <div>Dance Name<br />(how often if not weekly)<br />When</div>
          <div> Brief Description </div>
          <div> Cost/<br />suggested donation </div>
        </div>
        <div className='dtc' style={{display: "flex", textAlign: "center", fontSize: "80%", alignItems: "center"}}>
          <div>Dance Name<br />(how often if not weekly)<br />When</div>
          <div> Brief Description </div>
          <div> Cost/<br />suggested donation </div>
        </div>
      </th>
    </tr>
  </table>

  {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
  </div> */}
</Layout>
)

export default IndexPage