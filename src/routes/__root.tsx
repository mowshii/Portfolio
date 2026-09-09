import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteLayout } from "@/components/SiteLayout";
import appCss from "../styles.css?url";

const APP_NAME = "Mowshika Srivarshini — Software Developer | AI & Machine Learning";
const APP_DESCRIPTION =
  "Portfolio of Mowshika Srivarshini, a software developer focused on artificial intelligence, machine learning, generative AI and full-stack development.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: APP_DESCRIPTION },
      { name: "theme-color", content: "#F6F1EA" },
      { name: "author", content: "Mowshika Srivarshini G" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Outfit:wght@300;400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-ivory text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <SiteLayout>
      <section className="wrap section text-center">
        <p className="kicker">404</p>
        <h1 className="mt-4 font-display text-5xl">This page is still a blank page.</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          The studio doesn't have this room yet. Head back to the work.
        </p>
        <a href="/" className="btn mt-8">
          Back home
        </a>
      </section>
    </SiteLayout>
  );
}
