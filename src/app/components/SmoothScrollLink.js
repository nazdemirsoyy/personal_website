import { useNavigation } from 'next/navigation';

const SmoothScrollLink = ({ href, children }) => {
    const navigation = useNavigation();

    const handleClick = async (e) => {
        e.preventDefault();

        // Navigate if it's a path change
        if (href.startsWith('/')) {
            await navigation.navigate(href);
        }

        // Extract the anchor part for in-page navigation
        const anchor = href.split('#')[1];
        if (anchor) {
            setTimeout(() => {
                const element = document.getElementById(anchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Delay to allow for page update, adjust as necessary
        }
    };

    return (
        <a href={href} onClick={handleClick} style={{ cursor: 'pointer' }}>
            {children}
        </a>
    );
};

export default SmoothScrollLink;
