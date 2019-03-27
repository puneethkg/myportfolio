import * as React from 'react';

class Component extends React.Component<any, any> {
    static displayName = "WelcomeMessage";

    render() {
        return (
            <div>
                <label className="app-title">react redux boilerplate</label>
            </div>
        );
    }
}

export default Component;