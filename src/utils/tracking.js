import ReactGA from "react-ga4";

// Send pageview with a custom path
const trackPageView = (pagePath, pageTitle) => {
    ReactGA.send({
        hitType: "pageview",
        page: pagePath,
        title: pageTitle
    });
};

export default trackPageView;
