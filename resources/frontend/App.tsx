import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || '';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.importGlob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        return createRoot(el).render(
            <StrictMode>
                <MantineProvider withGlobalStyles withNormalizeCSS>
                    <NotificationsProvider>
                        <App {...props} />
                    </NotificationsProvider>
                </MantineProvider>
              </StrictMode>
            );
    },
});

InertiaProgress.init({ color: '#4B5563' });