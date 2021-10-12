import { useMediaQuery } from 'react-responsive';

// Components
import Layout, { siteTitle } from '../../components/layout';
import Button from '../../components/button';
import { Title } from '../../components/fonts';


export default function About() {

  const isMobile = useMediaQuery({query: '(max-width: 500px)'})

  return (
    <Layout>
      <div className="h-screen w-full grid grid-cols-12 grid-rows-6">
        <div className="row-start-2 col-span-full text-center flex items-end leading-0">
          <Title>Music</Title>
       </div>
       <div className="row-start-4 row-span-2 col-start-3 col-span-8 flex flex-col gap-4">
        <iframe clasName="min-h-40 max-h-96" src="https://open.spotify.com/embed/artist/0EQKi7Dqf5biZ3RaVGbZpt?theme=0" width="100%" height="160" frameBorder="0" allowtransparency="true" allow="encrypted-media"/>
        </div>
      </div>
      </Layout>
  )
}
