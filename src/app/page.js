import Image from "next/image";
import styles from "./page.module.css";
import { attributes, react as HomeComponent } from "../content/home.md";

export default function Home() {
  let { title, cats } = attributes;

  return (
    <>
      <article>
        <h1>{title}</h1>
        <HomeComponent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
