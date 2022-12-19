document.addEventListener('DOMContentLoaded', () => {
  updatePost()
})

function savePost() {
  const URL = 'http://localhost:3500/api/save'
  if (
    document.getElementById('date').value == '' ||
    document.getElementById('txtDesc').value == null
  ) {
    alert('Para salvar seu Post, você deve preencher todos os campos!')
  } else {
    let description = document.getElementById('txtDesc').value
    let dateEUA = document.getElementById('date').value

    let dateBR =
      dateEUA.slice(8, 10) +
      '/' +
      dateEUA.slice(5, 7) +
      '/' +
      dateEUA.slice(0, 4)

    let content = { date: dateBR, description }
    const request = {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(content)
    }

    fetch(URL, request)
      .then(res => {
        document.getElementById('txtDesc').value = ''
        document.getElementById('date').value = ''
        updatePost()
      })
      .catch(error => {
        console.log(`Erro encontrado! ${error}`)
      })
  }
}

function updatePost() {
  const URL = 'http://localhost:3500/api/find'

  fetch(URL)
    .then(res => {
      return res.json()
    })
    .then(json => {
      // let posts = JSON.parse(json)
      let posts = json;
      let contentPosts = ''

      posts.forEach(element => {
        if (element.id != null) {
          let htmlPost = `<div id="${element.id}" class="posts">
          <div class="postsDate">
            <div class="postDel" onclick="deletePosts(this)"></div>
            <div class="postDate">${element.date}</div>
          </div>
          <div class="postsDesc">${element.description}</div>
        </div>`

          contentPosts += htmlPost
        }
      })

      document.getElementById('divDisplay').innerHTML = contentPosts
    })
}

function deletePosts(e) {
  let id = e.parentElement.parentElement.id
  const URL = 'http://localhost:3500/api/delete'

  const content = { id: id }
  const request = {
    method: 'DELETE',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(content)
  }

  fetch(URL, request)
    .then(res => {
      updatePost()
    })
    .catch(error => {
      console.log(`Erro encontrado ${error}`)
    })
}
