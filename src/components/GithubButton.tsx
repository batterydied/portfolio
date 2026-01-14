import PlainGithubSVG from "./svg/PlainGithubSVG"
export default function GithubButton({className, link} : {className : string, link: string}){
    return (
        <button onClick={(e) => {
            if(link == "") {
                e.preventDefault();
                return;
            }
        }}
            className={`${className} min-w-[100px] bg-[var(--secondary)] p-2 border-1 border-[var(--border)] active:bg-[var(--selected)] rounded-md text-[var(--text)] flex gap-2 items-center justify-center hover:bg-[var(--border)]`}>
            <PlainGithubSVG />
            <div>
                Source
            </div>
        </button>
    )
}