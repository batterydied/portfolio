import GithubSVG from "./svg/GithubSVG"
import MailSVG from "./svg/MailSVG"

const Navbar = () => {
    return (
        <div className="w-full px-2 py-6 flex-rol items-center">
            <div className="w-full flex justify-between items-center">
                <div className="text-[var(--text)] font-bold text-2xl hover:cursor-pointer">
                BENSON ZHENG
                </div>
                <div className="text-[var(--border)] grid grid-cols-2 gap-2" >
                    <GithubSVG />
                    <MailSVG />
                </div>
            </div>
        </div>
    )
}

export default Navbar