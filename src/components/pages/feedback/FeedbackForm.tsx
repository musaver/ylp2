"use client";

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { submitFeedback, type FeedbackField, type FeedbackState } from "@/app/feedback/actions";
import { CATEGORIES, findCategory } from "@/components/pages/feedback/options";
import {
  clearValidity,
  Field,
  FieldLabel,
  HoneypotInputs,
  JoinFormSection,
  SELECT_WRAPPER,
  SubmitButton,
  TEXT_INPUT_WRAPPER,
  TEXTAREA_WRAPPER,
  THANK_YOU_MS,
} from "@/components/pages/join/JoinForm";
import { REVEAL_STYLE } from "@/components/sections/framer-shared";

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

/**
 * The /feedback form, built on the /join-youthlink form (Framer's "Contact Form Section").
 *
 * The visitor first picks a category (Feedback or Complaint/concern) from two option cards; the
 * "What is this about?" list then shows that category's topics. Submission goes to the
 * `submitFeedback` server action, errors are reported on the matching field with the browser's
 * validation bubble, and on success the form is reset and a confirmation message is shown.
 */
export function FeedbackForm({ note }: { note?: ReactNode }) {
  const [state, formAction] = useActionState<FeedbackState, FormData>(submitFeedback, null);
  const [category, setCategory] = useState("");
  /** The successful result whose "Thank you!" label has already timed out. */
  const [expired, setExpired] = useState<FeedbackState>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const topicRef = useRef<HTMLSelectElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const confirmationRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!state) return;
    if (state.ok) {
      formRef.current?.reset();
      confirmationRef.current?.focus();
      const timer = window.setTimeout(() => setExpired(state), THANK_YOU_MS);
      return () => window.clearTimeout(timer);
    }
    const fields: Record<FeedbackField, FieldElement | null> = {
      category: categoryRef.current,
      topic: topicRef.current,
      fullName: fullNameRef.current,
      email: emailRef.current,
      body: bodyRef.current,
    };
    const field = state.field ? fields[state.field] : null;
    if (field) {
      field.setCustomValidity(state.error);
      field.reportValidity();
    }
  }, [state]);

  const selected = findCategory(category);
  const label = state?.ok && expired !== state ? "Thank you!" : "Send";

  // Submit through a transition instead of the form `action` prop, like the /join-youthlink form.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  function handleCategoryChange(event: FormEvent<HTMLInputElement>) {
    categoryRef.current?.setCustomValidity("");
    setCategory(event.currentTarget.value);
  }

  return (
    <JoinFormSection name="Feedback Form Section" note={note}>
      <form
        ref={formRef}
        className="framer-1ddmkcf"
        style={REVEAL_STYLE}
        onSubmit={handleSubmit}
        onReset={() => setCategory("")}
      >
        <div className="framer-faxgzs" data-framer-name="Inputs Wrapper">
          <fieldset className="join-choices">
            <legend>
              <FieldLabel text="What would you like to share?" required />
            </legend>
            <div className="feedback-options">
              {CATEGORIES.map((option, index) => (
                <label key={option.value} className="feedback-option">
                  <input
                    ref={index === 0 ? categoryRef : undefined}
                    type="radio"
                    required
                    name="category"
                    value={option.value}
                    className="join-checkbox feedback-radio"
                    onChange={handleCategoryChange}
                  />
                  <span className="feedback-option-text">
                    <span className="feedback-option-title">{option.title}</span>
                    <span className="feedback-option-description">{option.description}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <Field label="What is this about?" required width="full">
            <div className={SELECT_WRAPPER}>
              {/* Keyed by category so the choice resets when the topic list changes. */}
              <select
                key={category}
                ref={topicRef}
                name="topic"
                required
                disabled={!selected}
                defaultValue=""
                className="framer-form-input"
                onChange={clearValidity}
              >
                <option value="">{selected ? "Select..." : "Choose an option above first"}</option>
                {selected?.topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </Field>
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
          <Field label="Phone number" hint="Optional." width="full">
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
          <Field
            label="Your message"
            required
            hint={
              selected?.value === "Complaint or concern"
                ? "Please describe what happened, when and where, and who or which group, project or activity it relates to."
                : undefined
            }
            width="full"
          >
            <div className={TEXTAREA_WRAPPER}>
              <textarea
                ref={bodyRef}
                required
                name="body"
                rows={6}
                maxLength={5000}
                className="framer-form-input"
                onInput={clearValidity}
              ></textarea>
            </div>
          </Field>
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
            className="framer-text framer-styles-preset-1dpgexf feedback-confirmation"
            data-styles-preset="wUYf66_Db"
            dir="auto"
          >
            Thank you, your submission has been received. It will be reviewed by authorised
            YouthLink personnel, and we will contact you if we need more information.
          </p>
        ) : null}
        <HoneypotInputs />
      </form>
    </JoinFormSection>
  );
}
