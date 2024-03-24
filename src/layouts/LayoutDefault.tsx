import { CardDisplay } from '$/components/CardDisplay';
import '@fontsource-variable/space-grotesk';

export function LayoutDefault({ children }: { children?: JSX.Element[] }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[15rem,1fr] md:grid-cols-[30.18rem,1fr] md:grid-rows-1 w-full min-h-screen">
      <CardDisplay />
      {children}
    </div>
  )
}
