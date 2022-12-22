import React from 'react';
import Comment from './Comment';
import TrustPilotAPI from '../services/TrustPilotAPI';

const CommentList = () => {
const [comments, setComments] = useState([]);
const [page, setPage] = useState(1);

useEffect(() => {
const apiKey = 'CqEzUGVIW4WAeLo5G7ZTquxrArq3K8Q7';
const sku = [1694,1976,150,10993,151,130]
const businessUnitID = '5c7f7934871dac0001ea00e8';
const fetchComments = async () => {
const response = await TrustPilotAPI.getComments(sku, businessUnitID, apiKey );
setComments(response.data);
}
fetchComments();
}, [page]);

const handlePagination = (direction) => {
if (direction === 'next') {
setPage(page + 1);
} else {
setPage(page - 1);
}
}

return (
<div>
{comments.slice(0, 5).map((comment) => (
<Comment
key={comment.id}
rating={comment.rating}
userName={comment.userName}
content={comment.content}
date={comment.date}
handleRemove={() => setComments(comments.filter(c => c.id !== comment.id))}
/>
))}
{comments.length > 5 && (
<div>
{page > 1 && <button onClick={() => handlePagination('prev')}>Prev</button>}
{page < totalPages && <button onClick={() => handlePagination('next')}>Next</button>}
</div>
)}
</div>
);
}

export default CommentList;