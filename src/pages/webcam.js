import React from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import Webcam from 'react-webcam';
import { isMobile } from 'react-device-detect';
import Layout from 'components/Layout';
import Container from 'components/Container';

const WebcamImgSender = () => {
  const webcamRef = React.useRef( null );

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const url = process.env.API_HOST || 'http://127.0.0.1:8000';
    axios
      .post( url, {
        file: imageSrc
      })
      .then(( data ) => {
        console.log( JSON.stringify( data ));
        alert( data );
      })
      .catch(( e ) => {
        console.log( url );
        console.log( e );
        alert( e );
      });
  }, [webcamRef]);

  var videoConstraints = null;

  if ( isMobile ) {
    videoConstraints = {
      facingMode: { exact: 'environment' }
    };
  }

  return (
    <Layout pageName="WebcamImgSender">
      <Helmet>
        <title>webcam capture sender</title>
      </Helmet>
      <Container className="content">
        <h1>Webcam capture sender</h1>
        <p>Take a picture of your resume</p>
        <div>
          <Webcam ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} />
        </div>
        <p>
          <button onClick={capture}>Send CV for analyse</button>
        </p>
      </Container>
    </Layout>
  );
};

export default WebcamImgSender;
