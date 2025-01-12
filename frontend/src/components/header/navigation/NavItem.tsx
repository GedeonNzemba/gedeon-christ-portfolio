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
        display: inline-block;
        margin-left: 2.5rem;
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

    const Anchor = styled.a`
        text-decoration: none;
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.826);
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
            color: #ffffff;
        }
    `;

    const menuItems = ['home', 'project', 'blog', 'contact'];
    const menuItemsWithId = menuItems.map((item, index) => ({ id: index, name: item }));


    return (
        <Menu>
            <MenuList>
                {menuItemsWithId.map(({ id, name }) => (
                    <MenuItem
                        key={id}
                        isActive={activeIndex === id}
                        onClick={() => setActiveIndex(id)}
                    >
                        <Anchor href={`#${name}`}>{name}</Anchor>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default NavItem;
