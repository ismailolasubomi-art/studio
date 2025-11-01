import Image from 'next/image';

export function Logo({ width, height, ...props }: { width: number; height: number; [key: string]: any }) {
  return (
    <Image
      src="https://storage.googleapis.com/project-sparkle-staging-uploads/45a6c381-2dd2-4161-9031-7e86ad60f855/logo.png"
      alt="Fahad Memorial International School Logo"
      width={width}
      height={height}
      {...props}
    />
  );
}
