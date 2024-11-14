// PageTitle.js
import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <title>{`Gadget Heaven | ${title}`}</title>
        </Helmet>
    );
};

export default PageTitle;
