import React, { forwardRef, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import track from "../util/analytics";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
const Page = forwardRef(({ children, title = "", ...other }, ref) => {
  const { pathname } = useLocation();

  const sendPageViewEvent = useCallback(() => {
    track.pageview({
      page_path: pathname,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    sendPageViewEvent();
  }, [sendPageViewEvent]);

  return (
    <Box ref={ref} {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
