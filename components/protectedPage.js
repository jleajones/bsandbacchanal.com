import React from 'react';

import Router from 'next/router';

class ProtectedPage extends React.Component {
  componentDidMount() {
    console.log(this.props.isLoggedIn);
    if (!this.props.isLoggedIn) {
      Router.push('/');
    }
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default ProtectedPage;
