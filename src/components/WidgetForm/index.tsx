import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/emoji-bug.svg';
import ideaImageUrl from '../../assets/emoji-idea.svg';
import otherImageUrl from '../../assets/emoji-other.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'imagem de um inseto em alusão a um erro.'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'imagem de uma lampada em alusão a uma ideia.'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: otherImageUrl,
      alt: 'imagem de um balao de pensamento.'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback(){
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
       <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} /> 
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
          <FeedbackContentStep 
            feedbackType={feedbackType}
            onFeedbackRestart={handleRestartFeedback}
            onFeedbackSent={() => setFeedbackSent(true)}
          />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="https://www.rocketseat.com.br" className="underline">Rocketseat</a>
      </footer>
    </div>
  )
}