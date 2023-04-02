import { Icon, React, TailwindCSS, Vite } from './IconsFooter'

export const Footer = () => {
  return (
    <footer className='w-full'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='#fdba74' fillOpacity='1' d='M0,224L30,229.3C60,235,120,245,180,229.3C240,213,300,171,360,176C420,181,480,235,540,261.3C600,288,660,288,720,288C780,288,840,288,900,272C960,256,1020,224,1080,224C1140,224,1200,256,1260,261.3C1320,267,1380,245,1410,234.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z' /></svg>
      <div className='p-4 bg-orange-300 w-full flex flex-col items-center gap-2'>
        <h2>
          E-COMMERCE REALIZADO POR QUINTEROS TOMAS
        </h2>
        <h3>PROYECTO REALIZADO CON:</h3>
        <div className='flex gap-20 items-center justify-center text-gray-500'>
          <Icon icon={<React />} text='React' />
          <Icon icon={<TailwindCSS />} text='TailwindCSS' />
          <Icon icon={<Vite />} text='Vite' />
        </div>
      </div>
    </footer>
  )
}
