// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hallo! Ich bin&nbsp;
          <code className="font-mono font-bold">Rodrigo</code>,
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
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
  <p className="m-0 max-w-full text-lg opacity-50">
    ein Webentwickler mit einer Leidenschaft für die Erstellung sauberer und dynamischer Websites. In den letzten 5 Jahren habe ich vielfältige Erfahrungen in der Webentwicklung gesammelt. Ich habe umfangreiche Erfahrung in der Kommunikation mit Kunden per E-Mail und der Umsetzung ihrer Anforderungen anhand von PDFs oder Figma-Modellen. Zudem war ich Webmaster für die Contentstack-Plattform, habe Unternehmenswebsites auf Basis von Drupal verwaltet und Kundenanforderungen stets professionell und freundlich umgesetzt. Ich habe mit Kunden aus Deutschland, Österreich und der Schweiz zusammengearbeitet und kommuniziert und war erfolgreich in der Umsetzung dessen, was die Kunden in unseren Gesprächen sowie in E-Mails kommuniziert haben. Ich spreche fließend Deutsch und Englisch auf nahezu muttersprachlichem Niveau, was mir hilft, effektiv mit internationalen Kunden zu kommunizieren. Ich werde für meine aufrichtige Leidenschaft geschätzt, zu helfen und zu einer vereinteren Welt beizutragen. Lass uns gemeinsam zusammenarbeiten!
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
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <i className="fab fa-linkedin text-4xl mb-4 text-blue-600"></i>
          <p className="text-center text-lg font-semibold">LinkedIn</p>
        </a>

        <a
          href="https://www.xing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <i className="fab fa-xing text-4xl mb-4 text-green-600"></i>
          <p className="text-center text-lg font-semibold">Xing</p>
        </a>

        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <i className="fab fa-github text-4xl mb-4 text-gray-800"></i>
          <p className="text-center text-lg font-semibold">GitHub</p>
        </a>
      </div>
    </main>
  );
}
