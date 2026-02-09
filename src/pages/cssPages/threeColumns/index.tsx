import React from "react";
import styles from "./index.module.scss";

const Index: React.FC<any> = () => {
  return (
    <div className={styles.page}>
      <div className={styles.threeCol1}>
        <div className={styles.main}>圣杯布局</div>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.threeCol2}>
        <div className={styles.main}>
          <div className={styles.inner}>双飞翼布局</div>
        </div>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.threeCol3}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
        <div className={styles.main}>float overflow main在最后</div>
      </div>
      <div className={styles.threeCol4}>
        <div className={styles.left}></div>
        <div className={styles.main}>flex布局</div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.threeCol5}>
        <div className={styles.left}></div>
        <div className={styles.main}>grid布局</div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.flexDiv}>
        <div className={styles.flexDivtag}></div>
        <div className={styles.flexDivtag}></div>
        <div className={styles.flexDivtag}></div>
        <div className={styles.flexDivtag}></div>
        <div className={styles.flexDivtag}></div>
        <div className={styles.flexDivtag}></div>

      </div>
    </div>
  );
};

export default Index;
