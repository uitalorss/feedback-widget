import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { useState } from "react";
import { LoadingScreenshot } from "./LoadingScreenshot";

export function ScreenShotButton(){
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenShot(){
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    setIsTakingScreenshot(false)
  }

  return(
    <button
      type="button"
      className="p-2 bg-zinc-800 text-zinc-100 rounded-md border-transparent hover:bg-zinc-700 transition-colors"
      onClick={handleTakeScreenShot}
    >
      {isTakingScreenshot ? <LoadingScreenshot /> : <Camera className="w-6 h-6"/>}
    </button>
  )
}