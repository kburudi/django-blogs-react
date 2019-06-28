import React, { Component } from 'react';

const authWrapper = (WrappedComponent) => {
    const WrapAuth = class extends Component {
        render() {
            return (
                <div>
                    <WrappedComponent ref={this.props.forRef}
                        {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WrapAuth {...props} forRef={ref} />
    })
}

export default authWrapper;