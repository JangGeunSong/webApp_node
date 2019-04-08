import { getPost } from '../action/postAction';
import PropTypes from 'prop-types';

class PostTable extends React.Component{
 
    static PropTypes = {
        posts : PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getPost();
    }

    render() {
        const { posts } = this.props.posts;
        return (
            <div>
                <table className="post_table">
                    <tr>
                        <th>Num</th>
                        <th>Post</th>
                        <th>Authur</th>
                        <th>Hit</th>
                    </tr>
                    {posts.map(({num, subject, writer, hit}) => {
                        <tr>
                            <td>{num}</td>
                            <td>{subject}</td>
                            <td>{writer}</td>
                            <td>{hit}</td>
                        </tr>
                    })}
                </table>
        
                <style jsx global>{`
                    .post_table {
                        background-color : white;
                        margin : 0;
                        text-align : center;
                        table-layout : fixed;
                    }
        
                    .post_table th td {
                        border-left-style: solid;
                        border-right-style: solid;
                        background-color : grey;
                    }
                `}</style>
            </div>
        );
    }
}

export default PostTable;