import Layout, { siteTitle } from '../../components/layout';
import { Subtitle, Title } from '../../components/fonts';
import SocialMedia from '../../components/socialMedia';

export default function About() {
  return (
    <Layout>
      <div className="w-full -h-full p-20 flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col items-center gap-y-8 text-center">
          
            <Title>Contact</Title>
          <Subtitle href="mailto:hello@pacificoceans.uk ">Send us an email</Subtitle>
          <div className="rounded-sm border border-black max-w-[250px] max-h-[200px] overflow-hidden content-center">
          <img className="object-cover" src="/images/contact-photo.jpeg" alt="" />
        </div>
          <Subtitle>Or follow us on</Subtitle>
          <SocialMedia />
        </div>
      </div>
    </Layout>
  )
}
