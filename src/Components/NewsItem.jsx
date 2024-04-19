import React from 'react'
import image from '../assets/news.jpg'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card-container d-inline-block my-3 mx-3"
      style={{ maxWidth: '345px', display: 'flex', flexDirection: 'column' }}
    >
      <div
        className="card bg-dark text-light mb-3 px-2 py-2"
        style={{ height: '100%', width: '100%' }}
      >
        <img
          src={src ? src : image}
          style={{ height: '200px', width: '330px' }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quo neque, molestiae dignissimos eius minus sunt quasi aliquam veniam deleniti!'}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
