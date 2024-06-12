import React from "react";
import styles from "./index.module.scss";

const Index: React.FC<any> = () => {
  return (
    <div className={styles.page}>
      <div className={styles.outer1}>
        <div className={styles.inner}>22</div>
      </div>
      <div className={styles.outer2}>
        <div className={styles.inner}>22222</div>
      </div>
      <div className={styles.outer3}>
        <div className={styles.inner}>
          <div className={styles.content}>22222</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
