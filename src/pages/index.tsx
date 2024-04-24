import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        card_img="card-image.JPG"
        logo_img="logo.jpeg"
        title="Working in a Minimal environment..."
        channel="Himprakash Das"
        views="44M"
        timestamp="3 years"
      ></VideoCard>
    </div>
  );
}
