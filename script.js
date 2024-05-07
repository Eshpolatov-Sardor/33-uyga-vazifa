const wrapper = document.querySelector(".wrapper");

let URL = "https://dummyjson.com/products";

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((product) => {
    let allProducts = product.products;
    console.log(allProducts);

    allProducts.map((item) => {
      const { title, brand, price, thumbnail, images } = item;

      images.map((item) => {
        return (wrapper.innerHTML += `
                <p>
                    <h4>
                        <h1>Title: ${title}</h1>
                        <h2>Brand: ${brand}</h2>
                        <h2>Price: ${price}$</h2>
                    </h4>
                     <h3>
                        <img src=${thumbnail} alt=${title}/>
                        <img src=${item} alt=${title}/>
                    </h3>
                </p>
            `);
      });
    });
  });
