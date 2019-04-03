import Link from 'next/link';

const Navbar = () => (
    <div>
        <table className="menu_bar">
            <tr>
                <th className="menu_main">Main</th>
                <th className="menu_about">About</th>
                <th className="menu_post">post_page</th>
                <th className="menu_FAQ">FAQ</th>
            </tr>
        </table>
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
                        <li className="menu_li"><Link href="../about">About</Link></li>
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
    </div>
);

export default Navbar;