import React from 'react'
import Layout from '../components/Layout'
import "../styles/highlighter.css";

export const HighlighterPage = () => {
  return (
    <Layout>
      <div className="highlighter-main-container">

        <p className="highlighter-title">Highlighters</p>
        <p className="highlighter-punch-line">Highlight the best, forget the rest!</p>

        <div className="highlighter-grid-container">

          <div className="gel-highlighter">
            <img src="\assets\vectors\merchandise\highlighter\gel-highlighter.jpg" height={200} width={200}/>
            <div className="highlighter-details">
              <p className="highlighter-name">Multicolor Gel Highlighters</p>
              <p className="highlighter-availability">In Stock</p>
              <p className="highlighter-price">Rs.200.00</p>

              <div className="highlighter-add-to-cart">Add To Cart</div>
              <div className="highlighter-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="pastel-highlighter">
            <img src="\assets\vectors\merchandise\highlighter\pastel-highlighter.webp" height={200} width={200}/>
            <div className="highlighter-details">
              <p className="highlighter-name">Multicolor Pastel Highlighters</p>
              <p className="highlighter-availability">In Stock</p>
              <p className="highlighter-price">Rs.200.00</p>

              <div className="highlighter-add-to-cart">Add To Cart</div>
              <div className="highlighter-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="glitter-highlighter">
            <img src="\assets\vectors\merchandise\highlighter\glitter-highlighter.webp" height={200} width={200}/>
            <div className="highlighter-details">
              <p className="highlighter-name">Multicolor Glitter Highlighters</p>
              <p className="highlighter-availability">In Stock</p>
              <p className="highlighter-price">Rs.200.00</p>

              <div className="highlighter-add-to-cart">Add To Cart</div>
              <div className="highlighter-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="erasable-highlighter">
            <img src="\assets\vectors\merchandise\highlighter\erasable-highlighter.jpg" height={200} width={200}/>
            <div className="highlighter-details">
              <p className="highlighter-name">Multicolor Erasable Highlighters</p>
              <p className="highlighter-availability">In Stock</p>
              <p className="highlighter-price">Rs.200.00</p>

              <div className="highlighter-add-to-cart">Add To Cart</div>
              <div className="highlighter-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="pen-highlighter">
            <img src="\assets\vectors\merchandise\highlighter\pen-highlighter.jpg" height={200} width={200}/>
            <div className="highlighter-details">
              <p className="highlighter-name">Pen with Highlighters</p>
              <p className="highlighter-availability">In Stock</p>
              <p className="highlighter-price">Rs.200.00</p>

              <div className="highlighter-add-to-cart">Add To Cart</div>
              <div className="highlighter-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="liquid-ink-highlighter">
            <img src="\assets\vectors\merchandise\highlighter\liquid-ink-highlighter.webp" height={200} width={200}/>
            <div className="highlighter-details">
              <p className="highlighter-name">Liquid Ink Highlighters</p>
              <p className="highlighter-availability">In Stock</p>
              <p className="highlighter-price">Rs.200.00</p>

              <div className="highlighter-add-to-cart">Add To Cart</div>
              <div className="highlighter-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="tape-highlighter">
            <img src="\assets\vectors\merchandise\highlighter\tape-highlighter.jpg" height={200} width={200}/>
            <div className="highlighter-details">
              <p className="highlighter-name">Tape Highlighters</p>
              <p className="highlighter-availability">In Stock</p>
              <p className="highlighter-price">Rs.200.00</p>

              <div className="highlighter-add-to-cart">Add To Cart</div>
              <div className="highlighter-buy-now">Buy Now</div>
            </div>
          </div>

          {/* <div className="lined-highlighter">
            <img src="\assets\vectors\merchandise\highlighter\lined-highlighter.jpg" height={200} width={200}/>
            <div className="highlighter-details">
              <p className="highlighter-name">Multicolor Ruled Sticky Notes</p>
              <p className="highlighter-availability">In Stock</p>
              <p className="highlighter-price">Rs.200.00</p>

              <div className="highlighter-add-to-cart">Add To Cart</div>
              <div className="highlighter-buy-now">Buy Now</div>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}
