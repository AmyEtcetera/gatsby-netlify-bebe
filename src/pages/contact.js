import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
	<div style={{ color: `navy`, fontSize: "2rem", backgroundColor: `whitesmoke` }}>
		<Link to="/">Home</Link> | <Link to="/about/">About</Link>
		<Header headerText="Contact Us" />
		<p>Send us a message!</p>
		<input /> <button>go</button>
	</div>
)