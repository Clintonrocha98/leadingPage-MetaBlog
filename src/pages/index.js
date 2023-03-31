import { Banner } from "@/components/Banner";
import img from "public/img/poster/Image.png";
export default function Home() {
    return (
        <>
            <Banner img={img} author="fulano" />
        </>
    );
}
