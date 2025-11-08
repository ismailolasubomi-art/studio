import Image from 'next/image';

export function Logo({ width, height, ...props }: { width: number; height: number; [key: string]: any }) {
  return (
    <div style={{ width, height, position: 'relative' }}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/studio-6593612663-293d1.firebasestorage.app/o/no%202.jpeg?alt=media&token=b77e5f19-a4b6-444e-872a-c0e1e3c85553"
          alt="Fahad Memorial Int'l School Logo"
          fill
          style={{ objectFit: 'contain' }}
          {...props}
        />
    </div>
  );
}
