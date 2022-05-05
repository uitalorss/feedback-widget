export function WidgetForm(){
  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe o seu feedback</span>
      </header>
      <p>Bem-vindo!!</p>
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="https://www.rocketseat.com.br" className="underline">Rocketseat</a>
      </footer>
    </div>
  )
}