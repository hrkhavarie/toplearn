import CommentForm from './CommentForm';
import CommentList from './CommentList';
const Comment = () => {
    return ( 

        <section className="user-comments">
        
            <CommentForm/>
            <CommentList/>
        
        </section>
     );
}
 
export default Comment;