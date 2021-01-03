import React from 'react';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = ({ loading }) => {
  return (
    <div>
      <ClipLoader size={60} css={override} loading={loading} />
    </div>
  );
};

export default Spinner;
