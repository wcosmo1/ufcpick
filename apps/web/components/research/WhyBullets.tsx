export function WhyBullets({ bullets }: { bullets: string[] }) {
  if (!bullets.length) return null;

  return (
    <ul className="space-y-2">
      {bullets.map((b, i) => (
        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-octagon-red" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}
