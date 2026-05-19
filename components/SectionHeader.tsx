interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[16px] text-zinc-400 max-w-md mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
