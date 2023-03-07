import c from "classnames"
import { ReactNode } from "react"

interface NodeContainerProps {
    type: "left" | "right",
    children: ReactNode,
}

export default function NodeContainer({ children, type }: NodeContainerProps) {
    return <div className={c("flex shrink-0 flex-col items-center gap-2 relative before:absolute before:border-white before:border-t-2 before:h-8 before:bottom-full before:-z-10", {
        "before:-right-2 before:left-[calc(50%-1px)] before:border-l-2 before:rounded-tl-lg"
            : type === "left",
        "before:right-[calc(50%-1px)] before:-left-2 before:border-r-2 before:rounded-tr-lg"
            : type === "right",
    })}>{children}</div>
}