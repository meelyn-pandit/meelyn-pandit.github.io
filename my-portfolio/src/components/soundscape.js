// Scroll-driven "data story" route for the bioacoustics project.
// Narrative + infographics that reveal/animate as the reader scrolls.
import React, { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./story.css";
import useStoryScroll from "./useStoryScroll";

export default function Soundscape() {
  const rootRef = useRef(null);
  useStoryScroll(rootRef);

  return (
    <div className="story-root" ref={rootRef}>
      <div className="topbar">
        <RouterLink className="back" to="/">&larr; Meelyn Pandit</RouterLink>
        <span className="tag">Data Science · Bioacoustics</span>
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
          <h1>Listening to a Changing Soundscape</h1>
          <p className="dek">
            Machine learning and thousands of hours of field audio reveal what a
            drying climate is doing to the songs of birds.
          </p>
          <div className="byline">By Meelyn Pandit · Ph.D. research, University of Oklahoma</div>
          <div className="scroll-cue">Scroll to explore<span>&darr;</span></div>
        </div>
      </header>

      {/* INTRO */}
      <section className="story">
        <p className="reveal">
          <strong>
            Sound is one of the first things to change in a stressed ecosystem —
            and one of the hardest to measure.
          </strong>{" "}
          Birds sing to defend territories and attract mates, but singing is
          costly, especially where water is scarce and the air itself swallows sound.
        </p>
        <p className="reveal d1">
          As climate change pushes landscapes toward greater aridity, a question
          follows: does the chorus grow quieter? Answering it means listening at a
          scale no human ear can manage — so I turned to automated recorders,
          machine learning, and time-series analysis.
        </p>
      </section>

      <blockquote className="pullquote reveal">
        &ldquo;To hear a whole landscape, you first have to teach a computer to listen.&rdquo;
      </blockquote>

      {/* THE DATA */}
      <section className="band">
        <div className="band-inner">
          <h2 className="reveal">The scale of listening</h2>
          <p className="intro reveal d1">
            Passive acoustic recorders were deployed across an aridity gradient,
            capturing the soundscape continuously — day and night, across seasons.
          </p>
          <div className="stats">
            <div className="stat reveal">
              <div className="num" data-count="10000" data-suffix="+">0</div>
              <div className="label">hours of field audio recorded</div>
            </div>
            <div className="stat reveal d1">
              <div className="num" data-count="24" data-suffix="/7">0</div>
              <div className="label">continuous monitoring across the gradient</div>
            </div>
            <div className="stat reveal d2">
              <div className="num" data-count="40" data-suffix="+">0</div>
              <div className="label">species detectable by song</div>
            </div>
          </div>
          <p className="caption">Figures are representative of the monitoring effort.</p>
        </div>
      </section>

      {/* ML PIPELINE */}
      <section className="band plain">
        <div className="band-inner">
          <h2 className="reveal">Teaching a machine to hear birdsong</h2>
          <p className="intro reveal d1">
            Raw audio is unusable at scale until it is structured. A
            machine-learning pipeline turns continuous recordings into a clean
            dataset of who sang, and when.
          </p>
          <div className="pipeline">
            <div className="step reveal">
              <div className="ico">🎙️</div>
              <div className="st">Field audio</div>
              <div className="sd">Continuous recordings</div>
              <div className="arrow">→</div>
            </div>
            <div className="step reveal d1">
              <div className="ico">📊</div>
              <div className="st">Spectrograms</div>
              <div className="sd">Sound → image</div>
              <div className="arrow">→</div>
            </div>
            <div className="step reveal d2">
              <div className="ico">🧠</div>
              <div className="st">ML classifier</div>
              <div className="sd">Detect &amp; label songs</div>
              <div className="arrow">→</div>
            </div>
            <div className="step reveal d3">
              <div className="ico">📈</div>
              <div className="st">Detections</div>
              <div className="sd">Structured time series</div>
            </div>
          </div>
          <p className="caption">
            TensorFlow · Python — audio is converted to spectrograms and classified
            into per-species detections.
          </p>
        </div>
      </section>

      {/* FINDING / CHART */}
      <section className="band">
        <div className="band-inner chart-section" id="chartSection">
          <h2 className="reveal">What the data revealed</h2>
          <p className="intro reveal d1">
            Across the gradient, the pattern was consistent: as aridity increased,
            both song activity and community diversity declined.
          </p>
          <div className="chart-wrap reveal d1">
            <div className="chart-legend">
              <span><i style={{ background: "#68d391" }} />Song activity</span>
              <span><i style={{ background: "#63b3ed" }} />Species diversity</span>
            </div>
            <svg
              viewBox="0 0 800 380"
              width="100%"
              role="img"
              aria-label="Song activity and species diversity both decline as aridity increases">
              <line className="axis" x1="70" y1="30" x2="70" y2="320" />
              <line className="axis" x1="70" y1="320" x2="760" y2="320" />
              <text className="axis-label" x="40" y="180" transform="rotate(-90 40 180)" textAnchor="middle">
                Vocal activity / diversity →
              </text>
              <text className="axis-label" x="415" y="360" textAnchor="middle">
                Increasing aridity →
              </text>
              <path className="trend" style={{ stroke: "#68d391" }} d="M 90 80 C 250 110, 430 210, 740 295" />
              <path className="trend" style={{ stroke: "#63b3ed" }} d="M 90 130 C 260 160, 450 240, 740 300" />
              <circle className="dot" cx="90" cy="80" r="5" fill="#68d391" />
              <circle className="dot" cx="740" cy="295" r="5" fill="#68d391" />
              <circle className="dot" cx="90" cy="130" r="5" fill="#63b3ed" />
              <circle className="dot" cx="740" cy="300" r="5" fill="#63b3ed" />
            </svg>
          </div>
          <p className="caption">
            Schematic of the published finding — song activity and species diversity
            show consistent, negative responses to increasing aridity. Trend shapes
            are illustrative.
          </p>
        </div>
      </section>

      {/* ABM VIDEO */}
      <section className="band plain">
        <div className="band-inner">
          <h2 className="reveal">Simulating the cascade</h2>
          <p className="intro reveal d1">
            To ask what happens next, an agent-based model simulates how
            aridity-driven sound attenuation reshapes individual vocal behavior —
            and how those individual choices cascade into population-level shifts
            across the whole soundscape.
          </p>
          <div className="figure reveal d1">
            <video
              src="/contemporary_timelapse.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Agent-based model animation of soundscape dynamics"
            />
          </div>
          <p className="caption">
            Agent-based model output — simulated soundscape dynamics under changing aridity (R).
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing">
        <h2 className="reveal">Why it matters</h2>
        <p className="reveal d1">
          Soundscapes are an early-warning system for ecosystems under climate
          stress. By pairing machine learning with long-term acoustic monitoring,
          we can track that change continuously, objectively, and at a scale that
          turns a wall of noise into an interpretable signal.
        </p>
        <ul className="refs reveal d1">
          <li>
            <span className="j">Ecology and Evolution</span>
            <a className="t" href="https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.9359" target="_blank" rel="noopener noreferrer">
              Environmental conditions lead to shifts in individual communication, with cascading effects on soundscape composition →
            </a>
          </li>
          <li>
            <span className="j">Behavioral Ecology</span>
            <a className="t" href="http://dx.doi.org/10.1093/beheco/arab015" target="_blank" rel="noopener noreferrer">
              Anthropogenic noise alters parental behavior and nestling developmental patterns →
            </a>
          </li>
        </ul>
      </section>

      <p className="disclaimer">
        This page presents the methods and direction of published Ph.D. research in
        an illustrative, editorial format; specific figures shown in the graphics
        are representative rather than exact.
      </p>

      <footer>
        <div>Meelyn Pandit — Data Science &amp; Bioacoustics</div>
        <RouterLink className="btn-home" to="/">&larr; Back to portfolio</RouterLink>
      </footer>
    </div>
  );
}
