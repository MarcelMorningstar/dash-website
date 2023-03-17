import styles from '../styles/rideheader.module.css';

function RideRequestBackground(){
    return(
        <div className={styles['ride-header-background']}>
          <div className={styles['ride-header-background-container']}>
            <div className={styles['ride-header-line']} style={{
              backgroundColor:'black',
              height:'100%',
              width:'100%'
            }} />
            <div className={styles['ride-header-line']} style={{
              backgroundColor:'#F5AD17',
              height:'100%',
              width:'100%'
            }} />
            <div className={styles['ride-header-line']} style={{
              backgroundColor:'rgba(245, 173, 23, 0.7)',
              height:'100%',
              width:'100%'
            }} />
            <div className={styles['ride-header-line']} style={{
              backgroundColor:'rgba(1, 1, 1, 0)',
              height:'100%',
              width:'100%'
            }} />
            <div className={styles['ride-header-line']} style={{
              backgroundColor:'rgba(1, 1, 1, 1)',
              height:'100%',
              width:'100%'
            }} />
          </div>
        </div>
    );
}

export default RideRequestBackground;