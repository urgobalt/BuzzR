import type {FC} from 'react'
import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Default: FC<{title: string}> = ({children, title}) => {
    return (
    <>
        <Head>
            <title>{title}</title>
            <link href="/Source_Sans_Pro/SourceSansPro-Black" ref="stylesheet" />
            <link href="/Source_Sans_Pro/SourceSansPro-Bold" ref="stylesheet" />
            <link href="/Source_Sans_Pro/SourceSansPro-Extralight" ref="stylesheet" />
            <link href="/Source_Sans_Pro/SourceSansPro-Regular" ref="stylesheet" />
            <link href="/Source_Sans_Pro/SourceSansPro-Light" ref="stylesheet" />
            <link href="/Source_Sans_Pro/SourceSansPro-Semibold" ref="stylesheet" />
        </Head>

        <Navbar />

        <main>
            {children}
        </main>

        <Footer />
    </>
    )
}

export default Default