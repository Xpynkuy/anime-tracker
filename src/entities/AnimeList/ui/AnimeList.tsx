import { AnimeCard } from "@entities/AnimeCard"
import { Anime } from "@shared/api/type/type"
import styles from './AnimeList.module.scss'

interface AnimeListProps {
    items: Anime[]
}

const AnimeList = ({items}: AnimeListProps) => {
  return (
    <div className={styles.list}>
      {items.map(anime => (
        <AnimeCard key={anime.id} anime={anime}/>
      ))}
    </div>
  )
}

export default AnimeList
