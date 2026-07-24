// Scroll-driven "data story" route for the agent-based-model project.
import React, { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./story.css";
import useStoryScroll from "./useStoryScroll";

export default function AgentModel() {
  const rootRef = useRef(null);
  useStoryScroll(rootRef);

  return (
    <div className="story-root" ref={rootRef}>
      <div className="topbar">
        <RouterLink className="back" to="/">&larr; Meelyn Pandit</RouterLink>
        <span className="tag">Data Science · Agent-Based Modeling</span>
      </div>

      {/* HERO */}
      <header
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(18,21,29,0.35) 0%, rgba(18,21,29,0.75) 55%, #12151d 100%), " +
            `url(${process.env.PUBLIC_URL}/sswma_landscape.JPEG)`,
        }}>
        <div className="hero-inner">
          <div className="kicker">A Data Story</div>
          <h1>When One Bird's Choice Reshapes a Chorus</h1>
          <p className="dek">
            An agent-based model shows how a drier climate can quietly rewire an
            entire acoustic community — one decision at a time.
          </p>
          <div className="byline">By Meelyn Pandit · Ph.D. research, University of Oklahoma</div>
          <div className="scroll-cue">Scroll to explore<span>&darr;</span></div>
        </div>
      </header>

      {/* INTRO */}
      <section className="story">
        <p className="reveal">
          <strong>A soundscape is not designed — it emerges.</strong> It is the sum
          of thousands of individual birds each deciding, moment to moment, whether
          the benefit of singing is worth the cost.
        </p>
        <p className="reveal d1">
          You cannot run a climate experiment on a wild population. So to ask how a
          drying world reshapes that collective chorus, I built a virtual one: an
          agent-based model where every bird follows simple rules, and the community
          pattern is left to emerge on its own.
        </p>
      </section>

      <blockquote className="pullquote reveal">
        &ldquo;Give each bird a few simple rules, then let the landscape decide what the chorus becomes.&rdquo;
      </blockquote>

      {/* THE RULES */}
      <section className="band">
        <div className="band-inner">
          <h2 className="reveal">The rules each bird follows</h2>
          <p className="intro reveal d1">
            Every agent in the model is a single bird weighing the same trade-off that
            real birds face on a warming, drying landscape.
          </p>
          <div className="pipeline">
            <div className="step reveal">
              <div className="ico">📣</div>
              <div className="st">Sing to be heard</div>
              <div className="sd">Communicate with mates &amp; rivals</div>
            </div>
            <div className="step reveal d1">
              <div className="ico">💧</div>
              <div className="st">Singing is costly</div>
              <div className="sd">Energy &amp; water are limited</div>
            </div>
            <div className="step reveal d2">
              <div className="ico">🏜️</div>
              <div className="st">Aridity eats sound</div>
              <div className="sd">Drier air attenuates signals faster</div>
            </div>
          </div>
        </div>
      </section>

      {/* INDIVIDUALS -> SOUNDSCAPE */}
      <section className="band plain">
        <div className="band-inner">
          <h2 className="reveal">From individuals to a soundscape</h2>
          <p className="intro reveal d1">
            No agent is told what the community should sound like. The soundscape is an
            emergent property — the aggregate of countless local decisions and interactions.
          </p>
          <div className="pipeline">
            <div className="step reveal">
              <div className="ico">🐦</div>
              <div className="st">Agents</div>
              <div className="sd">Individual birds</div>
              <div className="arrow">→</div>
            </div>
            <div className="step reveal d1">
              <div className="ico">🔊</div>
              <div className="st">Local rules</div>
              <div className="sd">Sing / stay silent</div>
              <div className="arrow">→</div>
            </div>
            <div className="step reveal d2">
              <div className="ico">🔁</div>
              <div className="st">Interactions</div>
              <div className="sd">Overlap &amp; masking</div>
              <div className="arrow">→</div>
            </div>
            <div className="step reveal d3">
              <div className="ico">🌐</div>
              <div className="st">Soundscape</div>
              <div className="sd">Emergent composition</div>
            </div>
          </div>
        </div>
      </section>

      {/* ARIDITY DIAL / CHART */}
      <section className="band">
        <div className="band-inner chart-section">
          <h2 className="reveal">Turning the dial on aridity</h2>
          <p className="intro reveal d1">
            As simulated aridity rises, sound attenuates over shorter distances — so the
            same song reaches fewer listeners, and individuals sing less.
          </p>
          <div className="chart-wrap reveal d1">
            <div className="chart-legend">
              <span><i style={{ background: "#f6ad55" }} />Sound attenuation</span>
              <span><i style={{ background: "#68d391" }} />Effective communication range</span>
            </div>
            <svg viewBox="0 0 800 380" width="100%" role="img"
              aria-label="As aridity increases, attenuation rises while effective communication range falls">
              <line className="axis" x1="70" y1="30" x2="70" y2="320" />
              <line className="axis" x1="70" y1="320" x2="760" y2="320" />
              <text className="axis-label" x="40" y="180" transform="rotate(-90 40 180)" textAnchor="middle">Signal cost / range</text>
              <text className="axis-label" x="415" y="360" textAnchor="middle">Increasing aridity →</text>
              <path className="trend" style={{ stroke: "#f6ad55" }} d="M 90 300 C 260 270, 440 170, 740 70" />
              <path className="trend" style={{ stroke: "#68d391" }} d="M 90 90 C 260 130, 440 240, 740 300" />
              <circle className="dot" cx="740" cy="70" r="5" fill="#f6ad55" />
              <circle className="dot" cx="740" cy="300" r="5" fill="#68d391" />
            </svg>
          </div>
          <p className="caption">Schematic of the model's core tension — attenuation rises and effective
            communication range falls with aridity. Trend shapes are illustrative.</p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="band plain">
        <div className="band-inner">
          <h2 className="reveal">Watching the community shift</h2>
          <p className="intro reveal d1">
            Run the model forward and the effect is visible: individual adjustments
            accumulate into population-level shifts in the soundscape's composition.
          </p>
          <div className="figure reveal d1">
            <video src="/contemporary_timelapse.mp4" autoPlay muted loop playsInline preload="metadata"
              aria-label="Agent-based model animation of soundscape dynamics"></video>
          </div>
          <p className="caption">Agent-based model output — simulated soundscape dynamics under changing aridity (R).</p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing">
        <h2 className="reveal">Why it matters</h2>
        <p className="reveal d1">
          Agent-based models let us ask "what if?" at the scale of a whole community —
          testing how a changing climate could reshape communication systems long before
          those changes would be measurable in the field.
        </p>
        <ul className="refs reveal d1">
          <li>
            <span className="j">Ecology and Evolution</span>
            <a className="t" href="https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.9359" target="_blank" rel="noopener noreferrer">
              Environmental conditions lead to shifts in individual communication, with cascading effects on soundscape composition →
            </a>
          </li>
        </ul>
      </section>

      <p className="disclaimer">
        This page presents the methods and direction of published Ph.D. research in an
        illustrative, editorial format; specific figures shown in the graphics are
        representative rather than exact.
      </p>

      <footer>
        <div>Meelyn Pandit — Data Science &amp; Bioacoustics</div>
        <RouterLink className="btn-home" to="/">&larr; Back to portfolio</RouterLink>
      </footer>
    </div>
  );
}
