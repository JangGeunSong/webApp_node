import Head from 'next/head';
import Header from '../component/header';
import Footer from '../component/Footer';
import About_center from '../component/about_center';

const About = () => (
    <div>
        <Head>
            <title>about</title>
            <link rel="stylesheet" href="/static/about.css" />
            <link rel="shortcut icon" href="/static/favicon.ico"></link>
        </Head>
        <Header />        
        <About_center />
        <Footer />
    </div>
);

export default About;