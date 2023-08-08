import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pengetahuan',
    Svg: require('@site/static/img/calendar-svgrepo-com.svg').default,
    description: (
      <>
        Perencanaan perangkat daerah merupakan hal yang penting untuk diketahui seluruh SDM Dinas Perhubungan Kabupaten Pasuruan.
      </>
    ),
  },
  {
    title: 'Pemberdayaan',
    Svg: require('@site/static/img/color-blocks-documentation-svgrepo-com.svg').default,
    description: (
      <>
        <i>Handbook</i> ini ditujukan untuk membantu memberdayakan seluruh SDM Dinas Perhubungan Kabupaten Pasuruan untuk meningkatkan pemahaman terkait perencanaan perangkat daerah.
      </>
    ),
  },
  {
    title: 'Sentralisasi',
    Svg: require('@site/static/img/monitor-graph-svgrepo-com.svg').default,
    description: (
      <>
        Sentralisasikan informasi perencanaan di satu tempat, dari dokumen perencanaan perangkat daerah hingga pedoman teknis terkait perencanaan.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
