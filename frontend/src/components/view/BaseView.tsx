import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import DefaultNavComponent from '../navigations/DefaultNavibarComponent';

export default function <T>(Component: React.ComponentType<T>) {
  return (props: T) => (
        <Box className="main.wrapper.public">
            <Box padding={4}>
                <DefaultNavComponent />
            </Box>
            <Box className="main.container.public">
                <Container>
                    <Component {...props} />
                </Container>
            </Box>
            <Box
                display="flex"
                minHeight="100vh"
                flexDirection="column">

            </Box>
        </Box>
    );
}
