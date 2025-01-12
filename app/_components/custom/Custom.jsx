import styles from './Custom.module.css'

function Custom() {
  return (
    <section className={styles.Custom}>
      <div className='container'>
        <div className={styles.customContent}>
        <div className={styles.dash}></div>
        <h2 className={styles.title}>
        Visualize, Customize, <br/>
        Actualize.</h2>
        </div>
      </div>
    </section>
  )
}

export default Custom
