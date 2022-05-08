import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";


interface FeedbackContentProps {
  feedbackType: FeedbackType;
  onFeedbackRestart: () => void;
}

export function FeedbackContentStep(props: FeedbackContentProps){
  const feedbackTypeInfo = feedbackTypes[props.feedbackType];

  return (
    <>
    <header>
      <button 
        type="button" 
        className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        onClick={props.onFeedbackRestart}
      >
        <ArrowLeft weight="bold" className="h-4 w-4" />
      </button>
      <span className="text-xl leading-6 flex gap-2">
        <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
        {feedbackTypeInfo.title}
      </span>
      <CloseButton />
    </header>
    <div className="flex py-8 gap-2">
    <h1>Você conseguiu selecionar um item.</h1>
    </div>
    </>
  )
}