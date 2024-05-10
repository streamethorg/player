// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { Player, useStream, usePlaybackInfo } from "@livepeer/react";
// import PoweredBy from "components/PoweredBy";
// import { Loader2 } from "lucide-react";
// export default function Iframe() {
//   const router = useRouter();
//   const { query } = router;
//   const { streamId, playbackId, vod } = query;
//   const [url, setUrl] = useState("");
//   const { data: stream } = useStream({
//     streamId: streamId as string,
//     refetchInterval: (stream) => (!stream?.isActive ? 5000 : false),
//   });
//   const { data: video } = usePlaybackInfo({ playbackId: playbackId as string });

//   useEffect(() => {
//     if (vod === "true") {
//       setUrl(video?.meta?.source?.[1]?.url);
//     } else {
//       setUrl(stream?.playbackUrl);
//     }
//   }, [vod]);

//   return (
//     <div className="flex flex-col md:flex-row bg:black justify-center h-screen w-screen">
//       <PoweredBy />
//       {vod === "false" && !stream?.isActive ? (
//         <div className="absolute select-none animate-in fade-in-0 inset-0 text-center bg-black/40 backdrop-blur-lg flex flex-col items-center justify-center gap-4 duration-1000 data-[visible=true]:animate-in data-[visible=false]:animate-out data-[visible=false]:fade-out-0 data-[visible=true]:fade-in-0">
//           <div className="flex flex-col gap-5">
//             <div className="flex flex-col gap-1">
//               <div className="text-lg sm:text-2xl font-bold">
//                 Stream is offline
//               </div>
//               <div className="text-xs sm:text-sm text-gray-100">
//                 Playback will start automatically once the stream has started
//               </div>
//             </div>
//             <Loader2 className="w-6 h-6 md:w-8 md:h-8 mx-auto animate-spin" />
//           </div>
//         </div>
//       ) : (
//         <Player autoPlay src={url} />
//       )}
//     </div>
//   );
// }

import React from "react";
import Iframe from "./streameth";

const Embed = () => {
  return <Iframe />;
};

export default Embed;
