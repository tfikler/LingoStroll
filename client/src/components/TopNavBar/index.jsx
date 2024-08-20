import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar3.css'

const Navbar3 = ({ routes }) => {
    return (
        <header className="navbar3-container">
            <header data-thq="thq-navbar" className="navbar3-navbar-interactive">
                <img
                    alt="logo"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original"
                    className="navbar3-image1"
                />
                <div data-thq="thq-navbar-nav" className="navbar3-desktop-menu">
                    <nav className="navbar3-links1">
                        {routes.map((route, index) => route.type !== 'no-sidenav' && (
                            <Link to={`/${route.route}`} key={index} className={`navbar3-link1${index + 1}`}>
                                {route.icons && route.icons.icon}
                                <span className={`navbar3-text${index + 1} thq-link thq-body-small`}>
                                    {route.name}
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
        </header>
    )
}

Navbar3.defaultProps = {
    link4: undefined,
    link2Url: 'https://www.teleporthq.io',
    link2: undefined,
    link3: undefined,
    logoAlt: 'logo',
    link1: undefined,
    link1Url: 'https://www.teleporthq.io',
    link4Url: 'https://www.teleporthq.io',
    link5: undefined,
    logoSrc:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
    link5Url: 'https://www.teleporthq.io',
    link3Url: 'https://www.teleporthq.io',
}

Navbar3.propTypes = {
    link4: PropTypes.element,
    link2Url: PropTypes.string,
    link2: PropTypes.element,
    link3: PropTypes.element,
    logoAlt: PropTypes.string,
    link1: PropTypes.element,
    link1Url: PropTypes.string,
    link4Url: PropTypes.string,
    link5: PropTypes.element,
    logoSrc: PropTypes.string,
    link5Url: PropTypes.string,
    link3Url: PropTypes.string,
}

export default Navbar3
