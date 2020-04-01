import React from 'react';

const Title = (props) => {
    return <h1 className={props.redText ? "red-text" : ""}>Title</h1>
};

export default Title;