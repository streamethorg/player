import Player from "../components/ui/Player";
// import { notFound } from "next/navigation";
import { Suspense } from "react";
// import { Livepeer } from "livepeer";
// import { getSrc } from "@livepeer/react/external";
import { EmbedPageParams } from "../lib/types";

const Embed = ({
  vod,
  playbackId,
  videoSrc,
}: {
  videoSrc?: string;
  playbackId: string;
  vod?: string;
}) => {
  const getVideoUrl = () => {
    if (vod === "true") return videoSrc;
    return `https://livepeercdn.studio/hls/${playbackId}/index.m3u8`;
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black flex justify-center items-center">
      <Player
        src={[
          {
            src: getVideoUrl() as `${string}m3u8`,
            width: 1920,
            height: 1080,
            mime: "application/vnd.apple.mpegurl",
            type: "hls",
          },
        ]}
      />
    </div>
  );
};
const EmbedPage = async ({ searchParams }: EmbedPageParams) => {
  // if (!searchParams.playbackId) {
  // return notFound();
  // }
  // const livepeer = new Livepeer({
  //   apiKey: process.env.LIVEPEER_API_KEY,
  // });

  // const playbackInfo = await livepeer.playback.get(searchParams.playbackId);
  // const src = getSrc(playbackInfo.playbackInfo);

  return (
    <iframe
      src={`https://lvpr.tv?v=${searchParams?.playbackId}`}
      allowFullScreen
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
      style={{ height: "100vh", width: "100%" }}
    ></iframe>
  );
};
export default EmbedPage;
