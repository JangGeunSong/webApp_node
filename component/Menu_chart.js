import Link from 'next/link';

class Menu_chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover : this.props.hover
        }
        this.seeProps = this.seeProps.bind(this);
    }

    seeProps = (e) => {
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.hover !== this.props.hover) {
            this.setState({
                hover : nextProps.hover
            })
        }
    }

    render() {
        return (
            <div>
                <table className="menu_chart">
                    <tr>
                        <th className="menu_th">
                            <ul>
                                <li className="menu_li">Main Hi</li>
                                <li className="menu_li">Main Hi</li>
                                <li className="menu_li">Main Hi</li>
                                <li className="menu_li">Main Hi</li>
                            </ul>
                        </th>
                        <th className="menu_th">
                            <ul>
                                <li className="menu_li"><Link><a href="../about">About</a></Link></li>
                            </ul>
                        </th>
                        <th className="menu_th">
                            <ul>
                                <li className="menu_li">Post 1</li>
                            </ul>
                        </th>
                        <th className="menu_th">
                            <ul>
                                <li className="menu_li">FAQ solution</li>
                            </ul>
                        </th>
                    </tr>
                </table>

                <style jsx global>{`
                    .menu_chart {
                        width: 1100px;
                        table-layout: fixed;
                        position : absolute;
                        display: table;
                        background-color: grey;
                        opacity: 0.8;
                    }

                    .menu_chart th {
                        border-bottom: 5px solid;
                        border-bottom-color: lightskyblue;
                    }

                    .menu_chart th:hover {
                        border-color: greenyellow;
                    }

                    td, th {
                        padding: 10px;
                    }
                    
                    tr {
                        text-align: center;
                    }
                    
                    ul {
                        list-style-type: none;
                        margin : 0;
                        padding : 0;
                    }
                    
                    li {
                        padding : 10px 0 10px 0;
                    }
                `}</style>
            </div>
        );
    }

}

export default Menu_chart;