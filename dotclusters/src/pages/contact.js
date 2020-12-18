import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const Contact = () => {
    return (
        <div>
            <Layout>
                <h1>Contact me:</h1>
                <p>The best way to reach me is <Link to='/about'>Here</Link>.</p>
            </Layout>
        </div>
    )
}

export default Contact