import { GitHubCalendar } from 'react-github-calendar'

export default function GithubActivity() {
    return (
        <section className="py-28 max-w-6xl mx-auto border-white/5 scroll-mt-28">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-5xl font-semibold">
                    Activity
                </h2>
                <p className="mt-4 text-subtext">
                    Consistent daily development and iteration across multiple projects
                </p>
                <div className="mt-10 overflow-x-auto">
                    <GitHubCalendar
                        username="stanlysilas"
                        blockSize={12}
                        blockMargin={4}
                        fontSize={12}
                    />
                </div>
            </div>
        </section>
    )
}