const React = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-react' width='82' height='82' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102' />
      <path d='M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102' />
      <path d='M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2' />
      <path d='M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2' />
      <path d='M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896' />
      <path d='M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897' />
      <path d='M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z' />
    </svg>
  )
}
const TailwindCSS = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-tailwind' width='82' height='82' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z' />
    </svg>
  )
}

export const Footer = () => {
  return (
    <footer className='w-full'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='#fdba74' fill-opacity='1' d='M0,224L30,229.3C60,235,120,245,180,229.3C240,213,300,171,360,176C420,181,480,235,540,261.3C600,288,660,288,720,288C780,288,840,288,900,272C960,256,1020,224,1080,224C1140,224,1200,256,1260,261.3C1320,267,1380,245,1410,234.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z' /></svg>
      <div className='p-4 bg-orange-300 w-full flex flex-col items-center gap-2'>
        <h2>
          E-COMMERCE REALIZADO POR QUINTEROS TOMAS
        </h2>
        <h3>PROYECTO REALIZADO CON:</h3>
        <div className='flex gap-20 items-center justify-center text-gray-500'>
          <div className='hover:scale-110 transition-all hover:text-cyan-400 flex flex-col items-center'>
            <React />
            React
          </div>
          <div className='hover:scale-110 transition-all hover:text-cyan-400 flex flex-col items-center'>
            <TailwindCSS />
            TailwindCSS
          </div>
        </div>
      </div>
    </footer>
  )
}
