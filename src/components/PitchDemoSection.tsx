import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, PlayCircle } from "lucide-react";
import {
  PITCH_VIDEO_VIEW_URL,
} from "@/config/pitchVideo";
import { SectionFadeBottom, SectionFadeTop } from "@/components/SectionFade";

export function PitchDemoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pitch"
      className="section-seam section-padding section-surface-sand relative overflow-hidden scroll-mt-24"
      aria-label="Product pitch video"
    >
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-56 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,oklch(0.55_0.14_25/0.08),transparent_70%)]"
        aria-hidden
      />
      <SectionFadeTop from="sand" />
      <SectionFadeBottom to="base" />

      <motion.div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="section-header"
        >
          <span className="section-eyebrow section-eyebrow-solution">Demo</span>
          <h2 className="section-title">
            Watch the <span className="gradient-text">Siyaha BH</span> pitch
          </h2>
          <p className="section-desc mx-auto max-w-[min(100%,36rem)] text-pretty">
            A short walkthrough of the vision—how travelers discover Bahrain and how local
            businesses connect through one AI-powered platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-4xl"
        >
          <div className="pitch-video-frame group relative overflow-hidden rounded-2xl border border-black/8 bg-[#0b1220] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.35)] sm:rounded-3xl">
            {/* Google Drive blocks cross-site iframes via CSP; open the video directly. */}
            <a
              href={PITCH_VIDEO_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-video w-full"
              aria-label="Open pitch video"
            >
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                  <PlayCircle size={18} className="text-primary" aria-hidden />
                  Tap to play
                </div>
              </div>
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Video won&apos;t play here?{" "}
            <a
              href={PITCH_VIDEO_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary/80"
            >
              Open in Google Drive
              <ExternalLink size={14} aria-hidden />
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
