import React from 'react'
import {NavLink} from 'react-router-dom'
import empirelogo from '../../images/empirelogo.png'
import {Button} from 'reactstrap'

import '../marketplace/marketplace.css'

class Nav extends React.Component{
    render(){
        return(
            <div id="marketplace-nav-bg">
                <nav className="navbar navbar-dark navbar-expand-lg mx-4 pl-0 py-3">
                    <div>
                        <img src={empirelogo} alt="..." id="navbar-logo" className="mr-2"></img>
                    </div>

                    <Button  className="text-white px-4 ml-auto mr-3" id="connect-btn-nav-displayOnToggler">Connect Wallet</Button>
                    <button className="navbar-toggler mr-sm-2" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <div className="input-group d-flex justify-content-center ml-4" style={{width:"35%"}} >
                            <input className="form-control" id="search-field-nav" type="search" placeholder="Search NFTs,items,collections etc."></input>
                            <i className="fal fa-search text-white" id="search-icon-nav"></i>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <NavLink id="navbar-link" activeClassName="active" exact={true} to="/" className="nav-link nav-item px-2">Home</NavLink>
                            <NavLink id="navbar-link" activeClassName="active" exact={true} to="/marketplace" className="nav-link nav-item px-2">Marketplace</NavLink>
                            <NavLink id="navbar-link" activeClassName="active" exact={true} to="/statistics" className="nav-link nav-item px-2">Stats</NavLink>
                            <NavLink id="navbar-link" activeClassName="active" exact={true} to="/resources" className="nav-link nav-item px-2">Resources</NavLink>
                            <NavLink id="navbar-link" activeClassName="active" exact={true} to="/profile" className="nav-link nav-item px-2">Profile</NavLink>
                        </div>
                        <Button  className="text-white px-4" id="connect-btn-nav">Connect Wallet</Button>

                    </div>

                </nav>

            </div>
        )
    }
}
export default Nav