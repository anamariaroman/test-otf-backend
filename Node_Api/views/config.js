const formRegister = document.getElementById("saveChanges")

formRegister.addEventListener("submit", (event) => {
    event.preventDefault()
    let register_name = document.getElementById("register_name").value
    let register_last_name = document.getElementById("register_last_name").value
    let register_document_id = document.getElementById("register_document_id").value
    let registration = {
        name: register_name,
        last_name: register_last_name,
        document_id: register_document_id
    }

    let registrationJson = JSON.stringify(registration)
    console.log(registrationJson)
    fetch('http://localhost:5000/user',{
        method: 'Post',
        body: registrationJson
    })
    setTimeout(()=>{
        window.location.reload(true)
    }, 500)
    formRegister.focus()
})

fetch('http://localhost:5000/user')
.then(response => response.json())
.then(data =>{
    let html = '';
    let i = 1;
    let j = i + 1;

    data.forEach((user) => {
        nameBottomAct = "botom"+i
        nameBottomDel = "botom"+j
        html += `
        <fieldset>
            <form class="form-user p-1">
                <div class="form-group p-1">
                    ID<h2>${user.document_id}</h2>
                    <br>
                </div>
                <div class="form-user p-1">
                    User<h2>${user.name} ${user.last_name}</h2>
                    <br>
                </div>
                <div class="form-user p-1">
                    <button class="btn btn-success btn-block mx-auto" id=${nameBottomAct} onclick="updateUser(${user.id})">
                        Update
                    </button>
                    <button class="btn btn-success btn-block mx-auto" id=${nameBottomDel} onclick="deleteUser(${user.id})">
                        Delete
                    </button>
                </div>
            </form>
        </fieldset>
        `
        //insert table to object
        i=j+1
        j=i+1
        document.getElementById('showChanges').innerHTML = html
        // Go to HTML file
    })
})

function deleteUser(id){
    fetch(`http://localhost:5000/user/${id}`,{
        method: 'Delete',
        params: id
    })
    setTimeout(()=>{
        window.location.reload(true)
    }, 500)
    formRegister.focus()
}