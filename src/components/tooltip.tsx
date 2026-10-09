"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";
import styles from "./tooltip.module.css";

type TooltipPosition = { left: number; top: number };

const initialTooltipPosition: TooltipPosition = { left: 16, top: 16 };

function getTooltipPosition(
  wrap: HTMLSpanElement | null,
  tooltip: HTMLSpanElement | null,
): TooltipPosition {
  if (!wrap || !tooltip) return initialTooltipPosition;

  const wrapBounds = wrap.getBoundingClientRect();
  const tooltipBounds = tooltip.getBoundingClientRect();
  const gutter = 16;
  const maxLeft = Math.max(
    gutter,
    window.innerWidth - gutter - tooltipBounds.width,
  );
  const desiredLeft =
    wrapBounds.left + (wrapBounds.width - tooltipBounds.width) / 2;
  let top = wrapBounds.bottom + 9;

  if (top + tooltipBounds.height > window.innerHeight - gutter) {
    top = Math.max(gutter, wrapBounds.top - tooltipBounds.height - 9);
  }

  return {
    left: Math.min(Math.max(desiredLeft, gutter), maxLeft),
    top,
  };
}

function scheduleTooltipPosition(
  wrap: HTMLSpanElement | null,
  tooltip: HTMLSpanElement | null,
  setPosition: (position: TooltipPosition) => void,
) {
  const updatePosition = () =>
    setPosition(getTooltipPosition(wrap, tooltip));

  updatePosition();
  window.requestAnimationFrame(updatePosition);
}

function useTooltipPosition(
  open: boolean,
  wrapRef: { current: HTMLSpanElement | null },
  tooltipRef: { current: HTMLSpanElement | null },
  setPosition: (position: TooltipPosition) => void,
) {
  useEffect(() => {
    if (!open) return;

    let frame: number | undefined;
    const updatePosition = () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setPosition(getTooltipPosition(wrapRef.current, tooltipRef.current));
      });
    };

    window.addEventListener("scroll", updatePosition, {
      capture: true,
      passive: true,
    });
    window.addEventListener("resize", updatePosition);
    updatePosition();

    return () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open, setPosition, tooltipRef, wrapRef]);
}

const technologyDescriptions: Record<string, string> = {
  "Next.js": "React framework used to build the web app and its routes.",
  TypeScript: "JavaScript with static types for safer application code.",
  "Canvas 2D": "Browser drawing API used to render game graphics.",
  PostgreSQL: "Relational database used to store structured application data.",
  "CSS Modules": "Component-scoped styles that keep interface CSS organized.",
  "S3-compatible storage": "Object storage accessed through the S3 API.",
  "Object storage": "A way to store and retrieve files as individual objects.",
  "Node.js": "JavaScript runtime used for command-line tools and services.",
  Express: "Node.js web framework used to serve Peerovo’s HTTP API.",
  CLI: "Command-line interface for running developer workflows.",
  WebRTC: "Browser technology for real-time audio, video, and data.",
  PeerJS: "Library that simplifies peer-to-peer WebRTC connections.",
  coturn:
    "STUN and TURN server used to help browsers establish WebRTC connections.",
  WebLLM: "Runs language models locally in a browser with WebGPU.",
  WebGPU: "Browser API for GPU-accelerated compute and graphics.",
  "esbuild-wasm":
    "WebAssembly build tool for bundling JavaScript and TypeScript.",
};

type TechnologyTooltipProps = {
  name: string;
};

export function TechnologyTooltip({ name }: TechnologyTooltipProps) {
  const tooltipId = useId();
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(initialTooltipPosition);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  useTooltipPosition(open, wrapRef, tooltipRef, setPosition);
  const description =
    technologyDescriptions[name] ?? "Used to build this project.";

  function showTooltip() {
    scheduleTooltipPosition(wrapRef.current, tooltipRef.current, setPosition);
    setOpen(true);
  }

  function handlePointerEnter(event: PointerEvent<HTMLSpanElement>) {
    if (event.pointerType !== "touch") showTooltip();
  }

  function handlePointerLeave(event: PointerEvent<HTMLSpanElement>) {
    if (event.pointerType !== "touch") setOpen(false);
  }

  function handlePointerDown(event: PointerEvent<HTMLSpanElement>) {
    if (event.pointerType === "touch") {
      scheduleTooltipPosition(wrapRef.current, tooltipRef.current, setPosition);
      setOpen((wasOpen) => !wasOpen);
    }
  }

  return (
    <span
      className={styles.wrap}
      data-open={open ? "true" : undefined}
      ref={wrapRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onFocus={showTooltip}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <button
        aria-describedby={tooltipId}
        className={styles.technology}
        type="button"
      >
        {name}
      </button>
      <span
        className={styles.tooltip}
        id={tooltipId}
        ref={tooltipRef}
        role="tooltip"
        style={position}
      >
        {description}
      </span>
    </span>
  );
}

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
};

export function ExternalLink({
  href,
  children,
  className,
  label,
}: ExternalLinkProps) {
  const tooltipId = useId();
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(initialTooltipPosition);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  useTooltipPosition(open, wrapRef, tooltipRef, setPosition);
  let destination = "external site";

  try {
    destination = new URL(href).hostname.replace(/^www\./, "");
  } catch {
    // The fallback keeps the link useful if a future URL is not absolute.
  }

  function showTooltip() {
    scheduleTooltipPosition(wrapRef.current, tooltipRef.current, setPosition);
    setOpen(true);
  }

  return (
    <span
      className={styles.wrap}
      data-open={open ? "true" : undefined}
      ref={wrapRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onFocus={showTooltip}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") showTooltip();
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "touch") setOpen(false);
      }}
    >
      <a
        aria-describedby={tooltipId}
        aria-label={label}
        className={className}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
      <span
        className={styles.tooltip}
        id={tooltipId}
        ref={tooltipRef}
        role="tooltip"
        style={position}
      >
        Opens {destination} in a new tab.
      </span>
    </span>
  );
}
