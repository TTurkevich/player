import classes from './Playlist.module.css'
import Track from '../Track'

const Playlist = () => {
  return (
    <div className={`${classes.content__playlist} ${classes.playlist}`}>
      
      <Track
        title={'Guilt'}
        author={'Nero'}
        album={'Welcome Reality'}
        time={'4:44'}
      />
      <Track
        title={'Electro'}
        author={'Dynoro, Outwork, Mr. Gee'}
        album={'Elektro'}
        time={'2:22'}
      />
      <Track
        title={'I"m fire'}
        author={'Ali Bakgor'}
        album={'I’m Fire'}
        time={'2:22'}
      />
      <Track
        title={'Non stop'}
        author={'Стоункат, Psychopath'}
        album={'Non Stop'}
        time={'4:12'}
      />
      <Track
        title={'Run Run'}
        author={'Jaded, Will Clarke, AR/CO'}
        album={'Run Run'}
        time={'2:54'}
      />
      <Track
        title={'Eyes on Fire'}
        author={'Blue Foundation, Zeds Dead'}
        album={'Eyes on Fire'}
        time={'5:20'}
      />
      <Track
        title={'Mucho Bien'}
        author={'HYBIT, Mr. Black, Offer Nissim, Hi Profile'}
        album={'Mucho Bien'}
        time={'3:41'}
      />
      <Track
        title={'Knives n Cherries'}
        author={'minthaze'}
        album={'Captivating'}
        time={'1:48'}
      />
      <Track
        title={'How Deep Is Your Love'}
        author={'Calvin Harris, Disciples'}
        album={'How Deep Is Your Love'}
        time={'3:32'}
      />
      <Track
        title={'Morena'}
        author={'Tom Boxer'}
        album={'Soundz Made in Romania'}
        time={'3:36'}
      />
    </div>
  )
}

export default Playlist
