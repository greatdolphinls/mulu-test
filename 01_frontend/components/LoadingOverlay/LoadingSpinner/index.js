
import React from 'react';
import ReactLottie from 'react-lottie';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require('public/assets/json/circle-loading.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
};

const LoadingSpinner = ({ loading, size = 100 || size, ...rest }) => {
  if (!loading)
    return null;

  return (
    <ReactLottie
      style={{ width: size, height: size }}
      options={defaultOptions}
      isStopped={false}
      isPaused={false} />
  );
};

export default LoadingSpinner;