import React from 'react';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
  return (
    <div style={{ marginTop: '200px' }}>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
    </div>
  );
};

export default ErrorPage;
