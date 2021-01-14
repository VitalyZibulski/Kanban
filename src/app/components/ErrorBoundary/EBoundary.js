import React from 'react';

class EBoundary extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            stack: null,
            message: null,
        };
    }

    static getSnapshotBeforeUpdate(error) {
        return { hasError: true, stack: error.stack, message: error.message };
    }

    componentDidCatch(error, errorInfo) {
        // console.log(error, errorInfo);
        // can send logs
        // dispatchAnalytic(error);
    }

    reloadPage() {
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return (
              <div>
                  <h1>Error</h1>
                  <button onClick={this.reloadPage}>Reload</button>

                  {/*<button>Show technical information</button>*/}
                  {/*{this.state.stack}*/}
              </div>
            )
        }


        return this.props.children;
    }
}

export default EBoundary;