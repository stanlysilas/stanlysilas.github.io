import { GitHubCalendar } from "react-github-calendar";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./GithubActivity.css";

export default function GithubActivity() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="github-section scroll-mt-28">
      <div className="github-header">
        <div>
          <div className="github-index">04 — ACTIVITY</div>

          <h2 className="github-title">
            Building,
            <br />
            <em>every day.</em>
          </h2>
        </div>

        <div className="github-description">
          <p>
            A snapshot of my development activity across open-source work,
            experiments, and personal projects.
          </p>

          <a
            href="https://github.com/stanlysilas"
            target="_blank"
            rel="noopener noreferrer"
            className="github-status"
          >
            <span className="github-status-dot" />
            github.com/stanlysilas
          </a>
        </div>
      </div>

      <div className="github-terminal">
        <div className="github-terminal-header">
          <div className="github-terminal-dots">
            <span />
            <span />
            <span />
          </div>

          <span>stanly@stanworks:~/activity/github</span>

          <span>LIVE</span>
        </div>

        <div className="github-calendar">
          <GitHubCalendar
            username="stanlysilas"
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            theme={
              theme === "light"
                ? {
                    light: [
                      "#ebedf0",
                      "#c6d0ff",
                      "#a5b4ff",
                      "#8E9BFF",
                      "#6c7bff",
                    ],
                  }
                : {
                    dark: [
                      "#11151b",
                      "#26332b",
                      "#3b6645",
                      "#4f9d5d",
                      "#69d27b",
                    ],
                  }
            }
          />
        </div>
      </div>
    </section>
  );
}
