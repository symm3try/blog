import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import headerStyles from './header.module.css'

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div>
            <Link className={headerStyles.title} to='/'>{data.site.siteMetadata.title}</Link>
            <nav>
                <ul className={headerStyles.navList}>
                    <li> <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'> 
                        Home
                        </Link>
                    </li>
                    <li> <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'> 
                        About 
                        </Link>
                    </li>
                    <li> <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'> 
                        Blog 
                        </Link>
                    </li>
                    <li> <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'> 
                        Contact 
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header