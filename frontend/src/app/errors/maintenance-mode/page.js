import styles from "./styles.module.css";
import config from "@/components/maintenance/setup.json";

// Format the date to a human-readable format in the user's local time zone
const formattedTime = new Date(config.maintenanceTime).toLocaleString(
  undefined,
  {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  }
);

const Mode = `${config.maintenanceMode ? "On" : "Off"}`;

const Maintenance = () => {
  return (
    <div className={styles.maintenanceWrap}>
      <h1>Maintenance Mode: {Mode}</h1>
      <p>This site is getting some much needed love and care.</p>
      <p>Apologies for the inconvenience</p>
      <p>activated at {formattedTime}</p>
    </div>
  );
};

export default Maintenance;

export const metadata = {
  title: "Template | Maintenance",
  description: "This is the home page of my nextjs template.",
};
