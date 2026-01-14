import DynamicProfile from "./DynamicProfile"
import EmojiSwap from "./EmojiSwap"
const Intro = () => {
    return(
        <div className="w-full flex-row">
            <div className="flex flex-row">
                <DynamicProfile />
                <div className="text-2xl text-[var(--text)] px-8 flex justify-center items-center">
                    Hi, I'm Benson <EmojiSwap />
                </div>
            </div>
            <div className="py-4 text-[var(--text)]">
                I’m a quick and adaptable learner who enjoys working with software across different domains.
            </div>
        </div>
    )
}

export default Intro