function StatusPanel({
  variant = "empty",
  title,
  headingLevel = "h2",
  children,
}) {
  const Heading = headingLevel;

  const accessibilityProps =
    variant === "error"
      ? { role: "alert" }
      : { role: "status", "aria-live": "polite" };

  return (
    <section
      className={`status-panel status-panel--${variant}`}
      {...accessibilityProps}
    >
      <Heading>{title}</Heading>

      <div className="status-panel__content">{children}</div>
    </section>
  );
}

export default StatusPanel;
