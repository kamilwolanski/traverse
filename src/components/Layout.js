import React from "react"
import PropTypes from "prop-types"

import "../styles/main.scss"

const Layout = ({ children, page }) => {
    return (
        <div className={"page-template-" + page}>
            <main>{children}</main>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    page: PropTypes.string.isRequired,
}

export default Layout
