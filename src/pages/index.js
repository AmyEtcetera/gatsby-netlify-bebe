import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
	<div style={{ color: `gray`, fontFamily: `Arial`, fontSize: `3rem` }}>
		<Link to="/contact/">Contact</Link> | <Link to="/about/">About</Link> | <Link to="/blog/hello-world-post">blog</Link>
		<Header headerText="It's a test, obvi" />
		<img src="https://picsum.photos/400/200" alt="random landscape or other" />		
		<p>Hello whorled!</p>
		<p><a href="https://www.google.com/">External link</a> - is just a regular anchor tag.</p>	</div>
)