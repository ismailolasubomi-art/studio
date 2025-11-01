type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
