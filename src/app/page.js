"use client"
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'


const categories = [
  {
    id: 1,
    title: 'Front-end',
  },
  {
    id: 2,
    title: 'Backend',
  },
  {
    id: 3,
    title: 'Technology',
  },
  {
    id: 4,
    title: 'Flutter',
  },
  {
    id: 5,
    title: 'React js',
  },
  {
    id: 6,
    title: 'Next js',
  },
  {
    id: 7,
    title: 'Django',
  },
  {
    id: 8,
    title: 'Python',
  },
  {
    id: 9,
    title: 'Python',
  },
  {
    id: 10,
    title: 'Python',
  },

]

const articleData = [
  {
    id: 1,
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    short_description: "If a dog chews shoes whose shoes does he choose?",
    categories: [
      {
        id: 1,
        title: "Front-end"
      }
    ],
    is_new: true,
    slug: 'abc'
  },
  {
    id: 2,
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    short_description: "If a dog chews shoes whose shoes does he choose?",
    categories: [
      {
        id: 1,
        title: "Front-end"
      }
    ],
    is_new: true,
    slug: 'abc'
  },
  {
    id: 3,
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    short_description: "If a dog chews shoes whose shoes does he choose?",
    categories: [
      {
        id: 1,
        title: "Front-end"
      }
    ],
    is_new: true,
    slug: 'abc'
  },
  {
    id: 4,
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    short_description: "If a dog chews shoes whose shoes does he choose?",
    categories: [
      {
        id: 1,
        title: "Front-end"
      }
    ],
    is_new: false,
    slug: 'abdf'
  },
  {
    id: 5,
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    short_description: "If a dog chews shoes whose shoes does he choose?",
    categories: [
      {
        id: 8,
        title: "Front-end"
      }
    ],
    is_new: false,
    slug: 'abdf'
  },
  {
    id: 6,
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    short_description: "If a dog chews shoes whose shoes does he choose?",
    categories: [
      {
        id: 6,
        title: "Front-end"
      }
    ],
    is_new: false,
    slug: 'abdf'
  },
  {
    id: 7,
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    short_description: "If a dog chews shoes whose shoes does he choose?",
    categories: [
      {
        id: 1,
        title: "Front-end"
      }
    ],
    is_new: false,
    slug: 'abdf'
  },
  {
    id: 8,
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    short_description: "If a dog chews shoes whose shoes does he choose?",
    categories: [
      {
        id: 1,
        title: "Front-end"
      }
    ],
    is_new: false,
    slug: 'abdf'
  },
  {
    id: 9,
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    short_description: "If a dog chews shoes whose shoes does he choose?",
    categories: [
      {
        id: 1,
        title: "Front-end"
      }
    ],
    is_new: false,
    slug: 'abdf'
  },
  {
    id: 10,
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    short_description: "If a dog chews shoes whose shoes does he choose?",
    categories: [
      {
        id: 1,
        title: "Front-end"
      }
    ],
    is_new: false,
    slug: 'abdf'
  },
  {
    id: 11,
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    short_description: "If a dog chews shoes whose shoes does he choose?",
    categories: [
      {
        id: 2,
        title: "Front-end"
      }
    ],
    is_new: false,
    slug: 'abdf'
  },
]


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [userData, setUserData] = useState({})

  const [articles, setArticles] = useState(articleData)
  const handleChangeCategory = (id) => {
    setSelectedCategory(id)
  }
  
  useEffect(() => {
    const userData = window.localStorage.getItem("UserData")
    setUserData(JSON.parse(userData))
  }, [])
  return (
    <section className='h-screen'>
      <section>
        <Header isSearch={true} title='Personal blog' />
      </section>
      <section className='flex'>
        <div className=" w-3/4">
          <div className=' px-5'>
            <ul className='flex flex-col items-center h-[90vh] overflow-y-scroll minimal-scrollbar'>
              <li className='mt-[50px] sticky top-0 py-3 px-3 z-10 rounded-md glass'>
                <div role="tablist" className="tabs tabs-bordered w-[780px] overflow-x-scroll no-scrollbar">
                  <a role="tab" className={`tab w-28 ${selectedCategory == 'All' && 'tab-active'}`} onClick={() => handleChangeCategory('All')}>All</a>

                  {
                    categories.map((category) => (
                      <a key={category.id} role="tab" className={`tab w-28 ${selectedCategory == category.id && 'tab-active'}`} onClick={() => handleChangeCategory(category.id)}>{category.title}</a>
                    ))
                  }
                </div>
              </li>
              {
                selectedCategory !== 'All' ? (
                  articles.filter((article) => article.categories.some((category) => category.id == selectedCategory))?.map((article) => (
                    <li key={article.id} className='mb-[10px]'>
                      <Link href={`/view-blog/${encodeURIComponent(article.slug)}`}>
                        <div className="card w-[800px] h-[250px] bg-base-100 shadow-xl flex flex-row">
                          
                          <div className="card-body">
                            <h2 className="card-title">
                              {article.title}
                              {
                                article.is_new && (
                                  <div className="badge badge-secondary">NEW</div>
                                )
                              }
                            </h2>
                            <p>{article.short_description}</p>
                            <div className="card-actions justify-start">
                              {
                                article.categories.map((category) => (
                                  <div key={category.id} className="badge badge-outline">{category.title}</div> 
                                ))
                              }
                            </div>
                          </div>
                          <div className='flex justify-center items-center'>
                            <figure>
                              <Image width={200} height={100} className='aspect-[4/3]' src={article.image} />
                            </figure>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))
                ) : (
                  articles.map((article) => (
                    <li key={article.id} className='mb-[10px]'>
                      <Link href={`/view-blog/${encodeURIComponent(article.slug)}`}>
                        <div className="card w-[800px] h-[250px] bg-base-100 shadow-xl flex flex-row">
                          
                          <div className="card-body">
                            <h2 className="card-title">
                              {article.title}
                              {
                                article.is_new && (
                                  <div className="badge badge-secondary">NEW</div>
                                )
                              }
                            </h2>
                            <p>{article.short_description}</p>
                            <div className="card-actions justify-start">
                              {
                                article.categories.map((category) => (
                                  <div key={category.id} className="badge badge-outline">{category.title}</div> 
                                ))
                              }
                            </div>
                          </div>
                          <div className='flex justify-center items-center'>
                            <figure>
                              <Image width={200} height={100} className='aspect-[4/3]' src={article.image} />
                            </figure>
                          </div>
                        </div>
                      </Link>
                    </li>
                    
                  ))
                )
              }
            </ul>
          </div>
        </div>
        <div className=" w-1/4">
        </div>
      </section>
    </section>
  )
}
