import React from 'react';
import styled from 'styled-components';


const TopNav = styled.div `
    background-color: #fff;
    overflow: hidden;
    line-height: 20px;
    display: block;
    border-top: 10px solid #ad0101;
    position: relative;
    min-height: 30px;
    color: #393939;
`

const Link = ({className, children}) => (
    <a className={className} href="#">
        { children }
    </a>
);

const NoStyleLink = styled(Link) `
    color: #393939;
    text-decoration: none;
    margin: 10px;
`

const Menu = styled.ul `
    float: right;
`
class NavigationBar extends React.Component {
    render() {
        return(
            <div>
                <TopNav>
                    <Menu>
                        <NoStyleLink className="ul" href="#home">HOME</NoStyleLink>
                        <NoStyleLink href="#contact">CONTACT US</NoStyleLink>
                    </Menu>
                </TopNav>
            </div>
        )
    }
}

export default NavigationBar;