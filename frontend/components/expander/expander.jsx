import React from 'react';
import Travel from './travel';
import Work from './work';
import PlayContainer from './play_container';

class Expander extends React.Component {
  constructor(props) {
    super(props);

  };

  renderComponent() {
    switch (this.props.component) {
      case 'travel':
        return <Travel />;
      case 'work':
        return <Work />;
      case 'play':
        return <PlayContainer />;
    };
  };

  render() {
    var componentClasses = ['expander'];
    if (this.props.show) {
      componentClasses.push('show');
    };

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className={componentClasses.join(' ')}>
            {this.renderComponent()}
          </div>
        </div>
      </div>
    );
  };
};

export default Expander;
