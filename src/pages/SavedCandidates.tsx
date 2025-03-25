// TODO: figure out what I need to import

// const tableBodyE1 = document.querySelector('#table-body');

// function createE1(candidate){
//   const rowE1 = document.createElement('tr');
//   const avatar_urlE1 = document.createElement('td');
//   const loginE1 = document.createElement('td');
//   const locationE1 = document.createElement('td');
//   const emailE1 = document.createElement('td');
//   const bioE1 = document.createElement('td');

//   avatar_urlE1.textContent = candidate.avatar_url;
//   loginE1.textContent = candidate.login;
//     // TODO: finish code if i am on the right track

//   tableBodyE1?.appendChild(rowE1);
//   rowE1.appendChild(avatar_urlE1);
//   rowE1.appendChild(loginE1);
//   // TODO: finish code if i am on the right track

//   // function readStorage(){
//   //   //Read conents of inputInfo (name of key stored by modal)
//   //   return inventoryList = JSON.parse(localStorage.getItem('candidate   '));
//   // }
// }

const SavedCandidates = () => {

  const savedCandidates = JSON.parse(localStorage.getItem("candidate"))

  return (
    <>
      <h1>Potential Candidates</h1>
      <main>

        <table>
          <thead>
            <tr>
              <th id="image">Image</th>
              <th id="name">Name</th>
              <th id="location">Location</th>
              <th id="email">Email</th>
              <th id="company">Company</th>
              <th id="bio">Bio</th>
              <th id="reject">Reject</th>
            </tr>
            </thead>
            <tbody id="table-body">


              {
                savedCandidates.map(candidate => {
                  return (
                    <tr>
                      <td>
                        <img src={candidate.avatar_url} style={{width: "150px"}}/>
                      </td>
                      <td>{candidate.login}</td>
                      <td>{candidate.location || "not available"}</td>
                      <td>{candidate.email || "not available"} </td>
                      <td>{candidate.company || "not available"}</td>
                      <td>{candidate.bio || "not available"}</td>
                      <td>7</td>
                    </tr>
                  )
                })

              }



            </tbody>
        </table>



      </main>
    </>
  );
};

export default SavedCandidates;
