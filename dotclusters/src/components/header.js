import React from 'react'
import {Link} from 'gatsby'

import headerStyles from './header.module.css'

const Header = () => {
    return (
        <div>
            <Link className={headerStyles.title} to='/'>Dotclusters.io</Link>
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