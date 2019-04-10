import React from 'react'
import * as superagent from 'superagent'

class PostTable extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
    }

    render() {
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