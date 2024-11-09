// components/HeadMeta.js
"use client"; // This makes only this component a Client Component

import React from "react";
import { Helmet } from "react-helmet-async";

const HeadMeta = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
};

export default HeadMeta;
