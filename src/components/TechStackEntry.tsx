import type { ComponentType } from "react";

export default function TechStackEntry({name, Icon} : {name: string, Icon: ComponentType<{ className?: string }>;}){
    return (
        <div className="group flex flex-col justify-center items-center py-2 w-full h-full bg-[var(--bg)] border-1 rounded-sm border-[var(--border)]">
            <Icon className="text-[var(--text)] group-hover:-translate-y-1 transition-transform"/>
            <div className="hidden lg:block text-[var(--text)] p-1 text-xs">{name}</div>
        </div>
    )
}