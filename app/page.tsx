// app/page.tsx
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXing,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hi! I am&nbsp;
          <code className="font-mono font-bold">Rodrigo</code>,
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-left before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative rounded-full"
          src="/profile.jpg"
          alt="Rodrigo Logo"
          width={250}
          height={250}
          priority
        />
      </div>

      <div className="mt-2 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          I am a professional who strives for a vision with integrity and loves
          to be led upwards in a working environment. Over the past four years,
          I have worked as a Web Content Manager Associate for a marketing
          agency in Germany—two years in the office and two years remotely as a
          contractor.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          During this time, I developed a deep interest and strong desire to
          learn everything related to SEO, which has led me to pivot my career
          toward entry-level SEO roles. Before this, I worked as a dishwasher
          for one year. My journey from dishwasher to sales specialist in
          customer service and then to Web Content Manager Associate showcases
          my eagerness to learn and grow.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          My passion is delivering fresh and genuine content that provides users
          with direct solutions to their problems. When approaching content
          strategy, I believe in having a concrete goal—generating leads,
          driving sales, or increasing brand awareness. Understanding the
          audience is crucial: I delve into what they&apos;re searching for,
          their interests, and the problems they need to solve. This involves
          thorough keyword research using tools like Google Search Console and
          Bing Webmaster Tools to align our content with their search intent.
          Creating fresh, high-quality content is at the heart of what I do. I
          focus on producing unique, engaging material that stands out and
          resonates deeply with the audience. I ensure the content is factually
          accurate, well-written, and comprehensive, providing real value and
          directly addressing their needs.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          For direct SEO optimization, I integrate keywords naturally within the
          content, avoiding keyword stuffing and utilizing internal linking and
          image optimization. I also ensure the website is mobile-friendly and
          craft effective titles and meta descriptions. Promoting content
          through email marketing, social media, and partnerships with industry
          websites helps reach a wider audience.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          Recognizing that SEO is an ongoing process, I continuously track
          performance through analytics and adjust strategies as needed. By
          implementing these strategies on a project focused on &quot;Quick and
          Healthy Recipes for Working Families,&quot; we targeted long-tail
          keywords like &quot;healthy 30-minute dinners&quot; and &quot;easy,
          quick vegetarian recipes.&quot; This led to a significant increase in
          organic traffic—a 35% boost over six months—and improved user
          engagement metrics.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          However, only some strategies work as expected. In one instance, while
          working indirectly for a pharmaceutical company, we launched a product
          similar to a competitor&apos;s. Despite our efforts, we needed to
          generate more leads initially because the competitor had launched
          first. To pivot, I recommended a complete analysis to understand what
          our audience was searching for and how we could differentiate our
          product by highlighting unique benefits the competitor didn&apos;t
          offer. We collaborated with reputable industry media outlets to build
          trust and credibility. After adjusting our approach, we saw a 15%
          increase in leads within two months. This experience taught me the
          importance of differentiation, understanding competitors, and building
          credibility through trusted channels.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          To increase efficiency and performance in content management, I
          integrate AI tools and automation into my workflow. I identify terms
          based on the target market and our solutions for keyword research. I
          use AI tools like ChatGPT to brainstorm and outline topics, then craft
          fresh, unique content in a native-level style. Afterward, I use
          Grammarly to refine the text, ensuring it&apos;s polished and
          error-free. This approach optimizes content for both SEO and
          readability, focusing on delivering quality material.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          I&apos;ve also been involved in executing strategies for cross-purpose
          marketing and educational opportunities. In my previous role, I
          assisted in optimizing content and SEO strategies for webinars and
          educational materials scheduled for release. I focused on ensuring
          that valuable insights were accessible online to our target audience,
          primarily professionals seeking to enhance their knowledge and skills.
          By optimizing the content and promoting it through various channels,
          we aimed to raise brand awareness and make valuable information
          accessible to a broader audience.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          Professional clients, including stakeholders, love to communicate with
          me because I am compassionate, can put myself in others&apos; shoes,
          and deliver results. More than just working for them, I see it all as
          a beautifully crafted professional experience where trust between us
          is a top priority. Their desires, whether from PDF or Figma files, can
          be optimized to achieve perfect placement in search engines.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          My professional history reflects a person who wishes to have long-term
          professional partnerships as a contractor if you&apos;re looking for
          the same, hi to you!
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          I write in American English and have a near-native level of
          comprehension, including cultural nuances.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          I can support marketing campaigns with engaging, expert content and
          best practices that align with Googlebot guidelines. I can integrate
          and track trending keywords in articles and content to keep organic
          SEO at the top. I excel at optimizing blog posts and crafting website
          copy. I&apos;m proficient in supporting the execution of digital strategies
          and improving exposure.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
          I am certified in Google Digital Marketing & E-commerce.
        </p>
      </div>

      <div className="mt-10 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://redondo-profile-nxot.vercel.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Redondo Profile{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Profile Webpage built using HTML and CSS.
          </p>
        </a>

        <a
          href="https://birthday-gift-chi.vercel.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Birthday Gift{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Birthday gift webpage built using HTML and CSS.
          </p>
        </a>

        <a
          href="https://guglea-search-engine-flexbox-14xz.vercel.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Search Engine{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Built using HTML and CSS Flexible Box Layout.
          </p>
        </a>

        <a
          href="https://ecotree-crb8.vercel.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            ecotree{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Static Webpage built using HTML and CSS.
          </p>
        </a>

        <a
          href="https://interstellar-beyon3d.vercel.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            beyon3d Space exploration{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Static Webpage built using HTML and CSS.
          </p>
        </a>

        <a
          href="https://purpelio-cardji-tan9.vercel.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Business card{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Business Card built using HTML and CSS Flexible Box Layout.
          </p>
        </a>

        <a
          href="https://zimeple-rosa-flex-menu-fow2.vercel.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Pink Menu{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Pink Menu Buttons built using HTML and CSS Flexible Box Layout.
          </p>
        </a>
      </div>

      <div className="mt-20 mb-32 grid grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:gap-16">
        <a
          href="https://www.linkedin.com/in/rodrigo-teixeira-b8b889302/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-4xl mb-4 text-blue-600"
          />
          <p className="text-center text-lg font-semibold text-blue-600">
            LinkedIn
          </p>
        </a>

        <a
          href="https://github.com/iamthisknowledge"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-4xl mb-4 text-gray-800"
          />
          <p className="text-center text-lg font-semibold text-gray-800">
            GitHub
          </p>
        </a>
      </div>
    </main>
  );
}
