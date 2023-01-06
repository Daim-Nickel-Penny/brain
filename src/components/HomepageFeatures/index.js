import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy Usage",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Looking for some cool stuff to read about? You've come to the right
        place! <br /> Happy reading, cool cat!
      </>
    ),
  },
  {
    title: "My Brain's Content",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Looking for a quick hit of knowledge? I've covered with our collection
        of bite-sized notes on all sorts of interesting topics! Go to{" "}
        <code>content</code>
      </>
    ),
  },
  {
    title: "Our Brain",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Its not restricted to my brain, it's a community of minds! So go ahead
        and treat it like your own personal playground of knowledge.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
