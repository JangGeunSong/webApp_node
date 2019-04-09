import { getPost } from '../action/postAction';
import PropTypes from 'prop-types';

class PostTable extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount() {
        fetch('api/posts')
            .then(response => {
                console.log(response);
                response.json()
            })
            .then(posts => {
                console.log(posts);
                this.setState({ data : posts })
            })
    }

    render() {
        console.log(this.state.posts);
        return (
            <div className="post_body">
                <table className="post_table">
                    <tr>
                        <th>Num</th>
                        <th>Post</th>
                        <th>Authur</th>
                        <th>Hit</th>
                    </tr>
                </table>
                <br></br>
        
                <style jsx global>{`
                    .post_body {
                        text-align : center;
                    }

                    .post_table {
                        background-color : white;
                        float : right;
                        margin : 0;
                        text-align : center;
                        table-layout : fixed;
                    }
        
                    .post_table th {
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