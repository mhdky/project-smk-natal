const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <p className={`border-t border-zinc-200 w- text-sm text-center p-4`}>{currentYear} Build with 💗 | All right reserved</p>
    );
}

export default Footer;