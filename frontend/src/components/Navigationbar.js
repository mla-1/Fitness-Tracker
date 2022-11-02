import {Nav, Navbar, NavLink } from "react-bootstrap"
import { Link } from 'react-router-dom'

const Navigationbar = () => {
    return(
            <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="navbarScroll"/>
                <Navbar.Collapse id="#navbarScroll">    
                    <Nav>            
                        <NavLink eventKey='1' as={Link} to='/'>Home</NavLink>
                
                        <NavLink eventKey='2' as={Link} to='/Start'>Start</NavLink>
                        {/*allows the user to start logging a workout */}
                
                        <NavLink eventKey='3' as={Link} to='/History'>History</NavLink>
                        {/* shows all of the workout sessions from most recent to oldest */}

                        <NavLink eventKey='4' as={Link} to='/Routines'>Routines</NavLink>
                        {/*shows all of the available routines that were made
                        allows user to create more routines */}

                        <NavLink eventKey='5' as={Link} to='/TypesofExercises'>Types of Exercises</NavLink>
                        {/*shows the name of all of the exercises available 
                        option to allow the user to add or more exercises*/}
                    </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Navigationbar