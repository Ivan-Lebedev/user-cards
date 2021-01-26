import React from "react"
import { useHistory } from "react-router-dom"
import styles from "./UserCard.module.scss"

const UserCard = ({ user }) => {
  const { first_name, last_name, avatar, id } = user
  const history = useHistory()
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img className={styles.avatar} src={avatar} alt="user-avatar" />
        <div className={styles.name}>{`${first_name} ${last_name}`}</div>
        <button
          onClick={() => history.push(`/${id}`)}
          className={styles.button}
        >
          Show info
        </button>
      </div>
    </div>
  )
}

export default UserCard
