import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
    initialActiveIndex?: number; // Optional prop for setting the initially active item
}

const NavItem = ({ initialActiveIndex = 0 }: Props) => {
    const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

    const Menu = styled.section`
        display: block;
    `;

    const MenuList = styled.ul`
        list-style: none;
        display: inline-block;
    `;

    const MenuItem = styled.li<{ isActive: boolean }>`
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.826);
        display: inline-block;
        margin-left: 2.5rem;
        text-transform: capitalize;
        cursor: pointer;
        transition: color 0.3s ease;
        position: relative;

        ${$props => $props.isActive &&
        css`
            &::after {
                content: "";
                position: absolute;
                bottom: -1.5rem;
                left: 0;
                right: 0;
                width: 100%;
                height: 0.3rem;
                border-radius: 5px;
                background-color: rgb(178, 30, 178);
            }
        `}

        &:hover {
            color: #ffffff;
        }
    `;

    const menuItems = ['home', 'projects', 'blog', 'contact'];

    return (
        <Menu>
            <MenuList>
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        isActive={activeIndex === index}  // Check if current index matches active index
                        onClick={() => setActiveIndex(index)}  // Set active index on click
                    >
                        {item}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default NavItem;
