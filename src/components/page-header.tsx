type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
