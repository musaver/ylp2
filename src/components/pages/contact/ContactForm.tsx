"use client";

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import { submitContact, type ContactField, type ContactState } from "@/app/contact-us/actions";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";
import type { FramerImage } from "@/lib/types";

const LOGO_IMAGE: FramerImage = {
  src: "/images/Od2skloa7zqvI6TKjYILXTmySs.svg",
  alt: "Logo Image",
  width: 200,
  height: 200,
};

const CIRCLE_IMAGE: FramerImage = {
  src: "/images/4pWchYERZ5PQruOMbK5CTWxqxU.svg",
  srcSet:
    "/images/4pWchYERZ5PQruOMbK5CTWxqxU-1.svg 512w, /images/4pWchYERZ5PQruOMbK5CTWxqxU-2.svg 1024w, /images/4pWchYERZ5PQruOMbK5CTWxqxU.svg 1300w",
  alt: "Circle Center BG",
  width: 1300,
  height: 667,
};
const CIRCLE_IMAGE_SIZES =
  "(min-width: 1280px) calc(100vw - 160px), (min-width: 992px) and (max-width: 1279.98px) calc(100vw - 80px), (max-width: 991.98px) calc(100vw - 40px)";

/** Honeypot inputs Framer adds to every form (hidden; only bots fill them in). */
const HONEYPOT_FIELDS = [
  "website",
  "company",
  "message",
  "subject",
  "title",
  "description",
  "feedback",
  "notes",
  "details",
  "remarks",
  "comments",
];

const HONEYPOT_STYLE: CSSProperties = { position: "absolute", transform: "scale(0)" };

const SUBMIT_STYLE: CSSProperties = {
  backgroundColor: TOKENS.dark,
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  opacity: "1",
};

const SUBMIT_TEXT_STYLE: CSSProperties = {
  "--extracted-r6o4lv": TOKENS.yellow,
  "--framer-link-text-color": "rgb(0, 153, 255)",
  "--framer-link-text-decoration": "underline",
  transform: "none",
};

/** How long the submit button reads "Thank you!" after a successful submission. */
const THANK_YOU_MS = 3000;

function FieldLabel({ className, text }: { className: string; text: string }) {
  return (
    <div
      className={className}
      data-framer-name="Label"
      data-framer-component-type="RichTextContainer"
      style={{ transform: "none" }}
    >
      <p
        className="framer-text framer-styles-preset-1dpgexf"
        data-styles-preset="wUYf66_Db"
        dir="auto"
        style={{ "--framer-text-color": TOKENS.dark }}
      >
        {text}
      </p>
    </div>
  );
}

