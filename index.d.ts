import * as React from 'react';

interface DefaultProps {
    label?:string;
    variant?:string;
    size?:string;
}

declare class Help extends React.Component<DefaultProps> {
    // @ts-ignore
    render(): JSX.Element;
}

export default Help;