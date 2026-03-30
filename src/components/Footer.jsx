import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-12 md:mt-0 w-full py-8 mt-auto border-t border-zinc-800 bg-neutral-950">
        <div className="flex justify-center items-center text-zinc-500 text-sm">
            <p>
            &copy; {currentYear} {t('footer.name')}
            </p>
        </div>
        </footer>
    );
    };

export default Footer;