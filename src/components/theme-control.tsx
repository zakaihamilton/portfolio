"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { Icon } from "@/components/icon";
import styles from "./theme-control.module.css";

const themes = ["system", "light", "dark"] as const;
type Theme = (typeof themes)[number];

function subscribeToTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  function handleStorage(event: StorageEvent) {
    if (event.key !== "portfolio-theme" && event.key !== null) return;

    const storedTheme = event.newValue;
    const nextTheme = themes.includes(storedTheme as Theme)
      ? (storedTheme as Theme)
      : "system";

    if (document.documentElement.dataset.theme !== nextTheme) {
      document.documentElement.dataset.theme = nextTheme;
    } else {
      callback();
    }
  }

  window.addEventListener("storage", handleStorage);

  return () => {
    observer.disconnect();
    window.removeEventListener("storage", handleStorage);
  };
}

function getThemeSnapshot(): Theme {
  const currentTheme = document.documentElement.dataset.theme;
  return themes.includes(currentTheme as Theme)
    ? (currentTheme as Theme)
    : "system";
}

function getServerThemeSnapshot(): Theme {
  return "system";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;

  try {
    window.localStorage.setItem("portfolio-theme", theme);
  } catch {
    // The theme still applies for this visit when storage is unavailable.
  }
}

export function ThemeControl() {
  const tooltipId = useId();
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const [open, setOpen] = useState(false);
  const controlRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !controlRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function selectTheme(nextTheme: Theme) {
    applyTheme(nextTheme);
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div
      className={styles.control}
      data-open={open ? "true" : undefined}
      ref={controlRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        aria-controls={open ? "theme-options" : undefined}
        aria-describedby={tooltipId}
        aria-expanded={open}
        aria-label={`Choose color theme. Current setting: ${theme}.`}
        className={styles.trigger}
        onClick={() => setOpen((wasOpen) => !wasOpen)}
        ref={triggerRef}
        type="button"
      >
        <Icon
          name={
            theme === "system" ? "system" : theme === "dark" ? "moon" : "sun"
          }
          size={20}
        />
      </button>
      <span className={styles.tooltip} id={tooltipId} role="tooltip">
        Choose System, Light, or Dark.
      </span>
      {open ? (
        <div
          aria-label="Color theme"
          className={styles.options}
          id="theme-options"
          role="group"
        >
          {themes.map((option) => (
            <button
              aria-pressed={theme === option}
              className={styles.option}
              key={option}
              onClick={() => selectTheme(option)}
              type="button"
            >
              <Icon
                className={styles.optionIcon}
                name={
                  option === "system"
                    ? "system"
                    : option === "light"
                      ? "sun"
                      : "moon"
                }
                size={18}
              />
              <span>{option[0].toUpperCase() + option.slice(1)}</span>
              {theme === option ? (
                <Icon className={styles.check} name="check" size={18} />
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
