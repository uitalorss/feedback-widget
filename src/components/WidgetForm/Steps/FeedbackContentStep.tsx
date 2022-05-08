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
    <form className="my-4 w-full">
      <textarea 
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md"
        placeholder="Conte com detalhes o que está acontecendo..."
      />

      <footer className="flex gap-2 mt-2">
        <button type="submit" 
        className="p-2 bg-brand-500 border-transparent flex-1 flex justify-center items-center text-sm rounded-md hover:bg-brand-300 transition-colors">
          Enviar Feedback
        </button>
      </footer>
    </form>
    </>
  )
}