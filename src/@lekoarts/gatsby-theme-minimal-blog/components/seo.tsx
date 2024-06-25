import React from "react"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";

export default function ShadowedSeo (props) {
	return (
	<>
		<Seo {...props} />
		<meta name="google-site-verification" content="qM97oJuX0VG4W5EXVzIVND8aLap6gpkx7uExvqR91Ys" />
	</>
	)
}

