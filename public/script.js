const load = document.getElementById('load')
const wrapper = document.querySelector(".wrapper")
load.addEventListener('click', (e) => {
    load.disabled = true
    try {
        fetch('/load')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.length === 0) {
                    console.log('There are no users')
                }
                data.map(card => {
                    const {avatar, first_name, email} = card
                    wrapper.insertAdjacentHTML('beforeend', `
                      <div class="wrapper">
                        <div class="card" style="width: 18rem;">
                          <img src="${avatar}"  class="card-img-top" alt="img">
                           <div class="card-body">
                             <p>
                             <strong>${first_name}</strong>
                             </p>
                            <p>${email}</p>
                           </div>
                       </div>
                      </div>
        `)
                })
            });
    } catch (e) {
        console.log(e)
    }
})