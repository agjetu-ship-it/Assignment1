export function TimelineYearCard({children, yearDate}: {children?: React.ReactNode, yearDate: string}) {
    return <div className="timelineYearCard">
        <div className="timelineHeading">
            <p>{yearDate}</p>
        </div>
        <div className="timelineFullSeparator"/>
        <div className="timelineContents">
            {children}
        </div>
    </div>
}