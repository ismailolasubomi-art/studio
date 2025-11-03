import Image from 'next/image';

export function Logo({ width, height, ...props }: { width: number; height: number; [key: string]: any }) {
  return (
    <div style={{ width, height, position: 'relative' }}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/studio-6593612663-293d1.firebasestorage.app/o/Logo.jfif?alt=media&token=f4fc7bd6-07f3-46cc-8f70-1aa9a9b359fa"
          alt="Lekki British School Logo"
          fill
          style={{ objectFit: 'contain' }}
          {...props}
        />
    </div>
  );
}
