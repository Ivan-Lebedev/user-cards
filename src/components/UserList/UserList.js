import React, { useState } from "react"
import styles from "./UserList.module.scss"
import UserCard from "../UserCard/UserCard"
import useRequest from "../../hooks/useRequest"
import { usersPageURL } from "../../constants/url"
import Pagination from "../Pagination/Pagination"
import Spinner from "../Spinner/Spinner"

const UserList = () => {
  const [page, setPage] = useState(0)
  const { data, isLoading, isError} = useRequest(usersPageURL, page)

  return (
    <>
      <main className={styles.container}>
        {isError && <div>something went wrong...</div>}
        {isLoading ? (
          <Spinner />
        ) : (
          <section className={styles.cards}>
            {data.data.map((user) => {
              return <UserCard key={user.id} user={user} />
            })}
          </section>
        )}
        <Pagination
          currentPage={page}
          itemsCount={data.total}
          pageSize={data.per_page}
          onPageChange={({ selected }) => setPage(selected + 1)}
        />
      </main>
    </>
  )
}

export default UserList
