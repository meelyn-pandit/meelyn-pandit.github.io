// Scroll-driven "data story" route for the anthropogenic-noise project.
import React, { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./story.css";
import useStoryScroll from "./useStoryScroll";

export default function NoiseEffects() {
  const rootRef = useRef(null);
  useStoryScroll(rootRef);

  return (
    <div className="story-root" ref={rootRef}>
      <div className="topbar">
        <RouterLink className="back" to="/">&larr; Meelyn Pandit</RouterLink>
        <span className="tag">Data Science · Behavioral Ecology</span>
      </div>

      {/* HERO */}
      <header className="hero">
        <video
          className="hero-video"
          src="/figure_10.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="kicker">A Data Story</div>
          <h1>The Hidden Cost of Noise</h1>
          <p className="dek">
            What does human-made noise do to birds raising their young? Following
            bluebird families reveals subtle shifts in how parents care for a nest.
          </p>
          <div className="byline">By Meelyn Pandit · Ph.D. research, University of Oklahoma</div>
          <div className="scroll-cue">Scroll to explore<span>&darr;</span></div>
        </div>
      </header>

      {/* INTRO */}
      <section className="story">
        <p className="reveal">
          <strong>Noise is one of the most pervasive forms of pollution — and one of
          the easiest to ignore.</strong> Traffic, industry, and machinery fill the
          background of nearly every landscape birds now nest in.
        </p>
        <p className="reveal d1">
          Parent birds make constant decisions about when to visit the nest, how often
          to feed, and when to stay away. If noise interferes with the cues they rely on,
          those decisions — and the nestlings that depend on them — could shift in ways
          that are hard to see without careful measurement.
        </p>
      </section>

      <blockquote className="pullquote reveal">
        &ldquo;The question isn't whether birds can hear the noise — it's whether it
        changes what they do next.&rdquo;
      </blockquote>

      {/* THE EXPERIMENT */}
      <section className="band">
        <div className="band-inner">
          <h2 className="reveal">The experiment</h2>
          <p className="intro reveal d1">
            Eastern Bluebird (<em>Sialia sialis</em>) families nesting in monitored boxes
            were tracked under a controlled noise treatment and a quiet control, across the
            full brood cycle.
          </p>
          <div className="stats">
            <div className="stat reveal">
              <div className="num" data-count="2">0</div>
              <div className="label">treatments compared: noise vs. control</div>
            </div>
            <div className="stat reveal d1">
              <div className="num" data-count="14" data-suffix="+">0</div>
              <div className="label">days of nestling development tracked</div>
            </div>
            <div className="stat reveal d2">
              <div className="num" data-count="100" data-suffix="s">0</div>
              <div className="label">of scored nest visits</div>
            </div>
          </div>
          <p className="caption">Figures are representative of the monitoring effort.</p>
        </div>
      </section>

      {/* THE REAL FIGURE */}
      <section className="band plain">
        <div className="band-inner">
          <h2 className="reveal">What the data showed</h2>
          <p className="intro reveal d1">
            Adult female visitation rates followed different trajectories under noise than
            in the control across the brood cycle — evidence that noise alters parental
            provisioning behavior.
          </p>
          <div className="figure chart reveal d1">
            <img src="/noise-visitation-rates.png"
              alt="Line chart: adult female visitation rates under control vs. noise treatments across nestling age" />
          </div>
          <p className="caption">
            Published Figure 2 (Behavioral Ecology, 2021) — mean adult female visitation
            rate across nestling age, control vs. noise treatment.
          </p>
        </div>
      </section>

      {/* INTERPRETATION */}
      <section className="story">
        <p className="reveal">
          The pattern was subtle but consistent: <strong>noise altered parental behavior and
          nestling developmental patterns — but not the condition of chicks at fledging.</strong>
          Parents appear to compensate, buffering their young from the full cost even as their
          own behavior shifts.
        </p>
      </section>

      {/* METHOD */}
      <section className="band">
        <div className="band-inner">
          <h2 className="reveal">How we know it's real</h2>
          <p className="intro reveal d1">
            Behavioral data are noisy and unbalanced. Mixed-effects models separate the effect
            of the noise treatment from natural variation between nests and across the brood
            cycle — the statistical backbone behind the figure above.
          </p>
          <div className="pipeline">
            <div className="step reveal">
              <div className="ico">🏠</div><div className="st">Per-nest data</div>
              <div className="sd">Repeated visits</div><div className="arrow">→</div>
            </div>
            <div className="step reveal d1">
              <div className="ico">📐</div><div className="st">Mixed-effects models</div>
              <div className="sd">Fixed + random effects</div><div className="arrow">→</div>
            </div>
            <div className="step reveal d2">
              <div className="ico">✅</div><div className="st">Treatment effect</div>
              <div className="sd">Isolated from noise in the data</div>
            </div>
          </div>
          <p className="caption">Statistical modeling in R.</p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing">
        <h2 className="reveal">Why it matters</h2>
        <p className="reveal d1">
          Fledging condition alone would have missed this story. Measuring behavior — and
          modeling it carefully — reveals the quieter ways human activity reshapes wildlife,
          the kind of effect that accumulates long before it becomes obvious.
        </p>
        <ul className="refs reveal d1">
          <li>
            <span className="j">Behavioral Ecology</span>
            <a className="t" href="http://dx.doi.org/10.1093/beheco/arab015" target="_blank" rel="noopener noreferrer">
              Anthropogenic noise alters parental behavior and nestling developmental patterns, but not fledging condition →
            </a>
          </li>
        </ul>
      </section>

      <p className="disclaimer">
        This page presents published Ph.D. research in an illustrative, editorial format;
        the chart is the paper's own figure, while stat tiles are representative rather than exact.
      </p>

      <footer>
        <div>Meelyn Pandit — Data Science &amp; Bioacoustics</div>
        <RouterLink className="btn-home" to="/">&larr; Back to portfolio</RouterLink>
      </footer>
    </div>
  );
}
