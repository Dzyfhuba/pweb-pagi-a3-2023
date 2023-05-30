const getData = () => {
  const partFakultas = document.querySelector('.part-fakultas')

  fetch('data.json')
    .then(res => res.json())
    .then(json => {
      console.log(json)

      let isiHTML = ''

      json.forEach(item => {
        isiHTML += `
        <div class="part-item">
          <img src="${item.image}" alt="${item.faculty}">
          <span>${item.faculty}</span>
        </div>
        `
      })
      partFakultas.innerHTML = isiHTML
    })
}

getData()