import React from 'react'
import { Instagram } from '@material-ui/icons'
import { Facebook } from '@material-ui/icons'
import { Twitter } from '@material-ui/icons'
import {LinkedIn} from '@material-ui/icons'

import "../styles/footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Instagram/><Twitter/><Facebook/><LinkedIn/>
            </div>
            <p> &copy; 2019. University of Nueva Caceres. All Rights Reserved. Privacy Notice</p>
        </div>
    )
}

export default Footer
