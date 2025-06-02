import HOME from "./home";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <div className="p-home">
      <div className="p-home__banner">
        <div className="p-home__banner__nav">
          <img onClick={()=>{router.push("404")}} src="./image/home/banner.webp" alt="banner"/>
        </div>
      </div>
    </div>
  );
}
