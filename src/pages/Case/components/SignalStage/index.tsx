export default function SignalStage() {
  return (
    <>
      <div className="cases-signal-stage">
        <svg className="cases-signal-map" viewBox="0 0 1440 760" fill="none">
          <defs>
            <filter
              id="cases-signal-glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feMerge>
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient
              id="cases-signal-flow-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#41B2FF" stopOpacity="0" />
              <stop offset="18%" stopColor="#41B2FF" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#41B2FF" stopOpacity="1" />
              <stop offset="82%" stopColor="#41B2FF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#41B2FF" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="cases-signal-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#41B2FF" />
              <stop offset="55%" stopColor="#41B2FF" />
              <stop offset="100%" stopColor="#41B2FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            className="cases-signal-track"
            d="M44 154C220 146 284 196 368 272C473 367 548 410 724 410C905 410 1036 305 1137 184C1208 99 1289 39 1396 27"
          />
          <path
            className="cases-signal-track"
            d="M44 708C221 714 291 644 383 568C489 479 566 420 724 410C886 399 1002 471 1089 560C1170 643 1263 730 1387 812"
          />
          <path
            className="cases-signal-flow cases-signal-flow--a"
            pathLength="100"
            d="M44 154C220 146 284 196 368 272C473 367 548 410 724 410C905 410 1036 305 1137 184C1208 99 1289 39 1396 27"
          />
          <path
            className="cases-signal-flow cases-signal-flow--b"
            pathLength="100"
            d="M44 708C221 714 291 644 383 568C489 479 566 420 724 410C886 399 1002 471 1089 560C1170 643 1263 730 1387 812"
          />
          <circle className="cases-signal-ring" cx="724" cy="410" r="30" />
          <g>
            <circle className="cases-ripple" cx="724" cy="410" r="10" />
            <circle className="cases-ripple" cx="724" cy="410" r="10" />
            <circle className="cases-ripple" cx="724" cy="410" r="10" />
            <circle className="cases-ripple" cx="724" cy="410" r="10" />
            <circle className="cases-ripple" cx="724" cy="410" r="10" />
          </g>
        </svg>
      </div>

      <style>{`
        .cases-signal-stage {
          position: relative;
          width: min(100%, 760px);
          height: auto;
          aspect-ratio: 1440/760;
          max-width: 760px;
          overflow: visible;
          isolation: isolate;
          pointer-events: none;
          margin-left: auto;
          transform: translateY(-50px) scale(1.1);
          transform-origin: right center
        }
        .cases-signal-stage::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 54%, rgba(65,178,255,0.14), transparent 42%);
          pointer-events: none
        }
        .cases-signal-map {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 0
        }
        .cases-signal-track, .cases-signal-flow {
          fill: none;
          stroke-linecap: round
        }
        .cases-signal-track {
          stroke: rgba(255,255,255,0.12);
          stroke-width: 2
        }
        .cases-signal-flow {
          stroke: url(#cases-signal-flow-gradient);
          stroke-width: 3.6;
          filter: url(#cases-signal-glow);
          animation: casesSignalTravel linear infinite
        }
        .cases-signal-flow--a {
          stroke-dasharray: 14 86;
          animation-duration: 4.3s
        }
        .cases-signal-flow--b {
          stroke-dasharray: 14 86;
          animation-duration: 5.3s;
          animation-delay: -2.6s
        }
        .cases-signal-ring {
          fill: none;
          stroke: rgba(61,199,255,0.92);
          stroke-width: 4;
          filter: url(#cases-signal-glow);
          animation: casesSignalPulse 2.8s ease-in-out infinite
        }
        .cases-ripple {
          fill: none;
          stroke: #41B2FF;
          stroke-width: .1;
          transform-origin: center;
          transform-box: fill-box;
          animation: casesRipple 2.5s ease-out infinite;
          opacity: 0;
          --ripple-opacity: 1
        }
        .cases-ripple:nth-child(2) {
          animation-delay: .4s;
          --ripple-opacity: .8
        }
        .cases-ripple:nth-child(3) {
          animation-delay: .8s;
          --ripple-opacity: .6
        }
        .cases-ripple:nth-child(4) {
          animation-delay: 1.2s;
          --ripple-opacity: .4
        }
        .cases-ripple:nth-child(5) {
          animation-delay: 1.6s;
          --ripple-opacity: .2
        }
        .cases-ripple:nth-child(even) {
          stroke-dasharray: 1 1
        }
        @keyframes casesSignalTravel {
          from { stroke-dashoffset: 0 }
          to { stroke-dashoffset: -100 }
        }
        @keyframes casesSignalPulse {
          0%, 100% { opacity: .8 }
          50% { opacity: 1 }
        }
        @keyframes casesRipple {
          0% { transform: scale(1); opacity: 0 }
          40% { opacity: var(--ripple-opacity, 1) }
          100% { transform: scale(16); opacity: 0 }
        }
      `}</style>
    </>
  );
}
