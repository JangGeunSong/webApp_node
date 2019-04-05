import Link from 'next/link';

const header = () => (
    <div className="header">
        
        <Link>
            <a href="index">
                <img className="banner" src="../static/image/banner.jpg" alt="Main_Banner"></img>
            </a>
        </Link>
        <h1 className="page_title">Main Page</h1>
        <style jsx>{`
            .header {
                margin-top: 0px;
                text-align : center;
                padding : 0px;
                background-color: lightblue;
                color: black;
                font-weight: bold;
                clear : both;
            }
            
            .banner {
                float : left;
                height : 40px;
            }

            .page_title {
                margin : 0px;
                padding-right : 100px; 
            }
        `}</style>
    </div>
    
);

export default header;