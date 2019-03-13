import React, {Component, Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import LingoFormattedDefault, { LingoFormattedNamed } from 'react-lingo';

export default class Foo extends Component {
    render() {
        return (
            <Fragment>
                <FormattedMessage
                    id='foo'
                    description='foo description'
                    defaultMessage='foo defaultMessage'
                />
                <LingoFormattedDefault
                    id='bar'
                    description='bar description'
                    defaultMessage='bar defaultMessage'
                />
                <LingoFormattedNamed
                    id='baz'
                    description='baz description'
                    defaultMessage='baz defaultMessage'
                />
            </Fragment>
        );
    }
}
