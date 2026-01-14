import DownloadSVG from "./svg/DownloadSVG"
import GithubSVG from "./svg/GithubSVG"
import MailSVG from "./svg/MailSVG"

const Navbar = () => {
    return (
        <div className="w-full px-2 py-6 flex-rol items-center">
            <div className="w-full flex justify-between items-center">
                <div className="text-[var(--text)] font-bold text-2xl">
                BENSON ZHENG
                </div>
                <div className="text-[var(--border)] flex items-center justify-center gap-2" >
                    <GithubSVG />
                    <MailSVG />
                    <DownloadSVG />
                </div>
            </div>
        </div>
    )
}

export default Navbar