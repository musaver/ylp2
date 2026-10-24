import Link from "next/link";
import type { ReactNode } from "react";
import { REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";

interface JoinPrivacyProps {
  heading?: string;
  /** Note text; defaults to the /join-youthlink application note. */
  children?: ReactNode;
}

/**
 * Short privacy note shown under the /join-youthlink and /feedback forms, inside their dark
 * form section (passed to the form as `note`).
 */
export function JoinPrivacy({ heading = "Privacy", children }: JoinPrivacyProps) {
  return (
    <div className="join-privacy" data-framer-name="Privacy Note">
      <div className="join-privacy-card" style={REVEAL_STYLE}>
        <div className="join-privacy-icon" aria-hidden="true">
          {/* Padlock */}
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
            <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" strokeWidth="1.8" />
            <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="15.5" r="1.4" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <div className="join-privacy-content">
          <h2
            className="framer-text framer-styles-preset-1l7r60j"
            data-styles-preset="XCzJqaiBz"
            dir="auto"
            style={{ "--framer-text-color": TOKENS.white }}
          >
            {heading}
          </h2>
          <p
            className="framer-text framer-styles-preset-1dpgexf"
            data-styles-preset="wUYf66_Db"
            dir="auto"
            style={{ "--framer-text-color": TOKENS.lightGrey }}
          >
            {children ?? (
              <>
                Your answers are stored securely and reviewed only by authorised YouthLink
                personnel. They are never published or shared outside the review team. We will
                contact you using the details you provide. Have a suggestion or a concern instead?{" "}
                <Link className="join-privacy-link" href="/feedback">
                  Share feedback or raise a complaint
                </Link>
                .
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