function SubmitButton({ variant, label }: { variant: "desktop" | "phone"; label: string }) {
  const phone = variant === "phone";
  return (
    <button
      type="submit"
      className={`framer-VQfUE framer-5BI2U framer-9p1u30 ${phone ? "framer-v-qcjc3u" : "framer-v-9p1u30"}`}
      data-framer-name={phone ? "Phone" : "Default"}
      data-reset="button"
      style={SUBMIT_STYLE}
    >
      <div
        className="framer-15uo94d"
        data-framer-name="CTA Text"
        data-framer-component-type="RichTextContainer"
        style={SUBMIT_TEXT_STYLE}
      >
        <p
          className="framer-text framer-styles-preset-o266m6"
          data-styles-preset="XE418oX5i"
          dir="auto"
          style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.yellow})` }}
        >
          {label}
        </p>
      </div>
    </button>
  );
}

/** Clears a server-side validation message as soon as the visitor edits the field again. */
function clearValidity(event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
  event.currentTarget.setCustomValidity("");
}

/**
 * Framer's "Contact Form Section" (hash 4cea596d71, section.framer-1ev6i0e) of /contact-us.
 *
 * The form posts to the `submitContact` server action. The browser enforces the `required` /
 * `type="email"` rules first; errors returned by the action are reported on the matching field
 * with the browser's validation bubble, so no markup is added. On success the form is reset and
 * the submit button reads "Thank you!" for 3 s (Framer's behaviour).
 */
export function ContactForm() {
  const [state, formAction] = useActionState<ContactState, FormData>(submitContact, null);
  const formRef = useRef<HTMLFormElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  /** The successful result whose "Thank you!" label has already timed out. */
  const [expired, setExpired] = useState<ContactState>(null);

  useEffect(() => {
    if (!state) return;
    if (state.ok) {
      formRef.current?.reset();
      const timer = window.setTimeout(() => setExpired(state), THANK_YOU_MS);
      return () => window.clearTimeout(timer);
    }
    const fields: Record<ContactField, HTMLInputElement | HTMLTextAreaElement | null> = {
      firstName: firstNameRef.current,
      email: emailRef.current,
      message: messageRef.current,
    };
    const field = state.field ? fields[state.field] : null;
    if (field) {
      field.setCustomValidity(state.error);
      field.reportValidity();
    }
  }, [state]);

  const label = state?.ok && expired !== state ? "Thank you!" : "Submit";

  // Submit through a transition instead of the form `action` prop: React would otherwise reset
  // the fields when the action reports an error, and would add hidden `$ACTION_*` inputs and
  // method/encType attributes to Framer's form markup. (The form is revealed by ScrollReveal, so
  // it is only usable once JavaScript runs anyway.)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  return (
    <section className="framer-1ev6i0e" data-framer-name="Contact Form Section">
      <div className="framer-nf3249 hidden-ce8ap0" data-framer-name="BG Wrapper">
        <div className="ssr-variant">
          <div className="framer-178erky">
            <FramerBackgroundImage image={LOGO_IMAGE} />
          </div>
        </div>
      </div>
      <div className="framer-zrwdok" data-framer-name="Base Container">
        <div className="framer-acqelt hidden-ce8ap0" data-framer-name="BG Wrapper">
          <div className="ssr-variant">
            <div className="framer-1x23j9t">
              <FramerBackgroundImage image={LOGO_IMAGE} />
            </div>
          </div>
        </div>
        <form ref={formRef} className="framer-1ddmkcf" style={REVEAL_STYLE} onSubmit={handleSubmit}>
          <div className="framer-faxgzs" data-framer-name="Inputs Wrapper">
            <label className="framer-kl2hsn">
              <FieldLabel className="framer-kw9uvh" text="First name*" />
              <div className="framer-form-text-input framer-form-input-wrapper framer-1rk7bc9 framer-form-text-input-type">
                <input
                  ref={firstNameRef}
                  type="text"
                  required
                  name="First name"
                  placeholder="Jane"
                  className="framer-form-input framer-form-input-empty"
                  defaultValue=""
                  onInput={clearValidity}
                />
              </div>
            </label>
            <label className="framer-11nm6ek">
              <FieldLabel className="framer-2mt9ps" text="Last name" />
              <div className="framer-form-text-input framer-form-input-wrapper framer-momrj framer-form-text-input-type">
                <input
                  type="text"
                  name="Last name"
                  placeholder="Smith"
                  className="framer-form-input framer-form-input-empty"
                  defaultValue=""
                />
              </div>
            </label>
            <label className="framer-e0v1yz">
              <FieldLabel className="framer-g00fte" text="Your email*" />
              <div className="framer-form-text-input framer-form-input-wrapper framer-1ccj4fq">
                <input
                  ref={emailRef}
                  type="email"
                  required
                  name="Email"
                  placeholder="jane@framer.com"
                  className="framer-form-input framer-form-input-empty"
                  defaultValue=""
                  onInput={clearValidity}
                />
              </div>
            </label>
            <label className="framer-1g1ms5u">
              <FieldLabel className="framer-ei5zzw" text="Your phone" />
              <div className="framer-form-text-input framer-form-input-wrapper framer-ashe31">
                <input
                  type="tel"
                  name="Phone number"
                  placeholder="+1 (000) 11 11 101"
                  className="framer-form-input framer-form-input-empty"
                  defaultValue=""
                />
              </div>
            </label>
            <label className="framer-mo49mg">
              <FieldLabel className="framer-1f0j2o4" text="Your message*" />
              <div className="framer-form-text-input framer-form-input-wrapper framer-19cgyzv framer-form-textarea-input-type">
                <textarea
                  ref={messageRef}
                  required
                  name="Email"
                  placeholder="Share your thoughts, questions, or ideas with us..."
                  className="framer-form-input"
                  onInput={clearValidity}
                ></textarea>
              </div>
            </label>
          </div>
          <div className="framer-866k13-container">
            <div className="ssr-variant hidden-ce8ap0">
              <SubmitButton variant="desktop" label={label} />
            </div>
            <div className="ssr-variant hidden-1izvhu1 hidden-175saz8">
              <SubmitButton variant="phone" label={label} />
            </div>
          </div>
          {HONEYPOT_FIELDS.map((name) => (
            <input
              key={name}
              type="text"
              name={name}
              tabIndex={-1}
              autoComplete="one-time-code"
              aria-hidden="true"
              style={HONEYPOT_STYLE}
              data-1p-ignore="true"
              data-lpignore="true"
              data-form-type="other"
              data-bwignore="true"
              defaultValue=""
            />
          ))}
        </form>
      </div>
      <div className="framer-15hzg6" data-framer-name="BG Block Wrapper">
        <div className="ssr-variant">
          <div
            className="framer-x8wfyg"
            style={{
              height: "auto",
              aspectRatio: "1.949025487256372",
              transform: "translateY(-50%)",
            }}
          >
            <FramerBackgroundImage image={CIRCLE_IMAGE} sizes={CIRCLE_IMAGE_SIZES} />
          </div>
        </div>
      </div>
    </section>
  );
}
