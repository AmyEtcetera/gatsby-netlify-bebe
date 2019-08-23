import React from "react"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal`, fontFamily: `Arial` }}>
    <Header headerText="About Gatsby"  arbitraryPhrase="This is arbitrary." />
    <Header headerText="Second header..."  arbitraryPhrase="this prop is extra arbitrary" />
    <h2>Such wow. Very React. <span style={{ color: `pink` }}>Hey, this part is static.</span></h2>
    <p><a href="/">Back to home page</a></p>
  </div>
)