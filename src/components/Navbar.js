import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Menu inverted>
                <Container>
                    <Link to='/'>
                        <Menu.Item name="star wars API"></Menu.Item>
                    </Link>
                    <Link to='/personnages'>
                    <Menu.Item name="personnages"></Menu.Item>
                    </Link>
                </Container>
            </Menu>
        </div>
    )
}


