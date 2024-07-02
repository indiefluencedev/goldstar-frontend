import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { metaData } from "./metaData";

const MetaTag = ({ title, description, keywords, imageUrl, imageAlt }) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setUrl(window.location.pathname + window.location.search);
        }
    },
        []);

    return (

        <Helmet>


            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaData.hostname + imageUrl} />
            <meta name="keywords" content={keywords} />
            <meta property="og:url" content={metaData.name.hostname + url} />


            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image:alt" content={imageUrl} />
            <meta name="twitter:site" content={metaData.name.twitterUsername} />
            <meta name="linkedin:image" content={imageUrl} />


            <meta name="author" content={metaData.name.hostname} />
            <link rel="canonical" href={metaData.name.hostname} />
            <meta property="og:site_name" content={metaData.name.sitename} />


            <meta name="robots" content="noindex, follow" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />


            <link rel="icon" type="image/x-icon" href="/favicon.png" />


        </Helmet>

    );
};

metaData.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
};

export default MetaTag;