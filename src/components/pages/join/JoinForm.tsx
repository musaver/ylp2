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
  type Ref,
} from "react";
import {
  submitJoinApplication,
  type JoinField,
  type JoinState,
} from "@/app/join-youthlink/actions";
import {
  AGE_OPTIONS,
  INTEREST_OPTIONS,
  INVOLVEMENT_OPTIONS,
  STATUS_OPTIONS,
  TIME_OPTIONS,
} from "@/components/pages/join/options";
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

interface SelectFieldProps extends Omit<FieldProps, "children"> {
  name: string;
  options: readonly string[];
  inputRef: Ref<HTMLSelectElement>;
}

/** Native select in the Framer input box. CSS greys it out while "Select..." is chosen. */
function SelectField({ name, options, inputRef, ...field }: SelectFieldProps) {
  return (
    <Field {...field}>
      <div className={SELECT_WRAPPER}>
        <select
          ref={inputRef}
          name={name}
          required={field.required}
          defaultValue=""
          className="framer-form-input"
          onChange={clearValidity}
        >
          <option value="">Select...</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </Field>
  );
}

interface CheckboxGroupProps {
  label: string;
  name: string;
  options: readonly string[];
  firstRef: Ref<HTMLInputElement>;
}

/** Required "pick at least one" checkbox group. The first box carries the validation message. */
function CheckboxGroup({ label, name, options, firstRef }: CheckboxGroupProps) {
  return (
    <fieldset className="join-choices">
      <legend>
        <FieldLabel text={label} required />
      </legend>
      {options.map((option, index) => (
        <label key={option} className="join-choice">
          <input
            ref={index === 0 ? firstRef : undefined}
            type="checkbox"
            name={name}
            value={option}
            className="join-checkbox"
            onChange={clearGroupValidity}
          />
          <span>{option}</span>
        </label>
      ))}
    </fieldset>
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

/**
 * The /join-youthlink application form, built on the markup and styles of Framer's "Contact
 * Form Section" (section.framer-1ev6i0e) from /contact-us.
 *
 * The form posts to the `submitJoinApplication` server action. The browser enforces `required`
 * and `type="email"` first, the two checkbox groups are checked in `handleSubmit`, and errors
 * returned by the action are reported on the matching field with the browser's validation
 * bubble. On success the form is reset and the submit button reads "Thank you!" for 3 s.
 */
export function JoinForm({ note }: { note?: ReactNode }) {
  const [state, formAction] = useActionState<JoinState, FormData>(submitJoinApplication, null);
  const formRef = useRef<HTMLFormElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLSelectElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const interestsRef = useRef<HTMLInputElement>(null);
  const motivationRef = useRef<HTMLTextAreaElement>(null);
  const timeRef = useRef<HTMLSelectElement>(null);
  const involvementRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);
  /** The successful result whose "Thank you!" label has already timed out. */
  const [expired, setExpired] = useState<JoinState>(null);

  useEffect(() => {
    if (!state) return;
    if (state.ok) {
      formRef.current?.reset();
      const timer = window.setTimeout(() => setExpired(state), THANK_YOU_MS);
      return () => window.clearTimeout(timer);
    }
    const fields: Record<JoinField, FieldElement | null> = {
      fullName: fullNameRef.current,
      email: emailRef.current,
      city: cityRef.current,
      age: ageRef.current,
      status: statusRef.current,
      interests: interestsRef.current,
      motivation: motivationRef.current,
      time: timeRef.current,
      involvement: involvementRef.current,
      consent: consentRef.current,
    };
    const field = state.field ? fields[state.field] : null;
    if (field) {
      field.setCustomValidity(state.error);
      field.reportValidity();
    }
  }, [state]);

  const label = state?.ok && expired !== state ? "Thank you!" : "Submit application";

  // Submit through a transition instead of the form `action` prop: React would otherwise reset
  // the fields when the action reports an error, and would add hidden `$ACTION_*` inputs and
  // method/encType attributes to Framer's form markup.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!groupIsValid(form, "interests") || !groupIsValid(form, "involvement")) return;
    const formData = new FormData(form);
    startTransition(() => formAction(formData));
  }

  return (
    <JoinFormSection note={note}>
      <form ref={formRef} className="framer-1ddmkcf" style={REVEAL_STYLE} onSubmit={handleSubmit}>
        <div className="framer-faxgzs" data-framer-name="Inputs Wrapper">
          <Field label="Full name" required>
            <div className={TEXT_INPUT_WRAPPER}>
              <input
                ref={fullNameRef}
                type="text"
                required
                name="fullName"
                autoComplete="name"
                className="framer-form-input"
                defaultValue=""
                onInput={clearValidity}
              />
            </div>
          </Field>
          <Field label="Email address" required>
            <div className={TEXT_INPUT_WRAPPER}>
              <input
                ref={emailRef}
                type="email"
                required
                name="email"
                autoComplete="email"
                className="framer-form-input"
                defaultValue=""
                onInput={clearValidity}
              />
            </div>
          </Field>
          <Field
            label="Phone or WhatsApp number"
            hint="Optional, but it helps us reach you faster."
          >
            <div className={TEXT_INPUT_WRAPPER}>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className="framer-form-input"
                defaultValue=""
              />
            </div>
          </Field>
          <Field label="City or area" required>
            <div className={TEXT_INPUT_WRAPPER}>
              <input
                ref={cityRef}
                type="text"
                required
                name="city"
                autoComplete="address-level2"
                className="framer-form-input"
                defaultValue=""
                onInput={clearValidity}
              />
            </div>
          </Field>
          <SelectField label="Age" required name="age" options={AGE_OPTIONS} inputRef={ageRef} />
          <SelectField
            label="I am currently"
            required
            name="status"
            options={STATUS_OPTIONS}
            inputRef={statusRef}
          />
          <Field label="University, institution or workplace" hint="Optional." width="full">
            <div className={TEXT_INPUT_WRAPPER}>
              <input
                type="text"
                name="organisation"
                autoComplete="organization"
                className="framer-form-input"
                defaultValue=""
              />
            </div>
          </Field>
          <CheckboxGroup
            label="Areas you are most interested in"
            name="interests"
            options={INTEREST_OPTIONS}
            firstRef={interestsRef}
          />
          <Field
            label="Skills and experience you can bring"
            hint="Optional. Anything from study, work, volunteering or personal projects."
            width="full"
          >
            <div className={TEXTAREA_WRAPPER}>
              <textarea name="skills" rows={4} className="framer-form-input"></textarea>
            </div>
          </Field>
          <Field
            label="Why do you want to join YouthLink, and what do you hope to contribute?"
            required
            width="full"
          >
            <div className={TEXTAREA_WRAPPER}>
              <textarea
                ref={motivationRef}
                required
                name="motivation"
                rows={5}
                className="framer-form-input"
                onInput={clearValidity}
              ></textarea>
            </div>
          </Field>
          <SelectField
            label="How much time can you realistically commit each week?"
            required
            name="time"
            options={TIME_OPTIONS}
            inputRef={timeRef}
            width="full"
          />
          <CheckboxGroup
            label="How would you like to get involved?"
            name="involvement"
            options={INVOLVEMENT_OPTIONS}
            firstRef={involvementRef}
          />
          <label className="join-choice join-consent">
            <input
              ref={consentRef}
              type="checkbox"
              required
              name="consent"
              className="join-checkbox"
              onChange={clearValidity}
            />
            <span>
              I confirm that the information above is accurate and I agree that YouthLink may
              contact me about my application.
              <span className="join-required" aria-hidden="true">
                *
              </span>
            </span>
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
        <HoneypotInputs />
      </form>
    </JoinFormSection>
  );
}
