import { GitHubCalendar } from 'react-github-calendar'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default function GithubActivity() {
    const { theme } = useContext(ThemeContext)

    return (
        <section className="py-28 max-w-6xl mx-auto scroll-mt-28">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-5xl font-semibold">
                    Activity
                </h2>
                <p className="mt-4 text-subtext">
                    Consistent daily development and iteration across multiple projects
                </p>
                <div className="heatmap-card mt-10 overflow-x-auto p-4 rounded-2xl border">
                    <GitHubCalendar
                        username="stanlysilas"
                        blockSize={12}
                        blockMargin={4}
                        fontSize={12}
                        theme={
                            theme === 'light'
                                ? {
                                    light: [
                                        '#ebedf0',
                                        '#c6d0ff',
                                        '#a5b4ff',
                                        '#8E9BFF',
                                        '#6c7bff'
                                    ]
                                }
                                : {
                                    dark: [
                                        '#161b22',
                                        '#2d3650',
                                        '#4c5bd4',
                                        '#6c7bff',
                                        '#8E9BFF'
                                    ]
                                }
                        }
                    />
                </div>
            </div>
        </section>
    )
}