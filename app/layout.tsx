export const metadata = {
  title: "INFO.GG",
  description: "발로란트 정보 공유 사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
