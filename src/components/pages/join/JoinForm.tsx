"use client";

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  submitJoinApplication,
  type JoinState,
} from "@/app/join-youthlink/actions";
import {
  DECLARATIONS,
  EMPLOYMENT_OPTIONS,
  GENDER_OPTIONS,
  HEARD_FROM_OPTIONS,
  LEADERSHIP_OPTIONS,
  OTHER,
  PORTFOLIO_EXTENSIONS,
  PORTFOLIO_MAX_BYTES,
  SKILL_OPTIONS,
} from "@/components/pages/join/options";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";
import type { FramerImage } from "@/lib/types";

const LOGO_IMAGE: FramerImage = {
  src: "/images/logo-mark-yellow.svg",
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
export const THANK_YOU_MS = 3000;

/** Layout classes of the contact-us template: half-width column vs full-width row. */
const HALF = "framer-kl2hsn";
const FULL = "framer-mo49mg";
export const TEXT_INPUT_WRAPPER =
  "framer-form-text-input framer-form-input-wrapper framer-1rk7bc9 framer-form-text-input-type";
export const TEXTAREA_WRAPPER =
  "framer-form-text-input framer-form-input-wrapper framer-19cgyzv framer-form-textarea-input-type";
export const SELECT_WRAPPER =
  "framer-form-text-input framer-form-input-wrapper framer-1rk7bc9 join-select";

const GROUP_ERROR = "Please select at least one option.";

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export function FieldLabel({ text, required = false }: { text: string; required?: boolean }) {
  return (
    <div
      className="framer-kw9uvh join-label"
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
        {required ? (
          <span className="join-required" aria-hidden="true">
            *
          </span>
        ) : null}
      </p>
    </div>
  );
}

function Hint({ text }: { text: string }) {
  return (
    <p
      className="framer-text framer-styles-preset-1dpgexf join-hint"
      data-styles-preset="wUYf66_Db"
      dir="auto"
    >
      {text}
    </p>
  );
}

interface FieldProps {
  label: string;
  required?: boolean;
  hint?: string;
  width?: "half" | "full";
  children: ReactNode;
}

/** Label + control + optional hint, in a contact-us column. */
export function Field({ label, required, hint, width = "half", children }: FieldProps) {
  return (
    <label className={width === "half" ? HALF : FULL}>
      <FieldLabel text={label} required={required} />
      {children}
      {hint ? <Hint text={hint} /> : null}
    </label>
  );
}

/** Runs `onReset` when the form containing the returned ref is reset (clears local UI state). */
function useFormReset<T extends HTMLElement>(onReset: () => void) {
  const ref = useRef<T>(null);
  const callback = useRef(onReset);
  useEffect(() => {
    callback.current = onReset;
  });
  useEffect(() => {
    const form = ref.current?.closest("form");
    if (!form) return;
    const handle = () => callback.current();
    form.addEventListener("reset", handle);
    return () => form.removeEventListener("reset", handle);
  }, []);
  return ref;
}

interface ChoiceGroupProps {
  label: string;
  name: string;
  type: "radio" | "checkbox";
  options: readonly string[];
  required?: boolean;
  hint?: string;
  /** Lay the options out in one row (the 1–5 rating). */
  inline?: boolean;
}

/**
 * Radio or checkbox group. Choosing the "Other" option reveals a required text input named
 * `${name}Other`. Required checkbox groups are checked in `handleSubmit` (browsers cannot require
 * "at least one" box); the first box carries the validation message.
 */
function ChoiceGroup({ label, name, type, options, required, hint, inline }: ChoiceGroupProps) {
  const [otherChecked, setOtherChecked] = useState(false);
  const fieldsetRef = useFormReset<HTMLFieldSetElement>(() => setOtherChecked(false));

  function handleChange(event: FormEvent<HTMLInputElement>) {
    clearGroupValidity(event);
    const box = event.currentTarget;
    if (type === "checkbox") {
      if (box.value === OTHER) setOtherChecked(box.checked);
    } else {
      setOtherChecked(box.value === OTHER);
    }
  }

  return (
    <fieldset ref={fieldsetRef} className={`join-choices${inline ? " join-choices-inline" : ""}`}>
      <legend>
        <FieldLabel text={label} required={required} />
      </legend>
      {hint ? <Hint text={hint} /> : null}
      <div className="join-choice-list">
        {options.map((option) => (
          <label key={option} className="join-choice">
            <input
              type={type}
              name={name}
              value={option}
              required={type === "radio" ? required : undefined}
              className={`join-checkbox${type === "radio" ? " join-radio" : ""}`}
              onChange={handleChange}
            />
            <span>{option === OTHER ? "Other:" : option}</span>
          </label>
        ))}
      </div>
      {otherChecked ? (
        <div className={TEXT_INPUT_WRAPPER}>
          <input
            type="text"
            name={`${name}Other`}
            required
            maxLength={200}
            aria-label={`${label}: other`}
            placeholder="Please specify"
            className="framer-form-input"
            defaultValue=""
            onInput={clearValidity}
          />
        </div>
      ) : null}
    </fieldset>
  );
}

/** Textarea with a live word count, for answers with a suggested length. */
function WordCountTextarea({ name, required }: { name: string; required?: boolean }) {
  const [words, setWords] = useState(0);
  const wrapperRef = useFormReset<HTMLDivElement>(() => setWords(0));
  return (
    <>
      <div ref={wrapperRef} className={TEXTAREA_WRAPPER}>
        <textarea
          name={name}
          required={required}
          rows={7}
          maxLength={3000}
          className="framer-form-input"
          onInput={(event) => {
            clearValidity(event);
            const text = event.currentTarget.value.trim();
            setWords(text ? text.split(/\s+/).length : 0);
          }}
        ></textarea>
      </div>
      <Hint text={`${words} ${words === 1 ? "word" : "words"} (suggested 100–200)`} />
    </>
  );
}

export function SubmitButton({ variant, label }: { variant: "desktop" | "phone"; label: string }) {
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

/**
 * Framer's "Contact Form Section" wrapper (section.framer-1ev6i0e) with its background logo and
 * circle decorations. Shared by the /join-youthlink and /feedback forms. `note` is rendered
 * under the form, inside the dark section.
 */
export function JoinFormSection({
  name = "Join Form Section",
  note,
  children,
}: {
  name?: string;
  note?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="framer-1ev6i0e join-form-section" data-framer-name={name}>
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
        {children}
        {note}
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

/** Hidden honeypot inputs. The server action drops any submission that fills one in. */
export function HoneypotInputs() {
  return (
    <>
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
    </>
  );
}

/** Clears a server-side validation message as soon as the visitor edits the field again. */
export function clearValidity(event: FormEvent<FieldElement>) {
  event.currentTarget.setCustomValidity("");
}

/** Clears the "pick at least one" message, which lives on the group's first checkbox. */
function clearGroupValidity(event: FormEvent<HTMLInputElement>) {
  const box = event.currentTarget;
  const first = box.form?.querySelector<HTMLInputElement>(`input[name="${box.name}"]`);
  first?.setCustomValidity("");
}

/** Reports "pick at least one" on a checkbox group when nothing is checked. */
function groupIsValid(form: HTMLFormElement, name: string): boolean {
  const boxes = [...form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]`)];
  if (boxes.some((box) => box.checked)) return true;
  boxes[0]?.setCustomValidity(GROUP_ERROR);
  boxes[0]?.reportValidity();
  return false;
}

/** A plain text input in the Framer input box. */
function TextInput({
  name,
  required,
  type = "text",
  autoComplete,
  inputMode,
  maxLength = 200,
}: {
  name: string;
  required?: boolean;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  inputMode?: "numeric";
  maxLength?: number;
}) {
  return (
    <div className={TEXT_INPUT_WRAPPER}>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        className="framer-form-input"
        defaultValue=""
        onInput={clearValidity}
      />
    </div>
  );
}

/** A textarea in the Framer input box. */
function TextArea({
  name,
  required,
  rows = 4,
}: {
  name: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div className={TEXTAREA_WRAPPER}>
      <textarea
        name={name}
        required={required}
        rows={rows}
        maxLength={3000}
        className="framer-form-input"
        onInput={clearValidity}
      ></textarea>
    </div>
  );
}

const PORTFOLIO_ACCEPT = PORTFOLIO_EXTENSIONS.join(",");
const PORTFOLIO_MAX_MB = PORTFOLIO_MAX_BYTES / (1024 * 1024);

/**
 * The /join-youthlink registration form (the questions of the "Youthlink Registration Form" on
 * Google Forms), built on the markup and styles of Framer's "Contact Form Section".
 *
 * The form posts to the `submitJoinApplication` server action. The browser enforces `required`
 * and `type="email"` first; the skills checkbox group and the portfolio file size are checked in
 * `handleSubmit`. Errors returned by the action are reported on the matching field with the
 * browser's validation bubble. On success the form is cleared, a confirmation is shown and the button reads "Thank you!".
 */
export function JoinForm({ note }: { note?: ReactNode }) {
  const [state, formAction, pending] = useActionState<JoinState, FormData>(
    submitJoinApplication,
    null,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const confirmationRef = useRef<HTMLParagraphElement>(null);
  /** The successful result whose "Thank you!" label has already timed out. */
  const [expired, setExpired] = useState<JoinState>(null);

  useEffect(() => {
    if (!state) return;
    if (state.ok) {
      // Clear in place: remounting the form would replay its hidden pre-reveal state.
      formRef.current?.reset();
      confirmationRef.current?.focus();
      const timer = window.setTimeout(() => setExpired(state), THANK_YOU_MS);
      return () => window.clearTimeout(timer);
    }
    if (!state.field) return;
    const field = formRef.current?.querySelector<FieldElement>(`[name="${state.field}"]`);
    if (field) {
      field.setCustomValidity(state.error);
      field.reportValidity();
    }
  }, [state]);

  const label = pending
    ? "Sending..."
    : state?.ok && expired !== state
      ? "Thank you!"
      : "Submit application";

  // Submit through a transition instead of the form `action` prop: React would otherwise reset
  // the fields when the action reports an error, and would add hidden `$ACTION_*` inputs and
  // method/encType attributes to Framer's form markup.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    if (!groupIsValid(form, "skills")) return;
    const file = form.querySelector<HTMLInputElement>('input[name="portfolio"]');
    const chosen = file?.files?.[0];
    if (file && chosen && chosen.size > PORTFOLIO_MAX_BYTES) {
      file.setCustomValidity(`Please choose a file smaller than ${PORTFOLIO_MAX_MB} MB.`);
      file.reportValidity();
      return;
    }
    const formData = new FormData(form);
    startTransition(() => formAction(formData));
  }

  return (
    <JoinFormSection note={note}>
      <form
        ref={formRef}
        className="framer-1ddmkcf"
        style={REVEAL_STYLE}
        onSubmit={handleSubmit}
      >
        <div className="framer-faxgzs" data-framer-name="Inputs Wrapper">
          <Field label="Name" required>
            <TextInput name="fullName" required autoComplete="name" />
          </Field>
          <Field label="Age" required>
            <TextInput name="age" required inputMode="numeric" maxLength={3} />
          </Field>
          <ChoiceGroup label="Gender" name="gender" type="radio" options={GENDER_OPTIONS} required />
          <Field label="Country/City" required>
            <TextInput name="city" required autoComplete="address-level2" />
          </Field>
          <Field label="WhatsApp Number (with country code)" required>
            <TextInput name="whatsapp" type="tel" required autoComplete="tel" maxLength={30} />
          </Field>
          <Field label="Email Address" width="full">
            <TextInput name="email" type="email" autoComplete="email" />
          </Field>
          <ChoiceGroup
            label="Current Employment Status"
            name="employment"
            type="radio"
            options={EMPLOYMENT_OPTIONS}
            required
          />
          <Field label="Area of studies (Mention Degree)" required>
            <TextInput name="studies" required />
          </Field>
          <Field label="Institution Name" required>
            <TextInput name="institution" required autoComplete="organization" />
          </Field>
          <ChoiceGroup
            label="Where did you hear about Youthlink?"
            name="heardFrom"
            type="radio"
            options={HEARD_FROM_OPTIONS}
            required
          />
          <Field
            label="What are you expecting Youthlink to provide for you? And how will you return the efforts to carry our Mission?"
            required
            width="full"
          >
            <TextArea name="expectations" required />
          </Field>
          <Field label="Why do you want to join Youthlink? (100-200 words)" required width="full">
            <WordCountTextarea name="motivation" required />
          </Field>
          <ChoiceGroup
            label="How would you rate your leadership skills on a scale of 1 to 5? (Consider 5 as the highest number)"
            name="leadership"
            type="radio"
            options={LEADERSHIP_OPTIONS}
            required
            inline
          />
          <ChoiceGroup
            label="Which skills can you currently contribute?"
            name="skills"
            type="checkbox"
            options={SKILL_OPTIONS}
            required
          />
          <Field
            label="For the skill selected above, describe your level & provide portfolio/sample work"
            width="full"
          >
            <TextArea name="portfolioNote" />
          </Field>
          <Field
            label="Portfolio or sample work file"
            hint={`Optional. One file, max ${PORTFOLIO_MAX_MB} MB (PDF, Word, PowerPoint, JPG, PNG or ZIP).`}
            width="full"
          >
            <div className="join-file">
              <input
                type="file"
                name="portfolio"
                accept={PORTFOLIO_ACCEPT}
                onChange={(event) => event.currentTarget.setCustomValidity("")}
              />
            </div>
          </Field>
          <Field label="What should Youthlink never become?" width="full">
            <TextArea name="neverBecome" />
          </Field>
          <Field
            label="How can Muslim youth gain power and create the right influence?"
            width="full"
          >
            <TextArea name="youthInfluence" />
          </Field>
          <Field label="Any Comments" required width="full">
            <TextArea name="anyComments" required rows={3} />
          </Field>
          <fieldset className="join-choices">
            <legend>
              <FieldLabel text="Applicant Declaration" required />
            </legend>
            <div className="join-choice-list">
              {DECLARATIONS.map((text, index) => (
                <label key={text} className="join-choice join-consent">
                  <input
                    type="checkbox"
                    required
                    name={`declaration${index + 1}`}
                    className="join-checkbox"
                    onChange={clearValidity}
                  />
                  <span>
                    {index + 1}. {text}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="framer-866k13-container">
          <div className="ssr-variant hidden-ce8ap0">
            <SubmitButton variant="desktop" label={label} />
          </div>
          <div className="ssr-variant hidden-1izvhu1 hidden-175saz8">
            <SubmitButton variant="phone" label={label} />
          </div>
        </div>
        {state?.ok ? (
          <p
            ref={confirmationRef}
            role="status"
            tabIndex={-1}
            className="framer-text framer-styles-preset-1dpgexf form-confirmation"
            data-styles-preset="wUYf66_Db"
            dir="auto"
          >
            Thank you, your registration has been received. The YouthLink team will review it and
            contact you on WhatsApp or email.
          </p>
        ) : null}
        {state && !state.ok && !state.field ? (
          <p
            role="alert"
            className="framer-text framer-styles-preset-1dpgexf form-send-error"
            data-styles-preset="wUYf66_Db"
            dir="auto"
          >
            {state.error}
          </p>
        ) : null}
        <HoneypotInputs />
      </form>
    </JoinFormSection>
  );
}
