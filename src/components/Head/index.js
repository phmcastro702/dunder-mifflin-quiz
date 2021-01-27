import Head from 'next/head'


export default function Head({ previewImageURL }) {
    return (
        <Head>
            <meta property="og:title" content="The Office's Dunder Mifflin Quiz" />
            <meta property="og:url" content="https://dunder-mifflin-quiz.phmcastro702.vercel.app/" />
            <meta property="og:image" content={previewImageURL} />
        </Head>
    );
};