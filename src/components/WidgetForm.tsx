import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/emoji-bug.svg';
import ideaImageUrl from '../assets/emoji-idea.svg';
import otherImageUrl from '../assets/emoji-other.svg';
import { useState } from "react";

const feedbackTypes = {
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

type feedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null)

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe o seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500"
                onClick={() => setFeedbackType(key as feedbackType)}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
        })}
      </div>
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="https://www.rocketseat.com.br" className="underline">Rocketseat</a>
      </footer>
    </div>
  )
}