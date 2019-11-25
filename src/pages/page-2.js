import React from 'react';
import Helmet from 'react-helmet';
import Webcam from 'react-webcam';

import Layout from 'components/Layout';
import Container from 'components/Container';

import { isMobile } from 'react-device-detect';
const SecondPage = () => {
  const webcamRef = React.useRef( null );

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log( imageSrc );
  }, [webcamRef]);

  var videoConstraints = null;

  if ( isMobile ) {
    videoConstraints = {
      facingMode: { exact: 'environment' }
    };
  }

  return (
    <Layout pageName="two">
      <Helmet>
        <title>Page Two</title>
      </Helmet>
      <Container className="content">
        <h1>Page Two</h1>
        <p>Welcome to page 2</p>
        <Webcam ref={webcamRef} videoConstraints={videoConstraints} />
        <button onClick={capture}>Send CV for analyse</button>
      </Container>
    </Layout>
  );
};

export default SecondPage;
