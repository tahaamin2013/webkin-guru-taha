
const TextCycle = () => {

  return (  
    <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
      <span className="text-purple-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
        <ul className="block animate-text-slide-6 z-0 text-center leading-tight [&_li]:block">
          <li>Good people creating great work</li>
          <li>Formed by strategic insights</li>
          <li>Data that informs & predicts</li>
          <li>Media that inspires action</li>
          <li>& creative that makes connections</li>
          <li>That delivers awesome results</li>
          <li aria-hidden="true">Good people creating great work</li>
        </ul>
      </span>
    </div>
  );
};

export default TextCycle;
