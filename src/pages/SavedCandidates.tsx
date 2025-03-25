import DeleteCandidate from "../components/deleteCandidate";

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
                      <img src={candidate.avatar_url} style={{ width: "100px", height: "100px" }} />
                    </td>
                    <td>{candidate.login}</td>
                    <td>{candidate.location || "not available"}</td>
                    <td>{candidate.email || "not available"} </td>
                    <td>{candidate.company || "not available"}</td>
                    <td>{candidate.bio || "not available"}</td>
                    <td>{<DeleteCandidate />}</td>
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
