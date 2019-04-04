import Menu_chart from './Menu_chart';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover : false
        }
        this.openChart = this.openChart.bind(this);
        this.closeChart = this.closeChart.bind(this);
    }

    openChart = (e) => {
        this.setState({
            hover : true
        });
        console.log(this.state.hover);
    }
    
    closeChart = (e) => {
        this.setState({
            hover : false
        });
        console.log(this.state.hover);
    }

    render() {
        return (
            <div>
                <table className="menu_bar" onMouseEnter={this.openChart} onMouseLeave={this.closeChart}>
                    <tr>
                        <th className="menu_main">Main</th>
                        <th className="menu_about">About</th>
                        <th className="menu_post">post_page</th>
                        <th className="menu_FAQ">FAQ</th>
                    </tr>
                </table>
                <Menu_chart hover={this.state.hover}/>

                <style jsx global>{`
                    .menu_bar {
                        width: 1100px;
                        table-layout: fixed;
                        background-color: grey;
                    }
                    
                    .menu_bar th {
                        border-bottom: 5px solid;
                        border-bottom-color: lightskyblue;
                    }
                    
                    .menu_bar th:hover {
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

export default Navbar;