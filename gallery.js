console.log('gallery.js')
 
// function getGallery() {
// }

const getGallery = async () => {
  console.log('start')
  const data = await fetch('https://jsonplaceholder.typicode.com/photos')
    // .then(async (response) => {
    //   console.log('mulai')
    //   const data = await response.json()
    //   console.log(data)
    //   console.log('selesai')
    //   return data
    // })
    .then(response => response.json())
  console.log(data)
  console.log('finish')

  const container = document.querySelector('#gallery > #data')

  container.innerHTML = data.map(item => {
    return `
    <div style="background-color: #ff6600; display: flex; ">
      <img src="${item.url}" style="height: 200px; width:200px; object-fit: contain;">
      <span style="align-self: center; padding: 8px;">${item.title}</span>
    </div>
    `
  })
}

getGallery()