export function BlogCard({children}: {children?: React.ReactNode}) {
    return <div className="blogCard">
            {children}
        </div>
}
export function BlogTitle({children}: {children?: React.ReactNode}) {
    return <h2 className="borderlessTitle">{children}</h2>;
}
export function MinuteToReadTime({mins}: {mins: number}) {
    return <p className="ghost">
        {`~${mins} minutes to read`}
    </p>
}