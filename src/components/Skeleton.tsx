import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <div className="dress-block-wrapper">
    <ContentLoader
      className="dress-block"
      speed={2}
      width={280}
      height={623}
      viewBox="0 0 280 623"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="402" rx="10" ry="10" width="280" height="55" />
      <rect x="0" y="475" rx="10" ry="10" width="280" height="88" />
      <rect x="124" y="362" rx="0" ry="0" width="0" height="12" />
      <rect x="2" y="585" rx="10" ry="10" width="95" height="30" />
      <rect x="0" y="0" rx="0" ry="0" width="280" height="390" />
      <rect x="127" y="573" rx="10" ry="10" width="153" height="45" />
    </ContentLoader>
  </div>
);

export default Skeleton;
