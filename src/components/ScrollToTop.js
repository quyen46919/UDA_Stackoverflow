import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        const header = document.getElementById('scroller');
        header.scrollTo({ top: 0, behavior:'smooth' });
        header.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        header.scrollIntoView();
        window.scrollTo(0, 0);
        window.scroll(0, 0);
    }, [pathname]);

    return null;
}