import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div >
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
                        <div class="navbar-nav" style={{margin:"auto"}}> 
                            <a class="nav-item nav-link" href="/">Home </a>
                            <a class="nav-item nav-link" href="assets">Assets</a>
                            <a class="nav-item nav-link" href="employees">Employees</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavBar;