import React from 'react';
import { FContainer, FTypo } from './StyledComponent'

const Footer = () => {
    return (
        <FContainer>
            <FTypo>
                © {new Date().getFullYear()} CY.LING. All Rights Reserved.
            </FTypo>

        </FContainer>
    )
};

export default Footer;