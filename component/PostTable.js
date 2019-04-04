const PostTable = () => (
    <div>
        <table className="post_table">
            <tr>
                <th>Num</th>
                <th>Post</th>
                <th>Authur</th>
                <th>Hit</th>
            </tr>
        </table>

        <style jsx global>{`
            .post_table {
                background-color : white;
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

export default PostTable;