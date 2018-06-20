import * as React from 'react';

class Component extends React.Component<any, any> {
    static displayName = "AppHeader";

    render() {
        return (
            <div className="app-header">
                <label className="app-title" htmlFor="">Puneeth</label>
            </div>
        );
    }
}

export default Component;