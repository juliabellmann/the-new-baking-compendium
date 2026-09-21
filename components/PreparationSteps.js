import StepText from "@/components/StepText";

export default function PreparationSteps({ steps, ingredientsById, factor }) {
  return (
    <ol className="steps-list">
      {steps.map((step, index) => (
        <li key={step.id ?? index}>
          <span className="step-number">{index + 1}</span>
          <div className="step-content">
            <StepText parts={step.parts} ingredientsById={ingredientsById} factor={factor} />
          </div>
        </li>
      ))}
    </ol>
  );
}
