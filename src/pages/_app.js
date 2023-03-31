import "../styles/reset.scss";
import "../styles/global.scss";
import { Work_Sans } from "@next/font/google";
import { ContainerApp } from "@/components/ContainerApp";

const worksans = Work_Sans({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
    return (
        <ContainerApp className={`${worksans.className} `}>
            <Component {...pageProps} />
        </ContainerApp>
    );
}
