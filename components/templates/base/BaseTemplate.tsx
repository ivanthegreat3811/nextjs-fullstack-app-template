import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
}

export default function BaseTemplate({ sampleTextProp }: IBaseTemplate) {
  return <div className={styles.container}>{sampleTextProp}</div>;
}
