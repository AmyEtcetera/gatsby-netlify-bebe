import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
	<div style={{ color: `gray`, fontFamily: `Arial`, fontSize: `3rem` }}>
		<Link to="/contact/">Contact</Link> | <Link to="/about/">About</Link>
		<Header headerText="oops" />
		<img src="https://picsum.photos/400/200" alt="random landscape or other" />		
		<p>Hello world! I wonder how you are doing.</p>
		<p><a href="https://www.google.com/">Link to something off this site</a> is a regular anchor tag.</p>	</div>
)