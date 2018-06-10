import * as React from 'react';

class Component extends React.Component<any, any> {
    static displayName = "WelcomeMessage";

    render() {
        return (
            <div>
                <h1>Widget loaded!!!</h1>
            </div>
        );
    }
}

export default Component;