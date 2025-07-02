import React from 'react'
import { homeBooksStyles as styles } from '../assets/dummystyles'
import { hbbooks } from '../assets/dummydata'
import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomeBook = () => {
  return (
      <div className={styles.section}>
          <div className={styles.container}>
              <div className={styles.card}>
                  <div className="text-center mb-12">
                      <h2 className={styles.heading}>Book Sellor Favorite</h2>
                      <div className={styles.headingLine} />
                  </div>
                  <div className={styles.grid}>
                      {hbbooks.map((book) => {
                          return (
                              <div key={book.id} className={styles.bookCard}>
                                  <div className={styles.imageWrapper}>
                                      <img src={book.image} alt={book.title} className={styles.image} />
                                      <div className={styles.rating}>
                                          {[...Array(5)].map((_, i) => (
                                              <Star className={`h-4 w-4 ${i<book.rating ? 'text-[#43CBAC] fill-[#43C6AC]' : 'text-gray-300'}`} key={i} />
                                          ))}
                                      </div>
                                  </div>
                                  <h3 className={styles.title}>{book.title}</h3>
                                  <p className={styles.author}>{ book.author}</p>
                              </div>
                          )
                      })}
                  </div>
                  <div className={styles.viewBtnWrapper}>
                      <Link to='/books' className={styles.viewBtn}>
                          <span>View all books</span>
                            <ArrowRight className={styles.viewIcon} />
                      </Link>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default HomeBook