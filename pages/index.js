import styles from "@/styles/iframe.module.css";

export default function Iframe() {
  return (
    <iframe
      className={styles.iframe}
      src="https://codesandbox.io/p/sandbox/vite-react-376f48"
      allowFullScreen
      allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}
