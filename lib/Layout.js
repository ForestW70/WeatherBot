import Head from "next/head";

export const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>WeatherBot</title>
                <meta name="description" content="Check weather around the world using OpenWeatherMap and Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <main>
            <h1>WeatherBot::3456</h1>
            <p>
                See whats happening in our worlds weather! 
            </p>
            {children}
        </main>
        </div>
    )
}