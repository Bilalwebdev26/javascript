import Image from "next/image";
import Hello from "../component/Hello";


export default function Home() {
  console.log("What i am doing here -- Server");
  return (
    <div className="">
      <h1>Bilal ali</h1>
      <Hello/>
    </div>
  );
}
