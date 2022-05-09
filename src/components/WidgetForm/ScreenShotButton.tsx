import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { LoadingScreenshot } from "./LoadingScreenshot";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTaken: (screenshot: string | null) => void;
}

export function ScreenShotButton({onScreenshotTaken, screenshot}: ScreenshotButtonProps){
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenShot(){
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    onScreenshotTaken(base64image);
    setIsTakingScreenshot(false)
  }

  if(screenshot){
    return(
      <button 
        type="button" 
        className="padding-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`
        }}
        >

        <Trash onClick={() => onScreenshotTaken(null)} weight="fill"/>
      </button>
    );
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