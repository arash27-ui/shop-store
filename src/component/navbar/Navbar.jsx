import './navbar.scss'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Badge, IconButton } from '@mui/material'
import { ShoppingBag } from '@mui/icons-material'



const Navbar = ({totalitem}) => {

let i=0;
if (totalitem) {
    i=totalitem;
}
const location = useLocation()
    return (
        <div className="nav">
            <Link className="brand" to="/">
                <img src="data:image/jpeg;base64,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"
                 alt="logo"></img>
                <h2>ToyCars</h2>
            </Link>
{ location.pathname==="/"?
            <Link to="/cart" className="basket">
                    <IconButton>
                        <Badge className="coloricon"  badgeContent={i} color='secondary' max={99}>
                            <ShoppingBag></ShoppingBag>
                        </Badge>
                    </IconButton>
            </Link>
            :null 
            }
       </div>
    )
}

export default Navbar
