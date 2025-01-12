import Image from 'next/image'
import styles from './Profile.module.css';
import { Pagination } from 'antd';


function Profile() {
  return (
    <section className={styles.profile}>
      <div className='container'>
      <div className={styles.profileTitle}>
        <h5 className={styles.subTitle}>Our Works</h5>
        <h2 className={styles.title}>Our providing reliable </h2>
        <Image
                      src={"/images/Group-1.png"}
                      alt="image"
                      width={67}
                      height={7}
                    />

        <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore 
        </p>
      </div>

        <div className={styles.profileContent}>
            <div className={styles.profileItem}>
                <Image src={"/images/Rectangle-14.png"} width={660} height={691} alt='img'/>
                <p>Paint protection films</p>
            </div>
            <div className={styles.profileItem}>
                <Image src={"/images/Rectangle-7.png"} width={660} height={691} alt='img'/>
                <p>Paint protection films</p>
            </div>
        </div>
        <div className={styles.profileContent}>
            <div className={styles.profileItem}>
                <Image src={"/images/Rectangle-11.png"} width={660} height={691} alt='img'/>
                <p>Paint protection films</p>
            </div>
            <div className={styles.profileItem}>
                <Image src={"/images/Rectangle-7.png"} width={660} height={691} alt='img'/>
                <p>Paint protection films</p>
            </div>
        </div>
        <div className={styles.profileContent}>
            <div className={styles.profileItem}>
                <Image src={"/images/Rectangle-12.png"} width={660} height={691} alt='img'/>
                <p>Paint protection films</p>
            </div>
            <div className={styles.profileItem}>
                <Image src={"/images/Rectangle-7.png"} width={660} height={691} alt='img'/>
                <p>Paint protection films</p>
            </div>
        </div>
        <div className={styles.profileContent}>
            <div className={styles.profileItem}>
                <Image src={"/images/Rectangle-13.png"} width={660} height={691} alt='img'/>
                <p>Paint protection films</p>
            </div>
            <div className={styles.profileItem}>
                <Image src={"/images/Rectangle-7.png"} width={660} height={691} alt='img'/>
                <p>Paint protection films</p>
            </div>
        </div>
        <Pagination align="center" defaultCurrent={1} total={50}  className={styles.pagination}/>
      </div>
    </section>
  )
}

export default Profile
