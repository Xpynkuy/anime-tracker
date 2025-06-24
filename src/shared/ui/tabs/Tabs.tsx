import { memo, useState } from "react";
import styles from "./Tabs.module.scss";

interface TabsItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabsItem[];
  defaultActiveTab?: string;
  children: (tab: string) => React.ReactNode;
}

const Tabs = ({ tabs, defaultActiveTab, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0].id);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsHeader}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${styles.tabButton} ${
              activeTab === tab.id ? styles.activeTab : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabsContent}>{children(activeTab!)}</div>
    </div>
  );
};

export default memo(Tabs);
