import Image from "next/image";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <>
      <h1>App Router</h1>
      <Image src="/images/test.jpg" alt="test" width={144} height={144} />
    </>
  );
}
