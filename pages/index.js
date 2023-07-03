import styles from "@/styles/iframe.module.css";

export default function Iframe() {
  return (
    <iframe
      className={styles.iframe}
      src="https://codesandbox.io/p/sandbox/epic-neco-376f48?embed=1"
      allowFullScreen
    ></iframe>
  );
}
