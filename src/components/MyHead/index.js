import Head from 'next/head'
import Image from 'next/image'


export default function MyHead({ previewImageURL }) {
    return (
        <Head>
            <meta property="og:title" content="The Office's Dunder Mifflin Quiz" />
            <meta property="og:type" content="video.other" />
            <meta property="og:description" content="Who does Michael hates the most in the office? Know the answer? Come test your 'office' skills!" />
            <meta property="og:url" content="https://dunder-mifflin-quiz.phmcastro702.vercel.app/" />
            <meta property="og:image" content={previewImageURL} />
        </Head>
    );
};