// app/page.tsx
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXing, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hallo! Ich bin&nbsp;
          <code className="font-mono font-bold">Rodrigo</code>,
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-left before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative rounded-full"
          src="/profile.jpg"
          alt="Rodrigo Logo"
          width={360}
          height={360}
          priority
        />
      </div>

      <div className="mt-2 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
        Ich bin ein erfahrener Web Content Manager mit einer Leidenschaft für die Erstellung und Optimierung von Webinhalten. In den letzten Jahren habe ich vielfältige Erfahrungen im Web Content Management gesammelt, insbesondere mit Content-Management-Systemen wie Drupal, ContentStack und grundlegenden Kenntnissen in TYPO3. Mein Fokus liegt auf der SEO-Optimierung und der Entwicklung von Content-Strategien, die sowohl suchmaschinenfreundlich als auch benutzerorientiert sind.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
        Ich habe umfangreiche Erfahrung in der Kommunikation mit Kunden per E-Mail und setze ihre Anforderungen basierend auf bereitgestellten Materialien wie PDFs oder Figma-Designs effizient um. Als Webmaster für die ContentStack-Plattform habe ich Unternehmenswebsites verwaltet und Kundenwünsche stets professionell und freundlich umgesetzt.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50 mb-4">
        Die Zusammenarbeit und Kommunikation mit Kunden aus Deutschland, Österreich und der Schweiz hat meine Fähigkeit gestärkt, effektiv in internationalen Teams zu arbeiten. Ich spreche fließend Deutsch, Englisch auf nahezu muttersprachlichem Niveau und Portugiesisch als Muttersprache, was mir hilft, in multikulturellen Umgebungen erfolgreich zu sein.
        </p>
        <p className="m-0 max-w-full text-lg opacity-50">
        Ich werde für meine aufrichtige Leidenschaft geschätzt, qualitativ hochwertige Webinhalte zu erstellen und zu einer verbesserten digitalen Präsenz beizutragen. Lass uns gemeinsam an Ihrem nächsten Projekt arbeiten!
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

      <div className="mt-20 mb-32 grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:gap-16">
        <a
          href="https://www.linkedin.com/in/rodrigo-teixeira-b8b889302/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-4xl mb-4 text-blue-600" />
          <p className="text-center text-lg font-semibold text-blue-600">LinkedIn</p>
        </a>

        <a
          href="https://www.xing.com/profile/Rodrigo_Teixeira11"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faXing} className="text-4xl mb-4 text-green-600" />
          <p className="text-center text-lg font-semibold text-green-600">XING</p>
        </a>

        <a
          href="https://github.com/iamthisknowledge"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faGithub} className="text-4xl mb-4 text-gray-800" />
          <p className="text-center text-lg font-semibold text-gray-800">GitHub</p>
        </a>
      </div>
    </main>
  );
}
