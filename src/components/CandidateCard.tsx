
const CandidateCard = () => {
    <><div className='card'>
                <img src={candidate.avatar_url} />
                <div>
                    <h2>{candidate.login}</h2>
                    <p>{candidate.location}</p>
                    <p>{candidate.email}</p>
                </div>
            </div>


            <div>

                <button className="next"
                    onClick={() => {
                        setCurrentIndex(currentIndex + 1)
                    }}
                >Next Candidate</button>

                <button className="save"
                    onClick={() => {
                        console.log("saving candidate")
                        localStorage.setItem('candidate', JSON.stringify(candidate))
                        // TODO:  save multiple! -> collection -> array
                    }}
                >Save Candidate</button>


            </div>
    </>        

}

export default CandidateCard


































// // TODO: This is the FilmCard code from the Mod13 mini project. 
// // Using this to see how much can just be copied over

// import type React from 'react';
// // TODO: Uncomment when Candidate interface is added
// // import type Candidate from '../interfaces/Candidate.interface';
// import { IoEyeOutline } from 'react-icons/io5';
// import { ImCross } from 'react-icons/im';
// import { CgPlayListAdd } from 'react-icons/cg';


// // TODO: Define FilmCardProps
// type CandidateCardProps = {

// };

// const CandidateCard = () => {
//   return (
//     <>
//       {currentFilm?.Title ? (
//         <section className='CandidateCard'>
//           <figure>{/* TODO: Add film poster*/}</figure>
//           <article className='details'>
//             {/* TODO: Add film title, director, actors, released, and genre */}
//           </article>
//           <article className='plot'>{/* TODO: Add film plot here */}</article>
//           {/* If film is on Watch List or Seen It list film can be removed
//               Else film can be added to Watch List or Seen It list */}
//           {onWatchList || onSeenItList ? (
//             <aside className='icons'>
//               {/* TODO: Add remove film from localStorage logic here */}
//               <ImCross style={{ fontSize: '40px', cursor: 'pointer' }} />
//             </aside>
//           ) : (
//             <aside className='icons'>
//               {/* TODO: Implement add to WatchList logic here*/}
//               <CgPlayListAdd style={{ fontSize: '50px', cursor: 'pointer' }} />
//               {/* TODO: Implement add to Seen It list logic here*/}
//               <IoEyeOutline style={{ fontSize: '50px', cursor: 'pointer' }} />
//             </aside>
//           )}
//         </section>
//       ) : (
//         <h1 style={{ margin: '16px 0' }}>Please search for a film.</h1>
//       )}
//     </>
//   );
// };

// export default CandidateCard;