import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'From Open Source to Open Standard',
    Svg: require('../../static/img/open-sign.svg').default,
    description: (
      <>
        Software is code and associated documentation they say. we are used to
        having code freely available on platforms like GitHub. What about the 
        technical documentations ?
      </>
    ),
  },
  {
    title: 'Get more people involved',
    Svg: require('../../static/img/meeting.svg').default,
    description: (
      <>
        Everyone can code but not everyone can produce a software. By promoting
        open standard, we encourage more people to follow industry best practices.
      </>
    ),
  },
  {
    title: 'Interoperability',
    Svg: require('../../static/img/data-interconnected-symbol.svg').default,
    description: (
      <>
        The more people working with a common language and interface, the more
        systems become connected. This will help in revolutionising the digital
        landscape which is evolving.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
