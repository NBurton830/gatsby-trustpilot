import React from 'react';

const Comment = (props) => {
return (
<div>
<div>{props.rating} stars</div>
<div>{props.userName}</div>
<div>{props.content}</div>
<div>{props.date}</div>
<div><button onClick={props.handleRemove}>X</button></div>
</div>
);
}

export default Comment;

