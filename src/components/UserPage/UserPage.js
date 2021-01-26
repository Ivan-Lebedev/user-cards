import React from "react"
import styles from "./UserPage.module.scss"
import useRequest from "../../hooks/useRequest"
import { userURL } from "../../constants/url"
import { useHistory } from "react-router-dom"
import Spinner from "../Spinner/Spinner"

const UserPage = ({ match }) => {
  const userId = match.params.userId
  const { data, isLoading, isError } = useRequest(userURL, userId)
  const { avatar, email, first_name, last_name } = data.data
  const history = useHistory()

  return (
    <div className={styles.container}>
      {isError && <div>something went wrong...</div>}
      {isLoading ? (
        <Spinner/>
      ) : (
        <>
          <section className={styles.section}>
            <img className={styles.avatar} src={avatar} alt="user-avatar" />
          </section>
          <section className={styles.section}>
            <div className={styles.title}>User Info</div>
            <div className={styles.name}>
              Name: {`${first_name} ${last_name}`}
            </div>
            <div className={styles.name}>Email: {email}</div>
            <button className={styles.button} onClick={() => history.push(`/`)}>
              Back
            </button>
          </section>
        </>
      )}
    </div>
  )
}

export default UserPage
